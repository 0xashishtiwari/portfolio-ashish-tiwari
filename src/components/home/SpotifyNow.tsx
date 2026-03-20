"use client";

import { useEffect } from "react";
import Image from "next/image";
import SpotifySkeleton from "./SpotifySkeleton";
import { useSpotifyStore } from "@/store/useSpotifyStore";


export default function SpotifyCard() {
  const { track,  error, fetchCurrentTrack } =
    useSpotifyStore();

  useEffect(() => {
    fetchCurrentTrack();

    const interval = setInterval(fetchCurrentTrack, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [fetchCurrentTrack]);

  // ✅ KEY FIX: show skeleton immediately if no track
  if (!track) {
    return <SpotifySkeleton />;
  }

  return (
    <div className="px-6 py-0 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold font-serif">
 Just Played
   
</h2>

      </div>

      {/* Card */}
      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-4 rounded-xl border p-3 transition hover:bg-accent hover:scale-[1.02]
          ${
            track.isPlaying
              ? "border-green-500/40 bg-green-500/5"
              : "border-border"
          }
        `}
      >
        <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0">
          <Image
            src={track.albumImageUrl}
            alt={track.song}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 overflow-hidden">
          <p className="font-medium truncate">
            {track.song}
          </p>

          <p className="text-sm text-muted-foreground truncate">
            {track.artist}
          </p>

          <p className="text-xs text-muted-foreground truncate">
            {track.album}
          </p>

          {error && (
            <span className="text-xs text-yellow-500">
              Offline mode
            </span>
          )}
        </div>
      </a>
    </div>
  );
}
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useSpotifyStore } from "@/store/useSpotifyStore";

function SpotifySkeleton() {
  return (
    <div className="px-4 py-6 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-5 w-24 bg-muted rounded-md animate-pulse" />
        <div className="h-6 w-20 bg-muted rounded-md animate-pulse" />
      </div>

      {/* Card */}
      <div className="flex items-center gap-4 rounded-xl border border-border p-3">
        <div className="w-16 h-16 rounded-lg bg-muted animate-pulse" />

        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 w-3/4 bg-muted rounded-md animate-pulse" />
          <div className="h-3 w-1/2 bg-muted rounded-md animate-pulse" />
          <div className="h-3 w-1/3 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function SpotifyCard() {
  const { track, isLoading, error, fetchCurrentTrack } =
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
    <div className="px-6 py-2 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold font-serif">
  Spotify
</h2>

        <Badge
          variant="outline"
          className="px-3 py-1 text-xs flex items-center gap-2"
        >
          {track.isPlaying ? (
            <>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>

              <span className="text-green-500 text-sm font-semibold">
                Playing
              </span>
            </>
          ) : (
            <span className="text-muted-foreground text-sm">
              Last Played
            </span>
          )}
        </Badge>
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
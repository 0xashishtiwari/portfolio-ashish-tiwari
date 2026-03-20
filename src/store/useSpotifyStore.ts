import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

type Track = {
  song: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  isPlaying: boolean;
  songUrl: string;
};

type SpotifyState = {
  track: Track | null;
  lastTrack: Track | null;
  isLoading: boolean;
  error: string | null;
  fetchCurrentTrack: () => Promise<void>;
};

export const useSpotifyStore = create<SpotifyState>()(
  persist(
    (set, get) => ({
      track: null,
      lastTrack: null,
      isLoading: false,
      error: null,

      fetchCurrentTrack: async () => {
        set({ isLoading: true, error: null });

        try {
          const res = await axios.get("/api/spotify");
          const data: Track = res.data;

          set({
            track: data,
            lastTrack: data, // ✅ IMPORTANT: cache latest success
            isLoading: false,
          });
        } catch (err) {
          console.error(err);

          const fallback = get().lastTrack;

          set({
            track: fallback, // ✅ fallback
            error: "Failed to fetch current track",
            isLoading: false,
          });
        }
      },
    }),
    {
      name: "spotify-store",

      // ✅ Only persist what matters
      partialize: (state) => ({
        lastTrack: state.lastTrack,
      }),
    }
  )
);
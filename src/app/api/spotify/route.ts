import { getLastPlayedTrack } from "@/lib/spotify";

export async function GET() {


  try {
    const data = await getLastPlayedTrack();

    // 🚨 If Spotify failed or returned nothing
    if (!data || !data.items) {
      return new Response(
        JSON.stringify({ error: "No data from Spotify" }),
        { status: 500 }
      );
    }

    const song = data.items?.[0];

    return Response.json({
      song: song?.track?.name ?? null,
      artist: song?.track?.artists?.[0]?.name ?? null,
      album: song?.track?.album?.name ?? null,
      albumImageUrl: song?.track?.album?.images?.[0]?.url ?? null,
      isPlaying: data?.currently_playing_type === "track",
      songUrl: song?.track?.external_urls?.spotify ?? null,
    });

  } catch (err: any) {
    console.error("API ERROR:", err.message);

    // 🚨 Handle rate limit specifically
    if (err.message?.includes("Too many requests")) {
      return new Response(
        JSON.stringify({ error: "Rate limited by Spotify" }),
        { status: 429 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
import { getLastPlayedTrack } from "@/lib/spotify";

export async function GET(){
    const data = await getLastPlayedTrack();

    const song = data?.items?.[0];

    return Response.json({
        song : song.track?.name,
        artist : song.track?.artists?.[0]?.name,
        album : song.track?.album?.name,
        albumImageUrl : song.track?.album?.images?.[0]?.url,
        isPlaying : data?.currently_playing_type === 'track',
        songUrl : song.track?.external_urls?.spotify
    })

}
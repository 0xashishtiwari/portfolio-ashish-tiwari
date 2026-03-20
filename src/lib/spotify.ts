const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const RECENT_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

export async function getAccessToken(){
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body : new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN || ''
        })
    });

    return response.json();
    
}

export const getLastPlayedTrack = async ()=>{
    const { access_token } = await getAccessToken();

    const response = await fetch(RECENT_TRACKS_ENDPOINT, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    });
    return response.json();
}
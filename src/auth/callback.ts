import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string;

type TokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  scope: string;
  expires_in: number;
  refresh_token?: string;
};

export const handleSpotifyCallback = async () => {
  const codeVerifier = localStorage.getItem('code_verifier') as string;
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  if (!code || !codeVerifier) {
    throw new Error('Invalid OAuth state or missing code/verifier');
  }

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    }),
  };

  try {
    const { data } = await axios.post<TokenResponse>(
      'https://accounts.spotify.com/api/token',
      payload.body,
      { headers: payload.headers }
    );

    const expiresAt = Date.now() + data.expires_in * 1000 - 10_000; // refresh 10s early
    localStorage.setItem('spotify_access_token', data.access_token);
    if (data.refresh_token)
      localStorage.setItem('spotify_refresh_token', data.refresh_token);
    localStorage.setItem('spotify_expires_at', String(expiresAt));
  } catch (error) {
    console.error(error);
  }

  //   localStorage.setItem('access_token', data.access_token);
};

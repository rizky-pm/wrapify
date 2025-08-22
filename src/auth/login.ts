import { base64encode, generateRandomString, sha256 } from './pkce';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string;

const SCOPES = [
  'user-top-read',
  'user-read-recently-played',
  'playlist-read-private',
  'user-follow-read',
];
const AUTH_URL = new URL('https://accounts.spotify.com/authorize');

export const startSpotifyLogin = async () => {
  const codeVerifier = generateRandomString();
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  window.localStorage.setItem('code_verifier', codeVerifier);
  //   sessionStorage.setItem('code_verifier', codeVerifier);

  const params = {
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: SCOPES.join(' '),
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: REDIRECT_URI,
  };

  AUTH_URL.search = new URLSearchParams(params).toString();
  window.location.href = AUTH_URL.toString();
};

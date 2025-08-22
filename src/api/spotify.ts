import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.spotify.com/v1' });

const getAccessToken = () => {
  return localStorage.getItem('spotify_access_token');
};

const getExpiresAt = () => {
  return Number(localStorage.getItem('spotify_expires_at') || 0);
};

const getRefreshToken = () => {
  return localStorage.getItem('spotify_refresh_token');
};

const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

  if (!refreshToken) throw new Error('Missing refresh token');

  const body = new URLSearchParams();
  body.append('client_id', clientId);
  body.append('grant_type', 'refresh_token');
  body.append('refresh_token', refreshToken);

  const { data } = await axios.post(
    'https://accounts.spotify.com/api/token',
    body,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );

  const expiresAt = Date.now() + data.expires_in * 1000 - 10_000;
  localStorage.setItem('spotify_access_token', data.access_token);
  localStorage.setItem('spotify_expires_at', String(expiresAt));
};

api.interceptors.request.use(async (config) => {
  if (Date.now() >= getExpiresAt()) {
    try {
      await refreshAccessToken();
    } catch {
      localStorage.clear();
      /* ignore, 401 will be handled */
    }
  }

  const token = getAccessToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getMe = async () => {
  const { data } = await api.get('/me');
  return data;
};

export const getUsersTopItems = async () => {
  const { data } = await api.get('/me/top/artists');

  return data;
};

export default api;

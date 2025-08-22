import { handleSpotifyCallback } from '@/auth/callback';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const [status, setStatus] = useState('Signnin you in...');
  const navigate = useNavigate();

  useEffect(() => {
    handleSpotifyCallback()
      .then(() =>
        navigate('/dashboard', {
          replace: true,
        })
      ) // back to app
      .catch((e) => setStatus(`Login failed: ${e.message}`));
  }, [navigate]);

  return <p>{status}</p>;
};

export default CallbackPage;

import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AuthenticatedRoot = () => {
  const accessToken = localStorage.getItem('spotify_access_token');

  if (!accessToken) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <main className='flex flex-col justify-center items-center'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default AuthenticatedRoot;

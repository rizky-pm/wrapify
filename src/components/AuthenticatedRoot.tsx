import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AuthenticatedRoot = () => {
  const accessToken = localStorage.getItem('spotify_access_token');

  if (!accessToken) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <main className='flex'>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default AuthenticatedRoot;

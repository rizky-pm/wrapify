import { Navigate, Outlet } from 'react-router-dom';

const UnauthenticatedRoot = () => {
  const accessToken = localStorage.getItem('spotify_access_token');

  if (accessToken) {
    return <Navigate to={'/dashboard'} replace />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default UnauthenticatedRoot;

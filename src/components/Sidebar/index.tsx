import { useGetMe } from '@/hooks/useSpotifyApi';
import { TypographyH3 } from '../ui/typography';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const Sidebar = () => {
  const { data: me, isLoading: loadingMe } = useGetMe();

  const navigate = useNavigate();

  const onClickSignOut = () => {
    localStorage.clear();

    navigate('/', { replace: true });
  };

  if (loadingMe) return <p>Loading...</p>;

  return (
    <nav className='w-1/5 bg-foreground text-background h-screen p-4 flex flex-col space-y-2'>
      <TypographyH3>Hi, {me.display_name}</TypographyH3>

      <NavLink
        to='/dashboard'
        className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/top-statistic'
        className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
      >
        Top Statistic
      </NavLink>
      <NavLink
        to='/genres-insights'
        className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
      >
        Genres & Insights
      </NavLink>

      <Button
        variant={'destructive'}
        className='mt-auto'
        onClick={onClickSignOut}
      >
        Log Out
      </Button>
    </nav>
  );
};

export default Sidebar;

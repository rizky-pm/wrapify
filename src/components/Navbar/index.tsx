import { TypographyH2 } from '../ui/typography';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };

  return (
    <nav className='bg-foreground text-background flex justify-center w-full'>
      <div className='max-w-7xl flex justify-between items-center py-4 w-full'>
        <TypographyH2>Wrapify</TypographyH2>
        <Button variant={'destructive'} onClick={onClickLogOut}>
          Sign Out
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

import { startSpotifyLogin } from '@/auth/login';
import { Button } from '@/components/ui/button';
import { TypographyH1, TypographyP } from '@/components/ui/typography';

import LandingPage from '@/assets/images/mink-mingle-HRyjETL87Gg-unsplash.jpg';

const MainPage = () => {
  return (
    <main className='relative'>
      <img
        src={LandingPage}
        alt=''
        className='absolute w-screen h-screen z-10'
      />
      <div className='z-20 absolute h-screen w-screen bg-black/50 grid place-items-center'>
        <div className='space-y-4 w-1/2 text-center p-4 rounded-lg text-white'>
          <TypographyH1 className='text-6xl'>Wrapify</TypographyH1>
          <TypographyP>
            Discover your personalized music journey with Wrapify — see your top
            tracks, favorite artists, listening habits, and trends beautifully
            visualized.
          </TypographyP>
          <Button onClick={startSpotifyLogin}>Login with Spotify</Button>
        </div>
      </div>
    </main>
  );
};

export default MainPage;

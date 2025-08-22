import { TypographyH1 } from '@/components/ui/typography';
import { useGetMe, useGetUsersTopItems } from '@/hooks/useSpotifyApi';

const DashboardPage = () => {
  const { data: me, isLoading: loadingMe } = useGetMe();
  const { data: topArtists, isLoading: loadingArtists } = useGetUsersTopItems();

  // const token = localStorage.getItem('spotify_access_token');

  if (loadingMe || loadingArtists) return <p>Loading...</p>;

  console.log(me);

  return (
    <section className='p-4 bg-foreground/80 text-background'>
      <TypographyH1>{me.display_name}</TypographyH1>
      <img src={me.images[0].url} alt='' className='rounded-full w-64 h-64' />
    </section>
  );
};

export default DashboardPage;

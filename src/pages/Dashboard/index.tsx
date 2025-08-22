import { TypographyH1, TypographyH3 } from '@/components/ui/typography';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { useGetMe, useGetUsersTopItems } from '@/hooks/useSpotifyApi';

import './index.css';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { data: me, isLoading: loadingMe } = useGetMe();
  const { data: topArtists, isLoading: loadingTopArtists } =
    useGetUsersTopItems('artists', 6);

  const { data: topTracks, isLoading: loadingTopTracks } = useGetUsersTopItems(
    'tracks',
    6
  );

  if (loadingMe || loadingTopArtists || loadingTopTracks)
    return <p>Loading...</p>;

  console.log(topTracks);

  return (
    <section className='py-12 max-w-6xl flex flex-col space-y-12'>
      <div className='profile-grid'>
        <img
          src={me.images[0].url}
          alt=''
          className='rounded-full w-60 h-60 avatar'
        />
        <TypographyH1 className='displayName self-end'>
          {me.display_name}
        </TypographyH1>
        <div className='details'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            illum fugit alias deleniti ullam quis esse perspiciatis eum autem
            veniam. Sunt distinctio similique eos nesciunt provident ex odit
            dolor minus?
          </p>
        </div>
      </div>

      <hr />

      {topArtists && (
        <div className='space-y-4'>
          <TypographyH3>Top Artists of All Time</TypographyH3>
          <div className='flex justify-between items-center gap-8'>
            {topArtists.items.map((item) => (
              <div key={item.id} className='flex flex-col items-center'>
                <img
                  src={item.images[2].url}
                  alt=''
                  className={`w-[${item.images[2].width}] h-[${item.images[2].height}] rounded-full`}
                />
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr />

      {topTracks && (
        <div className='space-y-4'>
          <TypographyH3>Top Tracks of All Time</TypographyH3>
          <div className='flex flex-col'>
            <Table>
              <TableBody>
                {topTracks.items.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className='w-8'>{index + 1}</TableCell>
                    <TableCell className='w-16'>
                      <img
                        src={item.album.images[2].url}
                        alt=''
                        className={`w-10 h-10 rounded`}
                      />
                    </TableCell>
                    <TableCell>
                      <p className='font-medium'>{item.name}</p>
                      <p className='text-muted-foreground '>
                        {item.artists[0].name}
                      </p>
                    </TableCell>
                    <TableCell>{item.album.name}</TableCell>
                    <TableCell className='text-right'>
                      <Button variant={'ghost'}>
                        <Link to={item.external_urls.spotify} target='_blank'>
                          <ExternalLink />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardPage;

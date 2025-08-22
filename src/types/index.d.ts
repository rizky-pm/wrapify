type MeProps = {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  type: string;
  uri: string;
};

type UsersTopArtists = {
  items: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: null;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    popularity: number;
    type: 'artists';
    uri: string;
  }[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: null;
};

type UsersTopTracks = {
  items: Array<{
    album: {
      album_type: string;
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        height: number;
        url: string;
        width: number;
      }>;
      is_playable: boolean;
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: Array<{
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: any;
    track_number: number;
    type: string;
    uri: string;
  }>;
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: any;
};

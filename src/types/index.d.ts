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

type Item = {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: Type;
  uri: string;
};

type ExternalUrls = {
  spotify: string;
};

type Followers = {
  href: null;
  total: number;
};

type Image = {
  height: number;
  url: string;
  width: number;
};

enum Type {
  Artist = 'artist',
}

type UsersTopItemsProps = {
  items: Item[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: null;
};

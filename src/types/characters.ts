export interface CharactersResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface CharacterResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: 'Data provided by Marvel. © 2022 MARVEL';
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2022 MARVEL</a>';
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character;
  };
}
export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: string;
}
export interface Thumbnail {
  path: string;
  extension: string;
}

export interface URL {
  type: string;
  url: string;
}

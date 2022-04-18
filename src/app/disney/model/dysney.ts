// src/app/disney/model/dysney.ts

export interface DisneyData {
  data: Personnage[];
  count: number;
  totalPages: number;
  nextPage: string;
}

export interface Personnage {
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: any[];
  enemies: any[];
  id: number;
  name: string;
  imageUrl: string;
  url: string;
}

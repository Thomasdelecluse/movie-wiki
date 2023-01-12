import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";

export interface PopularMoviesType {
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[]
}
export interface RateMoviesType {
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[]
}

@Injectable({
  providedIn: 'root',
})
export class PopularMovie {
  private root = 'https://api.themoviedb.org/3';
  private apiKey = '0c0e7b2ac6b9afd4ee3aeb83a772ef7a';
  private language = 'fr-FR';

  constructor(private http: HttpClient) {}

  getPopularMovies(callable: (popularMovies: PopularMoviesType) => void) {
    const url = `${this.root}/movie/popular?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<PopularMoviesType>(url).subscribe(callable);
  }

  getTopRateMovies(callable: (popularMovies: RateMoviesType) => void) {
    const url = `${this.root}/trending/all/day?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<RateMoviesType>(url).subscribe(callable);
  }

  getSearchMovies(request: string,callable: (popularMovies: any) => void) {
    const url = `${this.root}/search/multi?api_key=${this.apiKey}&language=${this.language}&query=${request}`;
    return this.http.get(url).subscribe(callable);
  }

  getDetailsMovies(id: number,callable: (popularMovies: any) => void) {
    const url = `${this.root}/movie/${id}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get(url).subscribe(callable);
  }

  getDetailsTV(id: number,callable: (popularMovies: any) => void) {
    const url = `${this.root}/tv/${id}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get(url).subscribe(callable);
  }

}

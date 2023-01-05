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

@Injectable({
  providedIn: 'root'
})
export class popularMovie {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=0c0e7b2ac6b9afd4ee3aeb83a772ef7a&language=en-US';

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get<PopularMoviesType>(this.apiUrl);
  }
}

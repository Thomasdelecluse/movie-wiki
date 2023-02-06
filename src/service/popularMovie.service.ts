import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {PopularMoviesDTO} from "../app/dto/popularMovieDTO";
import {RateMoviesDTO} from "../app/dto/rateMovieDTO";



@Injectable({
  providedIn: 'root',
})
export class PopularMovie {


  constructor(private http: HttpClient) {}

  getPopularMovies(callable: (popularMovies: PopularMoviesDTO) => void) {
    const url = `http://localhost:8080/Movie/PopularMovies`;
    return this.http.get<PopularMoviesDTO>(url).subscribe(callable);
  }

  getTopRateMovies(dayOrWeek: string, callable: (popularMovies: RateMoviesDTO) => void) {
    const url = `http://localhost:8080/Movie/TopRateMovies/${dayOrWeek}`;
    return this.http.get<RateMoviesDTO>(url).subscribe(callable);
  }

  getSearchMovies(request: string,callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Search/${request}`;
    return this.http.get(url).subscribe(callable);
  }

  getDetailsMovies(id: number,callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Movie/Detailsmovie/${id}`;
    return this.http.get(url).subscribe(callable);
  }

  getDetailsTV(id: number,callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Tv/Details/${id}`;
    return this.http.get(url).subscribe(callable);
  }

  getDetailsActorMovie(id: number, callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Movie/DetailsActors/${id}`;
    return this.http.get(url).subscribe(callable);
  }

  getDetailsActorTv(id: number, callable: (popularMovies: any) => void) {
  const url = `http://localhost:8080/Tv/DetailsActors/${id}`;
  return this.http.get(url).subscribe(callable);
  }
  getDetailsTrailerMovie(id: number, callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Movie/DetailsTrailer/${id}`;
    return this.http.get(url).subscribe(callable);
  }
  getDetailsActor(id: number, callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Actor/Details/${id}`;
    return this.http.get(url).subscribe(callable);
  }
  getActorMovie(id: number, callable: (popularMovies: any) => void) {
    const url = `http://localhost:8080/Actor/Movie/${id}`;
    return this.http.get(url).subscribe(callable);
  }
}

import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class TmdbService {
  private apiKey = '0c0e7b2ac6b9afd4ee3aeb83a772ef7a';
  private baseUrl = 'https://api.themoviedb.org/3/movie/upcoming';

  constructor(private http: HttpClient) {}

  async getAllUpcomingMovies() {
    let allMovies: any[] = [];
    let currentPage = 1;


    while (currentPage) {
      const response: any = await this.http.get(`${this.baseUrl}?api_key=${this.apiKey}&page=${currentPage}`).toPromise();
      allMovies = allMovies.concat(response.results);
      currentPage = response.page < response.total_pages ? response.page + 1 : null;
    }

    return allMovies;
  }
}

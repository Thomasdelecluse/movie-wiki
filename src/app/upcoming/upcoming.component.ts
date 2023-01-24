import { Component, OnInit } from '@angular/core';
import {TmdbService} from "../../service/TmdbService";
import {BASE_URL} from "../constant/components.constant";
import {PopularMovie} from "../../service/popularMovie.service";
import {Router} from "@angular/router";
export interface Result {
  popularity: number;
  release_date: string;
  poster_path: string;
  title: string;
}

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcomingMovie: Result[] | undefined;
  bestUpcomingMovie: Result[] | undefined;
  base_url = BASE_URL;

  constructor(private TmdbService: TmdbService, private popularMovie: PopularMovie, private router: Router) { }

  ngOnInit(): void {
    this.TmdbService.getAllUpcomingMovies().then(r => {
      this.upcomingMovie = r;

      console.log('cjnhfu', r.filter(movie => movie.original_title.includes('Ant-Man')));

      this.bestUpcomingMovie = r.filter(movie => new Date(movie.release_date).getTime() > new Date().getTime() && movie.popularity > 20);
      this.bestUpcomingMovie = this.bestUpcomingMovie.slice(0, 8);
      console.log("bm",this.bestUpcomingMovie);
    });
  }
  getTypeAndId(movie: any) {
    this.router.navigate(['/details', movie.id,"movie"])
      .then(() => {
        console.log('Navigation successful!');
      })
      .catch(error => {
        console.log('Navigation failed: ' + error);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {TmdbService} from "../../service/TmdbService";
export interface Result {
  popularity: number;
  release_date: string;
}

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcomingMovie: Result[] | undefined;
  bestUpcomingMovie: any[] | undefined;

  constructor(private TmdbService: TmdbService) { }

  ngOnInit(): void {
    this.TmdbService.getAllUpcomingMovies().then(r => {
      this.upcomingMovie = r;

      console.log('cjnhfu', r.filter(movie => movie.original_title.includes('Ant-Man')));

      this.bestUpcomingMovie = r.filter(movie => new Date(movie.release_date).getTime() > new Date().getTime() && movie.popularity > 20);
      console.log("bm",this.bestUpcomingMovie);
    });
  }

}

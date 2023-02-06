import {Component, OnInit} from '@angular/core';
import {PopularMovie} from 'src/service/popularMovie.service';
import {BASE_URL} from "../constant/components.constant";
import {Router} from "@angular/router";
import {RateMoviesDTO} from "../dto/rateMovieDTO";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  movie: RateMoviesDTO = {
    results: []
  };
  baseUrl = BASE_URL;
  dayOrWeek: string = "day";
  titleDayOrWeek: string = "du jour";

  constructor(private popularMovie: PopularMovie, private router: Router) {
  }


  ngOnInit(): void {
    this.popularMovie.getTopRateMovies(this.dayOrWeek, popularMovies => {
      this.movie = popularMovies;

    })
  }

  getDayOrWeek(dayOrWeek: string) {
    this.dayOrWeek = dayOrWeek;
    this.popularMovie.getTopRateMovies(this.dayOrWeek, popularMovies => {
      this.movie = popularMovies;
      if (dayOrWeek == "week") {
        this.titleDayOrWeek = "de la semaine";
      } else if (dayOrWeek == "day") {
        this.titleDayOrWeek = "du jour";
      }
    })
  }

  getTypeAndId(movie: any) {
    this.router.navigate(['/details', movie.id, movie.media_type])
      .then(() => {
        console.log('Navigation successful!');
      })
      .catch(error => {
        console.log('Navigation failed: ' + error);
      });
  }

}

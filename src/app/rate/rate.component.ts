import {Component, OnInit} from '@angular/core';
import {PopularMovie, RateMoviesType} from 'src/service/popularMovie.service';
import {BASE_URL} from "../constant/components.constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  movie: RateMoviesType = {
    results: []
  };
  baseUrl = BASE_URL;

  constructor(private popularMovie: PopularMovie, private router: Router) { }


  ngOnInit(): void {
    this.popularMovie.getTopRateMovies(popularMovies => {
      this.movie = popularMovies;
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

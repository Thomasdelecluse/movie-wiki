import { Component, OnInit } from '@angular/core';
import {popularMovie, PopularMoviesType} from 'src/service/popularMovie.service';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  movie: PopularMoviesType = {
    results: []
  };
  baseUrl = 'https://image.tmdb.org/t/p/';

  constructor(private popularMovie: popularMovie) { }


  ngOnInit(): void {
    this.popularMovie.getPopularMovies(popularMovies => {
      this.movie = popularMovies;
    })
  }

}

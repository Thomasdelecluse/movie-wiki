import {Component, OnInit} from '@angular/core';
import {PopularMovie, RateMoviesType} from 'src/service/popularMovie.service';
import {BASE_URL} from "../constant/components.constant";

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

  constructor(private popularMovie: PopularMovie) { }


  ngOnInit(): void {
    this.popularMovie.getTopRateMovies(popularMovies => {
      this.movie = popularMovies;
    })
  }

}

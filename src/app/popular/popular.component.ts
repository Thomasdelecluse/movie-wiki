import {Component, OnInit} from '@angular/core';
import {PopularMovie, PopularMoviesType} from 'src/service/popularMovie.service';
import {BASE_URL} from "../constant/components.constant";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  movies: PopularMoviesType = {
    results: []
  };
  baseUrl = BASE_URL;

  constructor(private popularMovie: PopularMovie) {
  }

  ngOnInit(): void {
    this.popularMovie.getPopularMovies(popularMovies => {
      this.movies = {
        results: popularMovies.results.slice(0, 6)
      };
    })
  }

}

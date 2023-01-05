import {Component, OnInit} from '@angular/core';
import {popularMovie, PopularMoviesType} from 'src/service/popularMovie.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  movies: PopularMoviesType = {
    results: []
  };
  baseUrl = 'https://image.tmdb.org/t/p/';

  constructor(private popularMovie: popularMovie) {
  }

  ngOnInit(): void {
    this.popularMovie.getPopularMovies(popularMovies => {
      this.movies = {
        results: popularMovies.results.slice(0, 6)
      };
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {popularMovie, PopularMoviesType} from 'src/service/popularMovie.service';
@Component({
  selector: 'app-popular',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  movie: PopularMoviesType = {
    results: []
  };
  baseUrl = 'https://image.tmdb.org/t/p/';

  constructor(private popularMovie: popularMovie) { }


  ngOnInit(): void {
    this.popularMovie.getPopularMovies()
      .subscribe(data => {
        this.movie = data;
      });
  }

}

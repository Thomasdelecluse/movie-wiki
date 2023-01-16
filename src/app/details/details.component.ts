import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PopularMovie} from "../../service/popularMovie.service";
import {BASE_URL} from "../constant/components.constant";
export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface RootObject {
  name: any;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  baseUrl = BASE_URL;
  type = this.route.snapshot.paramMap.get('type');
  movieDetails: RootObject | undefined;
  tvDetails: RootObject | undefined;
  yearMovieDetails: string | undefined;
  genreMovieDetails: string | undefined;
  rateMovieDetails: number[] | undefined;
  negativeRateMovieDetails: number[] | undefined;
  yearTvDetails: string | undefined;
  genreTvDetails: string | undefined;
  rateTVDetails: number[] | undefined;
  budget: string | undefined;
  revenu: string | undefined;

  actors: any[] = [
    'John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe','John',
    'Doe',
  ]

  constructor(private route: ActivatedRoute, private popularMovie: PopularMovie) {
    console.log('cc');
  }

  ngOnInit(): void {
    console.log('cc');
    this.route.params.subscribe(params => {
      if( params['type'] === 'movie') {
        this.popularMovie.getDetailsMovies( params['id'], (response) => {
          this.movieDetails = response;
          this.yearMovieDetails = this.movieDetails?.release_date.substring(0, 4);
          this.genreMovieDetails = this.movieDetails?.genres.map((genre) => "• " + genre.name).join("  ");
          this.rateMovieDetails = new Array(Math.ceil(Math.floor(this.movieDetails?.vote_average ?? 0)/2)).fill(0);
          this.negativeRateMovieDetails = new Array(5 - this.rateMovieDetails.length).fill(0);
          this.budget = new Intl.NumberFormat('fr', { style: 'currency',notation: 'compact', currency: 'EUR' }).format(this.movieDetails?.budget ?? 0);
          this.revenu = new Intl.NumberFormat('fr', { style: 'currency',notation: 'compact', currency: 'EUR' }).format(this.movieDetails?.revenue ?? 0);
          console.log(this.movieDetails);
        })
      } else {
        this.popularMovie.getDetailsTV( params['id'], (response) => {
          this.tvDetails = response;
          this.yearTvDetails = this.tvDetails?.first_air_date.substring(0, 4);
          this.genreTvDetails = this.tvDetails?.genres.map((genre) => "• " + genre.name).join("  ");
          this.rateTVDetails = new Array(Math.ceil(Math.floor(this.tvDetails?.vote_average ?? 0)/2)).fill(0);
          this.negativeRateMovieDetails = new Array(5 - this.rateTVDetails.length).fill(0);
          console.log(this.tvDetails);
        })
      }
      });
  }
}

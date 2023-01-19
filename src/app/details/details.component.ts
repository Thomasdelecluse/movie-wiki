import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PopularMovie} from "../../service/popularMovie.service";
import {BASE_URL, BASE_URL_EMBED} from "../constant/components.constant";
import {ModalTrailerService} from "../../service/modal-trailer.service";


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
export interface LastEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface RootObject {
  name: any;
  adult: boolean;
  backdrop_path: string;
  last_episode_to_air: LastEpisode;
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
export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
export interface Video {
  id: number;
  results: VideoItem[];
}

export interface VideoItem {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface Actors {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  baseUrl = BASE_URL;
  type = this.route.snapshot.paramMap.get('type');
  // variable movie
  movieDetails: RootObject | undefined;
  yearMovieDetails: string | undefined;
  genreMovieDetails: string | undefined;
  rateMovieDetails: number[] | undefined;
  negativeRateMovieDetails: number[] | undefined;
  yearTvDetails: string | undefined;
  budget: string | undefined;
  revenu: string | undefined;
  movieTime: string | undefined;
  actors: Actors | undefined;

  // variable tv
  tvDetails: RootObject | undefined;
  seasonNumber: number | undefined;
  episodeNumber: number | undefined;
  episode_text: string| undefined;
  season_text: string | undefined;
  genreTvDetails: string | undefined;
  rateTVDetails: number[] | undefined;
  movieTrailer: Video | undefined;
  trailer: string | undefined;
  show: boolean = false;





  constructor(private route: ActivatedRoute, private popularMovie: PopularMovie, private modalTrailerService: ModalTrailerService) {
    console.log('cc');
  }

  ngOnInit(): void {
    this.modalTrailerService.getShow().subscribe((data) => {
      this.show = data;
    })

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
          if (this.movieDetails?.runtime !== undefined) {
            let hours = Math.floor(this.movieDetails.runtime / 60);
            let minutes = this.movieDetails.runtime % 60;
            this.movieTime = hours + "h" + minutes;
          }
          console.log(this.movieDetails);
        })
        this.popularMovie.getDetailsActorMovie( params['id'], (response) => {
          this.actors = response;
          console.log(this.actors);
        });
        this.popularMovie.getDetailsTrailerMovie( params['id'], (response) => {
          this.movieTrailer = response;
          this.trailer = this.movieTrailer?.results[1].key;
          console.log(this.actors);
        });
      } else {
        this.popularMovie.getDetailsTV( params['id'], (response) => {
          this.tvDetails = response;
          this.yearTvDetails = this.tvDetails?.first_air_date.substring(0, 4);
          this.genreTvDetails = this.tvDetails?.genres.map((genre) => "• " + genre.name).join("  ");
          this.rateTVDetails = new Array(Math.ceil(Math.floor(this.tvDetails?.vote_average ?? 0)/2)).fill(0);
          this.negativeRateMovieDetails = new Array(5 - this.rateTVDetails.length).fill(0);
          this.seasonNumber = this.tvDetails?.last_episode_to_air.season_number;
          this.episodeNumber = this.tvDetails?.last_episode_to_air.episode_number;
          this.popularMovie.getDetailsActorTv( params['id'], (response) => {
            this.actors = response;
            console.log(this.actors);
          });
          if (this.episodeNumber && this.episodeNumber > 1) {
            this.episode_text = "episodes";
          }
          else
          {
            this.episode_text = "episode";
          }
          if (this.seasonNumber && this.seasonNumber > 1) {
            this.season_text = "saisons";
          }
          else
          {
            this.season_text = "saison";
          }
          console.log(this.tvDetails);
        })
      }
      });
  }
  openDialog(): void {
    this.modalTrailerService.openModal();
  }
}

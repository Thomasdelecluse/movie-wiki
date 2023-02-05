import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopularMovie} from "../../service/popularMovie.service";
import {BASE_URL} from "../constant/components.constant";
import {ModalTrailerService} from "../../service/modal-trailer.service";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {movieDTO} from "../dto/movieDTO";
import {actorDTO} from "../dto/actorDTO";
import {videoDTO} from "../dto/videoDTO";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  baseUrl = BASE_URL;
  type = this.route.snapshot.paramMap.get('type');
  // variable movie
  movieDetails: movieDTO | undefined;
  yearMovieDetails: string | undefined;
  genreMovieDetails: string | undefined;
  rateMovieDetails: number[] | undefined;
  negativeRateMovieDetails: number[] | undefined;
  yearTvDetails: string | undefined;
  budget: string | undefined;
  revenu: string | undefined;
  movieTime: string | undefined;
  actors: actorDTO | undefined;

  // variable tv
  tvDetails: movieDTO | undefined;
  seasonNumber: number | undefined;
  episodeNumber: number | undefined;
  episode_text: string| undefined;
  season_text: string | undefined;
  genreTvDetails: string | undefined;
  rateTVDetails: number[] | undefined;
  movieTrailer: videoDTO | undefined;
  trailer: string | undefined;
  show: boolean = false;
  playButtonTrailer = faPlay;

  screenWidth: number | undefined;


  constructor(@Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, private popularMovie: PopularMovie, private modalTrailerService: ModalTrailerService) {
    console.log('cc');
  }

  ngOnInit(): void {
    const width = this.document.defaultView?.innerWidth;
    this.screenWidth = typeof width === 'number' ? width : 0;
    this.document.defaultView?.addEventListener('resize', () => {
      const width = this.document.defaultView?.innerWidth;
      this.screenWidth = typeof width === 'number' ? width : 0;
    });
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
          this.trailer = this.movieTrailer?.results[0].key;
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

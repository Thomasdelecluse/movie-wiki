import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopularMovie} from "../../service/popularMovie.service";
import {BASE_URL} from "../constant/components.constant";
import {AgeFromDateString} from "age-calculator";
import {TmdbService} from "../../service/TmdbService";

export interface Actor {
  birthday: string;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  known_for_department: string;
  deathday: string;
  id: number;
  name: string;
  also_known_as: string[];
}
export interface Cast {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  id: number;
}

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {
  actorDetails: Actor | undefined;
  ageFromString: number | undefined;
  BaseUrl = BASE_URL;
  actorMovie: Cast[] | undefined;
  constructor(private route: ActivatedRoute, private popularMovie: PopularMovie ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.popularMovie.getDetailsActor(params['id'], (response) => {
        this.actorDetails = response;
        this.ageFromString = new AgeFromDateString(this.actorDetails?.birthday ?? '').age;
        console.log(this.actorDetails);
      })
      this.popularMovie.getMovieActor(params['id'], (response) => {
        this.actorMovie = response.cast;
        console.log('am', this.actorMovie);
      })
    })
  }

}

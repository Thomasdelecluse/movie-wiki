import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopularMovie} from "../../../service/popularMovie.service";
import {BASE_URL} from "../../constant/components.constant";
import {AgeFromDateString} from "age-calculator";

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
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {
  actorDetails: Actor | undefined;
  ageFromString: number | undefined;
  BaseUrl = BASE_URL;
  constructor(private route: ActivatedRoute, private popularMovie: PopularMovie,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.popularMovie.getDetailsActor(params['id'], (response) => {
        this.actorDetails = response;
        this.ageFromString = new AgeFromDateString(this.actorDetails?.birthday ?? '').age;
        console.log(this.actorDetails);
      })
    })
  }

}

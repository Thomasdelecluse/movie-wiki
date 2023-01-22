import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopularMovie} from "../../../service/popularMovie.service";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private popularMovie: PopularMovie,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.popularMovie.getDetailsActor(params['id'], (response) => {
        console.log(response);
      })
    })
  }

}

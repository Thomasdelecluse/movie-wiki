import {AfterViewInit, Component, Input} from "@angular/core";
import {BASE_URL} from "../../constant/components.constant";
import {Router} from "@angular/router";
import {Cast} from "../actor.component";

@Component({
  selector: 'app-actor-slider-item',
  templateUrl: './itemActor.component.html',
  styleUrls: ['./itemActor.component.css']
})
export class ItemActorComponent implements AfterViewInit{
  baseUrl = BASE_URL;
  @Input() item: Cast | undefined;

  constructor(private router: Router) {
  }

  getMovieId(Item: any) {
    console.log('mt', Item.media_type);
    this.router.navigate(['/details', Item.id , "movie"])
      .then(() => {
        console.log('Navigation successful!');
      })
      .catch(error => {
        console.log('Navigation failed: ' + error);
      });
  }

  ngAfterViewInit(): void {
    console.log('il', this.item);
  }

}

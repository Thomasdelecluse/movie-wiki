import {Component, Input} from "@angular/core";
import {Cast} from "../actor.component";


@Component({
  selector: 'app-actor-slider',
  templateUrl: './sliderActor.component.html',
  styleUrls: ['./sliderActor.component.css']
})
export class SliderActorComponent {

  @Input() items: Cast[] | undefined;

}

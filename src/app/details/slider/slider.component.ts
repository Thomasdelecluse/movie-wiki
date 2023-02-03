import {Component, Input} from "@angular/core";
import {Cast} from "../../dto/actorDTO";


@Component({
  selector: 'app-detail-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() items: Cast[] | undefined;

}

import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-detail-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() items: any[] = [];

}

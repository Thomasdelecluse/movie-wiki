import {Component, Input} from "@angular/core";
import {Cast} from "../details.component";

@Component({
  selector: 'app-detail-slider-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {

  @Input() item: Cast | undefined;

}

import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-detail-slider-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {

  @Input() item: any;

}

import {Component, Input} from "@angular/core";
import {Cast} from "../details.type";
import {BASE_URL} from "../../constant/components.constant";

@Component({
  selector: 'app-detail-slider-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  baseUrl = BASE_URL;
  @Input() item: Cast | undefined;


  formatName(name: string | undefined): string {
    if (typeof name === 'undefined') return '';
    return name.replace('(archive footage) (uncredited)', '');
  }

}

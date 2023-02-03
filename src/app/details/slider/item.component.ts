import {Component, Input} from "@angular/core";

import {BASE_URL} from "../../constant/components.constant";
import {Router} from "@angular/router";
import {Cast} from "../../dto/actorDTO";

@Component({
  selector: 'app-detail-slider-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  baseUrl = BASE_URL;
  @Input() item: Cast | undefined;

  constructor(private router: Router) {
  }

  formatName(name: string | undefined): string {
    if (typeof name === 'undefined') return '';
    return name.replace('(archive footage) (uncredited)', '');
  }
  getActorId(Item: any) {
    this.router.navigate(['/detailsActor', Item.id])
      .then(() => {
        console.log('Navigation successful!');
      })
      .catch(error => {
        console.log('Navigation failed: ' + error);
      });
  }

}

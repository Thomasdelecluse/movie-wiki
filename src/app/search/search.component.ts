import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {DataSharingService} from "../../service/data-sharing.service";
import {Router} from "@angular/router";
import {BASE_URL} from "../constant/components.constant";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  results: any = {};
  public test: string | undefined;
  constructor(private searchService: SearchService, private dataSharingService: DataSharingService, private router: Router) {
  }

  baseUrl = BASE_URL;
  ngAfterViewInit(): void {
    this.dataSharingService.getTest().subscribe((value) => {
      this.test = value;
    });
    this.searchService.getResults().subscribe((response) => {
      this.results = response;

    })
  }
  getTypeAndId(movie: any) {
    this.router.navigate(['/details', movie.id, movie.media_type])
      .then(() => {
        console.log('Navigation successful!');
      })
      .catch(error => {
        console.log('Navigation failed: ' + error);
      });
  }

}

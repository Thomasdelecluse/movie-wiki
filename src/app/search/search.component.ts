import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  results: any = {};

  constructor(private searchService: SearchService) {
  }
  baseUrl = 'https://image.tmdb.org/t/p/';
  ngAfterViewInit(): void {
    this.searchService.getResults().subscribe((response) => {
      this.results = response;
    })
  }

}

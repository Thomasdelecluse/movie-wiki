import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PopularMovie} from "../../service/popularMovie.service";
import {SearchService} from "../../service/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private popularMovie: PopularMovie, private searchService: SearchService, private router: Router) {
  }

  test = new FormControl<string>('');

  ngOnInit(): void {

  }

  onFormSubmitAuth() {
    const test = this.test.value;
    this.popularMovie.getSearchMovies(test ?? "", (response) => {
      this.searchService.setResults(response);
      this.router.navigate(['/search']);
    })
  }
}

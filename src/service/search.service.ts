import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private results = new BehaviorSubject({});
  private resultsObservable = this.results.asObservable();

  constructor() {
  }

  public setResults(results: any) {
    this.results.next(results);
  }

  public getResults() {
    return this.resultsObservable;
  }
}

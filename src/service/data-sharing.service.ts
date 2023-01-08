import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private test = new BehaviorSubject('');
  private testObservable = this.test.asObservable();

  setTest(value: string) {
    this.test.next(value);
  }
  getTest() {
    return this.testObservable;
  }
}

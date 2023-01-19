import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalTrailerService {

  private show = new BehaviorSubject(false);
  private showObservable = this.show.asObservable();

  constructor() { }

  public openModal() {
    this.show.next(true);
  }

  public closeModal() {
    this.show.next(false);
  }

  public getShow() {
    return this.showObservable;
  }

}

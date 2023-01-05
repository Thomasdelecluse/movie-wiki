import { Injectable } from '@angular/core';
import {Api} from "../dao/api/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: Api) { }

  login(value: {email: string, mdp: string}, callback: (response: any) => void) {
    this.api.login(value).subscribe(callback)
  }

  register(value: {email: string, mdp: string, name: string}, callback: (response: any) => void) {
    this.api.register(value).subscribe(callback)
  }
}

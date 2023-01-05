import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private httpClient: HttpClient) {}

  login(body: {email: string, mdp: string}) : Observable<string>{
    return this.httpClient.post<any>('http://localhost:8080/login', body)
  }

  register(body: {email: string, mdp: string, name: string}) : Observable<string>{
    return this.httpClient.post<any>('http://localhost:8080/register', body)
  }

}

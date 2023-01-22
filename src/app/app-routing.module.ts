import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {DetailsComponent} from "./details/details.component";
import {ActorComponent} from "./actorDetails/actor/actor.component";

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'search', component: SearchComponent, },
  { path: 'details/:id/:type', component: DetailsComponent, },
  { path: 'detailsActor/:id', component: ActorComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }

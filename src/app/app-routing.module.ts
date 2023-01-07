import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'search', component: SearchComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ButtonComponent} from './navbar/button/button.component';
import {FooterComponent} from './footer/footer.component';
import {RateComponent} from './rate/rate.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PopularComponent} from "./popular/popular.component";
import {SearchComponent} from './search/search.component';
import {DetailsComponent} from './details/details.component';
import {ItemComponent} from "./details/slider/item.component";
import {SliderComponent} from "./details/slider/slider.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
    PopularComponent,
    RateComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    SliderComponent,
    ItemComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

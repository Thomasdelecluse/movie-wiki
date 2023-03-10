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
import {SafePipe} from "./safe-pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ModalComponent } from './details/dialog/modal/modal.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ActorComponent } from './actorDetails/actor.component';
import {SliderActorComponent} from "./actorDetails/slider/sliderActor.component";
import {ItemActorComponent} from "./actorDetails/slider/itemActor.component";
import { UpcomingComponent } from './upcoming/upcoming.component';


@NgModule({
  declarations: [
    SafePipe,
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
    ModalComponent,
    ActorComponent,
    SliderActorComponent,
    ItemActorComponent,
    UpcomingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

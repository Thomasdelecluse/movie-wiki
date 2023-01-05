import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ButtonComponent} from './navbar/button/button.component';
import {FooterComponent} from './footer/footer.component';
import {PresentationComponent} from './presentation/presentation.component';
import {CompetenceComponent} from './competence/competence.component';
import {ContactComponent} from './popular/contact.component';
import {GridComponent} from './competence/grid/grid.component';
import {CercleComponent} from './competence/grid/cercle/cercle.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
    PresentationComponent,
    CompetenceComponent,
    ContactComponent,
    GridComponent,
    CercleComponent,
    LoginComponent,
    HomeComponent,
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

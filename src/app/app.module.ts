import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from '../person/person.module';
import { ParticlesModule } from 'angular-particle';
import DateUtilsComponent from './utils/DateUtilsComponent';


@NgModule({
  declarations: [
    AppComponent,
    DateUtilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

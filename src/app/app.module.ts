import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { Slide4Component } from './slide4/slide4.component';
import { Slide5Component } from './slide5/slide5.component';
import { Slide6Component } from './slide6/slide6.component';
import { Slide7Component } from './slide7/slide7.component';
import { Slide8Component } from './slide8/slide8.component';
import { Slide9Component } from './slide9/slide9.component';
import { Slide10Component } from './slide10/slide10.component';
import { Slide11Component } from './slide11/slide11.component';
import { Slide12Component } from './slide12/slide12.component';
import { Slide13Component } from './slide13/slide13.component';
import { Slide14Component } from './slide14/slide14.component';
import { Slide15Component } from './slide15/slide15.component';
import { Slide16Component } from './slide16/slide16.component';
import { Slide17Component } from './slide17/slide17.component';
import { Slide18Component } from './slide18/slide18.component';
import { Slide19Component } from './slide19/slide19.component';
import { Slide20Component } from './slide20/slide20.component';
import { Slide21Component } from './slide21/slide21.component';
import { Slide22Component } from './slide22/slide22.component';
import { Slide23Component } from './slide23/slide23.component';
import { Slide24Component } from './slide24/slide24.component';
import { Slide25Component } from './slide25/slide25.component';

const appRoutes: Routes = [
  { path: 'slide1', component: Slide1Component },
  { path: 'slide2', component: Slide2Component },
  { path: 'slide3', component: Slide3Component },
  { path: 'slide4', component: Slide4Component },
  { path: 'slide5', component: Slide5Component },
  { path: 'slide6', component: Slide6Component },
  { path: 'slide7', component: Slide7Component },
  { path: 'slide8', component: Slide8Component },
  { path: 'slide9', component: Slide9Component },
  { path: 'slide10', component: Slide10Component },
  { path: 'slide11', component: Slide11Component },
  { path: 'slide12', component: Slide12Component },
  { path: 'slide13', component: Slide13Component },
  { path: 'slide14', component: Slide14Component },
  { path: 'slide15', component: Slide15Component },
  { path: 'slide16', component: Slide16Component },
  { path: 'slide17', component: Slide17Component },
  { path: 'slide18', component: Slide18Component },
  { path: 'slide19', component: Slide19Component },
  { path: 'slide20', component: Slide20Component },
  { path: 'slide21', component: Slide21Component },
  { path: 'slide22', component: Slide22Component },
  { path: 'slide23', component: Slide23Component },
  { path: 'slide24', component: Slide24Component },
  { path: 'slide25', component: Slide25Component },
  { path: '', redirectTo: 'slide1', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    Slide4Component,
    Slide5Component,
    Slide6Component,
    Slide7Component,
    Slide8Component,
    Slide9Component,
    Slide10Component,
    Slide11Component,
    Slide12Component,
    Slide13Component,
    Slide14Component,
    Slide15Component,
    Slide16Component,
    Slide17Component,
    Slide18Component,
    Slide19Component,
    Slide20Component,
    Slide21Component,
    Slide22Component,
    Slide23Component,
    Slide24Component,
    Slide25Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

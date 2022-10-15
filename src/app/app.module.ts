import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomRollComponent } from './random-roll/random-roll.component';
import { RandomRollNoComponent } from './random-roll-no/random-roll-no.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomRollComponent,
    RandomRollNoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

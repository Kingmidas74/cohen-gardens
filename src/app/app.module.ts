import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewspaperModule } from 'src/modules/newspaper/newspaper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NewspaperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

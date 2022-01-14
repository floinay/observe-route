import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteObserverModule } from 'projects/observer/src/lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteObserverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

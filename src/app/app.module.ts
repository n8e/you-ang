import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

import { YoutubeService } from './youtube.service';
import { ErrorService } from './error.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [YoutubeService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

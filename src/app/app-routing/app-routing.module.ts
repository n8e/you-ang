import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { YoutubeComponent } from '../youtube/youtube.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes  = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: AppComponent },
  {path: 'youtube', component: YoutubeComponent },
  {path: '', component: DashboardComponent},
  {path: '*', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

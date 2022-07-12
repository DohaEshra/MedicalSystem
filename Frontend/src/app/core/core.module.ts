import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavBarComponent,
    NotFoundComponent,
    HomeComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    LoadingComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    StarComponent
  ]
})
export class CoreModule { }

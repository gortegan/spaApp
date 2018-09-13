import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PUBLIC_ROUTES } from './public.routes';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    PUBLIC_ROUTES
  ],
  declarations: [
    HomeComponent,
    PublicComponent
  ], providers: [
  ]
})
export class PublicModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PublicModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCqrsModule } from 'ngx-cqrs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentLoadedHandler } from './events/app-component-loaded.handler';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCqrsModule.forRoot({
      eventHandlers: [AppComponentLoadedHandler],
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCqrsModule } from 'ngx-cqrs';

import { FirstRoutingModule } from './first-routing.module';
import { FirstPageComponent } from './pages';
import { FirstPageLoadedHandler } from './events';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
    NgxCqrsModule.forFeature({
      eventHandlers: [FirstPageLoadedHandler],
    }),
  ],
  declarations: [FirstPageComponent],
})
export class FirstModule {}

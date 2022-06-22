import { Injectable } from '@angular/core';
import { EventsHandler, IEventHandler } from 'ngx-cqrs';
import { v4 } from '@lukeed/uuid';

import { AppComponentLoaded } from './app-component-loaded.event';

@Injectable()
@EventsHandler(AppComponentLoaded)
export class AppComponentLoadedHandler
  implements IEventHandler<AppComponentLoaded>
{
  handle(event: AppComponentLoaded) {
    console.log('AppComponentLoadedHandler', v4());
  }
}

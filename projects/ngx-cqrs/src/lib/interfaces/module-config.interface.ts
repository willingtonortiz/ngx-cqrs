import { InjectionToken } from '@angular/core';

import { IEventHandler } from './event-handler.interface';
import { IEvent } from './event.interface';
import { Type } from './type.interface';

export const MODULE_CONFIG = new InjectionToken<NgxCqrsModuleConfig>(
  'MODULE_CONFIG'
);

export interface NgxCqrsModuleConfig<EventBase extends IEvent = IEvent> {
  eventHandlers?: Type<IEventHandler<EventBase>>[];
}

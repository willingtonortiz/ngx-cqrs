import { Inject, Injectable } from '@angular/core';

import { CqrsOptions } from '../interfaces';
import {
  MODULE_CONFIG,
  NgxCqrsModuleConfig,
} from '../interfaces/module-config.interface';

@Injectable()
export class ExplorerService {
  constructor(
    @Inject(MODULE_CONFIG)
    private readonly config: NgxCqrsModuleConfig
  ) {}

  explore(): CqrsOptions {
    const events = this.config.eventHandlers ?? [];
    return { events };
  }
}

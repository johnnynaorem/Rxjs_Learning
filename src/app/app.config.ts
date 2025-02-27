import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideLoadingBar } from '@ngx-loading-bar/core';
import { provideLoadingBarRouter } from '@ngx-loading-bar/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideLoadingBar({ latencyThreshold: 0 }), // Core loading bar service
    provideLoadingBarRouter(),
  ],
};

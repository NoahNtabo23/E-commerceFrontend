import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch()),{provide:LocationStrategy,useClass:HashLocationStrategy}]
};



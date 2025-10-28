import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mockApiInterceptor } from './interceptors/mock-api.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([mockApiInterceptor])),
    provideRouter(routes),
    provideZonelessChangeDetection(), // zoneless setup

  ]
};

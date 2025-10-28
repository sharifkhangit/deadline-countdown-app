import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

// A simple mock interceptor that handles GET /api/deadline
export const mockApiInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  // Only intercept GET requests to /api/deadline
  if (req.method === 'GET' && req.url.endsWith('/api/deadline')) {
    const secondsLeft = 10; // constant mock value (3 minutes)
    const body = { secondsLeft };
    const response = new HttpResponse({ status: 200, body });
    // Return an observable HttpResponse with small delay to simulate network
    return of(response).pipe(delay(200));
  }
  // Pass through other requests
  return next(req);
};

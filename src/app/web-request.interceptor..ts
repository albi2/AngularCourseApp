import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebRequestInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    request = this.addAuthHeader(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if(error.status === 401) {
          // We are not authorized
          // Create a new access token and if that
          // does not happen logout
          console.log("Test");
          this.authService.logout();
        }
        return throwError(error);
      }) 
    );
  }

  addAuthHeader(request: HttpRequest<any>) {
    // get access token
    const token = this.authService.getAccessToken()
    if(token) {
    // add it to the request hadder
        return request.clone({
          setHeaders: {
            'x-access-token': token
          }
        });
    }

    return request;
  }
}

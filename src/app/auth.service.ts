import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { User } from './user/interfaces/user';
import {shareReplay, tap} from 'rxjs/operators';
import { HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private webReqService: WebRequestService<any>,
    private router: Router) { }

  login(email: string, password: string) {
    // shareReplay prevents the same request
    // from being loaded multiple times when we have many
    // subscribers
    return this.webReqService.login(email, password).pipe(
      shareReplay(), tap(
        (res: HttpResponse<any>) => {
          this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
          console.log("LOGGED IN!");
        }
      )
    )
  }
  
  logout() {
    this.removeSession();
    this.router.navigate(["/home"]);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  setAccessToken(token: string) {
    localStorage.setItem('x-access-token', token);
  }

  setRefreshToken(token: string) {
    localStorage.setItem('x-refresh-token', token);
  }

  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }


}

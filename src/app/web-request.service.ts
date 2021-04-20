import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// We wrap all the requests in this to make it easier
// and more reusable to request stuff from api
@Injectable({
  providedIn: 'root'
})
export class WebRequestService<T> {
  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = "http://localhost:3000";
  }

  get(uri: string) {
    return this.http.get<T[]>(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: T) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: T): Observable<T> {
    return this.http.patch<T>(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string): Observable<T> {
    return this.http.delete<T>(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post<T>(`${this.ROOT_URL}/users/login`, {
      email, password
    }, {
      observe: 'response'
    });
  }
}

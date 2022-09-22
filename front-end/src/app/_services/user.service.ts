import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signup(
    username: string,
    email: string,
    password: string,
  ): Observable<any> {
    return this.http.post(
      'http://localhost:3000/user/signup',
      { username, email, password},
      httpOptions
    );
  }
}

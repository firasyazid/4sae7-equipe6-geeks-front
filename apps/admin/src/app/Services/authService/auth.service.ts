import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/localhost:8081/api/';

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>("http://localhost:8081/api/signin", body);
  }

  getData() {
    return this.http.get(this.apiUrl);
  }
}

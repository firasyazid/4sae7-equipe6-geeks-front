import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(username: string, password: string): Observable<any> {
    const body = {username, password};
    return this.http.post<any>("http://localhost:8081/api/signin", body);
  }

  signUp(body): Observable<any> {
    return this.http.post<any>("http://localhost:8081/api/signup", body);
  }
  signUp2(firstName,lastName,username,password,passwordConfirm,email,address,dateN,tel): Observable<any> {
    const body = {
      firstName,
      lastName,
      username,
      password,
      passwordConfirm,
      email,
      address,
      dateN,
      tel,
    };
    return this.http.post<any>("http://localhost:8081/api/signup", body);
  }
}

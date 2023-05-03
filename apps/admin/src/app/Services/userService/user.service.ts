import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../Entities/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }

  addUser(user:User){
    return this.http.get(this.apiUrl);

  }
  getAllUsers(){
    return this.http.get<User[]>(this.apiUrl+"/users");
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../Entities/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class  UserService {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getuser(id : number ) {
    return this.http.get(this.apiUrl+"/user/"+id);
  }

  addUser(user:User){
    return this.http.post<User>(this.apiUrl , user);

  }
  updateUser(user:User){
    return this.http.put<User>(this.apiUrl+"/updateUser" , user);

  }
  deleteUser(id:number) {
    return this.http.delete(this.apiUrl + "/user/" + id);

  }
  getAllUsers(){
    return this.http.get<User[]>(this.apiUrl+"/users");
  }
}

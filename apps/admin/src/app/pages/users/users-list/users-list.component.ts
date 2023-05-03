import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {User} from "../../../Entities/User";
import {UserService} from "../../../Services/userService/user.service";


@Component({
  selector: 'admin-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UserService,
    private router: Router,
    private messageService : MessageService,


  ) { }

  ngOnInit(): void {
    this._getUsers();

  }
  private _getUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
      console.log(users) ;
      this.users = users;
    });
  }
  updateUser(userid: string) {
    this.router.navigateByUrl(`users/form/${userid}`);
  }

  // deleteUser(userId: string) {
  //   this.usersService.deleteUser(userId).subscribe( () => {
  //     this._getUsers();
  //     this.messageService.add({severity:'success', summary:' success', detail:'User deleted'});
  //   });




}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import {User} from "../../../Entities/User";
import {UserService} from "../../../Services/userService/user.service";

@Component({
  selector: 'admin-users-form',
  templateUrl: './users-form.component.html',
  styles: []
})
export class UsersFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editmode = false;
  currentUserId!: number;
  countries = [];
  users: User[] = [];


  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private usersService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initUserForm();
    this._checkEditMode();
  }

  private _initUserForm() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      isAdmin: [],

    });
  }

  // private _addUser(user: User) {
  //   this.usersService.createUser(user).subscribe(
  //     (user: User) => {
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: `User ${user.name} is created!`
  //       });
  //       timer(2000)
  //         .toPromise()
  //         .then(() => {
  //           this.location.back();
  //         });
  //     },
  //     () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error',
  //         detail: 'User is not created!'
  //       });
  //     }
  //   );
  // }

  private _updateUser(user: User) {
    this.usersService.updateUser(user).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User is updated!'
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not updated!'
        });
      }
    );
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;
        this.currentUserId = params['id'];
        this.usersService.getuser(params['id']).subscribe((user) => {
          // @ts-ignore
          this.userForm['firstName'].setValue(user.firstName);
          // @ts-ignore
          this.userForm['lastName'].setValue(user.lastName);
          // @ts-ignore
          this.userForm['email'].setValue(user.email);
          // @ts-ignore
          this.userForm['password'].setValue(user.password);
          // @ts-ignore
          this.userForm['tel'].setValue(user.tel);
          // @ts-ignore
          this.userForm['enabled'].setValue(user.enabled);

        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      id: this.currentUserId,
      lastName: this.userForm['lastName'].value,
      firstName: this.userForm['firstName'].value,
      tel: this.userForm['tel'].value,
      email: this.userForm['email'].value,
       password: this.userForm['password'].value


    };
    if (this.editmode) {
      this._updateUser(user);
    } else {
   //   this._addUser(user);
    }
  }

  onCancle() {
    this.location.back();
  }


  get userForm() {
    return this.form.controls;
  }
}

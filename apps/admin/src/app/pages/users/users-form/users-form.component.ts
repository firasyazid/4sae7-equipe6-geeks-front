import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from 'primeng/api';
import {timer} from 'rxjs';
import {User} from "../../../Entities/User";
import {UserService} from "../../../Services/userService/user.service";

@Component({
  selector: 'admin-users-form',
  templateUrl: './users-form.component.html',
  styles: []
})
export class UsersFormComponent implements OnInit {

  editMode = false;
  user: User;

  constructor(
    private messageService: MessageService,
    private usersService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    // this._initUserForm();

    this.user = new User();
    this.user.firstName = "KK";
  }

  ngOnInit(): void {
    this.user = new User();

    let userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.editMode = true;
      this.updateUserInit(userId);
    }

    // this._initUserForm();
    // this._checkEditMode();
  }

  public updateUserInit(userId) {
    // this.user = this.route.snapshot.queryParams['user'];
    // let userId = this.route.snapshot.paramMap.get('id');


    this.usersService.getUserByID(userId).subscribe(x => {

        this.user = x;
        console.log("user == ", x);
      }
    );


  }

  public onSubmit() {
    console.log("user Submitted == ", this.user);

    if (this.editMode)
      this.usersService.updateUser(this.user).subscribe(x=>console.log(x));
    else
      this.usersService.addUser(this.user);
    this.location.back();

  }

  selectedFile: ImageSnippet;
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
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


  onCancel() {
    this.location.back();

  }

}
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

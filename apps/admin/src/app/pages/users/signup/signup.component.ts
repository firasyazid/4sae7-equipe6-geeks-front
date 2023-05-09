import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../Services/authService/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'bluebits-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpData={
    firstName:'',
    lastName:'',
    username:'',
    password:'',
    passwordConfirm:'',
    email:'',
    address:'',
    dateN:'',
    tel:'',
  }
  constructor(
    public authService:AuthService,
    private route: Router

  ) {}

  ngOnInit(): void {}

  onSignUp() {

    console.log(this.signUpData)
    this.authService.signUp(this.signUpData).subscribe(x=>{
      console.log(x);
    });

    this.route.navigate(['/signin'])
  }
}

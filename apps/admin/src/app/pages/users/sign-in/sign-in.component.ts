import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../Services/authService/auth.service";
import {Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'bluebits-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInData= {
    email:'',
    password:''
  };

  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;

  ngOnInit() {
    // // this.loginForm = this.formBuilder.group({
    // //   email: ['', Validators.required],
    // //   password: ['', Validators.required],
    // // });
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }


  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private socialAuthService: SocialAuthService
  ) {
  }



  onSignIn() {
    console.log(this.signInData)

    this.authService.signIn(this.signInData.email, this.signInData.password
    ).subscribe(x => {
        console.log(x)
      if (x) {
        let token = x.accessToken;

        localStorage.setItem('accessToken',token);
    this.router.navigate(['/users'])
      } else {

        console.log('incorrect ')
      }

    })

  }
}

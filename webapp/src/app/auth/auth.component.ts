import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {User} from "../models/user.model";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User = new User();
  authStatus: boolean;

  hide: boolean = true;
  userNotFound: boolean = false;

  userNameControl = new FormControl(this.user.name, [Validators.required]);
  passwordControl = new FormControl(this.user.password, [Validators.required]);


  constructor(private authService: AuthService, private router: Router) {
  }

  getUserNameErrorMessage() {
    return this.userNameControl.hasError('required') ? 'You must enter a value' : '';
  }

  getPasswordErrorMessage() {
    return this.passwordControl.hasError('required') ? 'You must enter a value' : '';
  }

  formIsValid() {
    return this.userNameControl.valid && this.passwordControl.valid
  }

  onSubmit() {
    this.authService.connectUser(this.user.name, this.user.password)
      .then((currentUser: User) => {
        this.user = currentUser;
        this.userNotFound = false;
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['articles'])
      })
      .catch((error) => {
          if (error.status == 404) {
            this.userNotFound = true;
          }
        }
      );
  }

  onSignOut() {
    this.authService.signOut();
    this.user = this.authService.currentUser;
    this.authStatus = this.authService.isAuth;
  }

  ngOnInit() {
    this.authService.refreshUser().then((refreshedUser: User) => {
      this.user = refreshedUser;
      this.authStatus = this.authService.isAuth;
    });
  }

}

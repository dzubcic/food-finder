import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.snackBar.dismiss();
  }

  login(): void {
    this.subscription = this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.snackBar.dismiss();
        this.authService.getUser();
        this.router.navigate(['restaurants']);
      },
      () => this.snackBar.open('Wrong username or password!', 'Close'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

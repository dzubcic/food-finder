import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../../service/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  constructor(private snackBar: MatSnackBar,
              private authService: AuthService) { }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  ngOnInit(): void {}

  register() {
    this.subscription = this.authService.register(this.registerForm.value).subscribe(
      () => {
        this.registerForm.reset();
        Object.keys(this.registerForm.controls).forEach(key => {
          this.registerForm.get(key).setErrors(null);
        });
        this.snackBar.open('Register success!', 'Close');
      },
      error => this.snackBar.open(error.error, 'Close'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

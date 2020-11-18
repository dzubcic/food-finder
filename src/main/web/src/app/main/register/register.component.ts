import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private authService: AuthService) { }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  ngOnInit(): void {}

  register() {
    this.authService.register(this.registerForm.value).subscribe(
      () => {
        this.registerForm.reset();
        Object.keys(this.registerForm.controls).forEach(key => {
          this.registerForm.get(key).setErrors(null);
        });
        this.snackBar.open('Register success!', 'Close');
      },
      error => this.snackBar.open(error.error, 'Close'));
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Login} from "../models/login.model";
import {Register} from "ts-node";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  loggedIn$: Observable<User> = this.loggedInSubject$.asObservable();

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  get loggedIn(): User {
    return this.loggedInSubject$.getValue();
  }

  login(data: Login): Observable<any> {
    return this.http.post<{token: string}>('/user/login', data).pipe(map(resp => {
      localStorage.setItem('auth', resp.token);
      return resp;
    }));
  }

  register(data: Register): Observable<void> {
    return this.http.post<void>('/user/register', data);
  }

  getUser(): void {
    this.http.get<any>('/user').subscribe(user => {
      this.loggedInSubject$.next(user);
    }, () => {
      localStorage.removeItem('auth');
      this.router.navigate(['']);
      this.snackBar.open('User not found!', 'Close');
    })
  }

  loginExisting() {
    if (getToken()) {
      this.getUser();
    }
  }

  logout() {
    localStorage.removeItem('auth');
    this.loggedInSubject$.next(null);
    this.router.navigate(['']);
  }
}

export function extractUser(token: string): User {
  return JSON.parse(atob(token.split('.')[1]));
}

export function getToken(): string {
  return localStorage.getItem('auth');
}

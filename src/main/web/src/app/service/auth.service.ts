import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Login} from "../models/login.model";
import {Register} from "ts-node";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  loggedIn$: Observable<User> = this.loggedInSubject$.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(data: Login): Observable<any> {
    return this.http.post<{token: string}>('/user/login', data).pipe(map(resp => {
      const user = extractUser(resp.token);
      this.loggedInSubject$.next(user);
      localStorage.setItem('auth', resp.token);
      return resp;
    }));
  }

  register(data: Register): Observable<void> {
    return this.http.post<void>('/user/register', data);
  }

  loginExisting() {
    if (getToken()) {
      this.loggedInSubject$.next(extractUser(getToken()));
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

export interface User {
  sub: string;
  authority: string;
}

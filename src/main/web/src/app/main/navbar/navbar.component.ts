import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService, User} from "../../service/auth.service";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn$: Observable<User> = this.authService.loggedIn$;

  faUser = faUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loginExisting();
  }

  logout() {
    this.authService.logout();
  }

}
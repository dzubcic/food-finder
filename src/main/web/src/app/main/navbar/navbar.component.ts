import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from "../../service/auth.service";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {User} from "../../models/user.model";

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

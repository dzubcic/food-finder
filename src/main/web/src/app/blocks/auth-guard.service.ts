import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {getToken} from '../service/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (!getToken()) {
      this.router.navigate(['']);
      return false;
    }
    return true;

  }

}

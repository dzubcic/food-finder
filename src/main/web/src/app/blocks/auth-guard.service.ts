import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { extractUser, getToken } from '../service/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const token = getToken();
    const userRole = extractUser(token).authority;
    const expectedRole = route.data.expectedRole;
    if (!token || (expectedRole && userRole !== expectedRole)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getToken } from '../service/auth.service';

@Injectable()
export class AnonymousGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (getToken()) {
      this.router.navigate(['restaurants']);
      return false;
    }
    return true;
  }

}

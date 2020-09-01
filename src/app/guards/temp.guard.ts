import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class TempGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(nextRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree | boolean {
    // granting access
    return true;

    // not granting access
    // return false;

    // access to others
    // return this.router.parseUrl('/errors/not-found');
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
@Injectable()
export class UserGuard implements CanActivate {
  public constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log('WTF', { route, state });
    if (!this.userService.isLogged) {
      this.userService.openLoginDialog();
      return false;
    }
    return true;
  }
}

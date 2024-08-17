import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleAccessService } from '../services/role-access.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private roleAccess: RoleAccessService, private router: Router) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredPermission = route.data['permission']
    if (this.roleAccess.hasPermissionScreen(requiredPermission)) {
      return true
    } else {
      this.router.navigate(['unauthorized'])
      return false
    }
  }

}

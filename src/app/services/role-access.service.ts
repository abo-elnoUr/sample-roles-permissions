import { Injectable } from '@angular/core';
import { Role } from '../models/interface/role.interface';
import { Permission, Roles, Screens } from '../models/enum/role-permession.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessService {

  private user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '') : null
  private currentRole: Role | null = this.user ? this.user?.role : null


  constructor() { }

  hasRole(userRole: string, requiredRole: Roles): boolean {
    return userRole === requiredRole;
  }

  hasAnyRole(userRole: string, requiredRoles: Roles[]): boolean {
    return requiredRoles.includes(userRole as Roles);
  }

  setRole(role: Role): void {
    this.currentRole = role;
  }

  get Role() {
    return this.currentRole
  }

  getPermissions(): Permission[] {
    return this.currentRole ? this.currentRole.permissions : [];
  }

  hasPermission(permission: Permission): boolean {
    return this.currentRole?.permissions.includes(permission) ?? false;
  }

  hasPermissionScreen(screen: Screens): boolean {
    return this.currentRole?.screens.includes(screen) ?? false;
  }


}

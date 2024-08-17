import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RoleAccessService } from '../services/role-access.service';
import { Roles } from '../models/enum/role-permession.enum';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {

  private roles: Roles[] = [];
  private userRole: string = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private roleAccessService: RoleAccessService
  ) { }

  @Input()
  set appHasRole(context: { roles: Roles[], role: string }) {
    this.roles = context.roles;
    this.userRole = context.role;
    this.updateView();
  }

  private updateView() {
    if (this.userRole && this.roleAccessService.hasAnyRole(this.userRole, this.roles)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { RoleAccessService } from '../../services/role-access.service';
import { Permission, Roles } from '../../models/enum/role-permession.enum';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/interface/user.model';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from '../../directives/has-role.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, HasRoleDirective]
})
export class HomeComponent implements OnInit {
  user = new BehaviorSubject<User | null>(null);

  constructor(public roleAccess: RoleAccessService) { }

  Permission = Permission
  Roles = Roles

  ngOnInit(): void {
    this.loadUserFromLocalStorage()
  }

  loadUserFromLocalStorage() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user.next(JSON.parse(storedUser));
    }
  }

  submit() {
    alert('congrats you have this permissions ✨✨')
  }

}

import { Component, OnInit } from '@angular/core';
import { HasRoleDirective } from '../../directives/has-role.directive';
import { Roles } from '../../models/enum/role-permession.enum';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/interface/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [HasRoleDirective, CommonModule]
})
export class ProductsComponent implements OnInit {

  user = new BehaviorSubject<User | null>(null)
  constructor() { }

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
}

import { Component, OnInit } from '@angular/core';
import { RoleAccessService } from '../../services/role-access.service';
import { Permission } from '../../models/enum/permession.enum';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/interface/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  user = new BehaviorSubject<User | null>(null);

  constructor(public roleAccess: RoleAccessService) { }

  Permission = Permission

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

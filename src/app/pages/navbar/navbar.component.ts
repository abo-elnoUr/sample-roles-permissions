import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/interface/user.model';
import { BehaviorSubject } from 'rxjs';
import { RoleAccessService } from '../../services/role-access.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router, private auth: AuthService) { }

  user$ = this.auth.user$

  ngOnInit(): void {
    // this.loadUserFromLocalStorage()
  }

  // loadUserFromLocalStorage() {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     this.user.next(JSON.parse(storedUser));
  //   }
  // }

  logout() {
    this.router.navigate(['login'])
    localStorage.clear()
    this.auth.removeUser()
  }

}

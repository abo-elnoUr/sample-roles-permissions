import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from '../../models/enum/permession.enum';
import { Role } from '../../models/interface/role.interface';
import { RoleAccessService } from '../../services/role-access.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  // ********************************************************
  // userName : superadmin, password: 123 -> SuperAdmin
  // userName : admin, password: 123 -> Admin
  // userName : sales, password: 123 -> Sales
  // ********************************************************

  userRole: Role = {} as Role

  constructor(private roleAccess: RoleAccessService, private router: Router, private auth: AuthService) { }

  form = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl("123")
  })

  ngOnInit(): void {
  }

  getLoginData() {
    if (this.form.controls.userName.value && this.form.controls.password.value) {
      this.auth.login(this.form.controls.userName.value, this.form.controls.password.value).subscribe({
        next: (res) => {
          if (res?.role) {
            localStorage.setItem('user', JSON.stringify(res))
            this.roleAccess.setRole(res.role)
            this.router.navigate(['home'])
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { RoleAccessService } from '../../services/role-access.service';
import { Permission } from '../../models/enum/permession.enum';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true
})
export class EmployeeComponent implements OnInit {

  constructor(public roleAccess: RoleAccessService) { }

  Permission = Permission

  ngOnInit(): void {
  }

}

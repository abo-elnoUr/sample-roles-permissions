import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class UnauthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

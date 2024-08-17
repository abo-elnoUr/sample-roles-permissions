import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roles-permessions';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.loadUserFromLocalStorage()
  }


  loadUserFromLocalStorage() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.auth.setUser(JSON.parse(storedUser));
    }
  }
}

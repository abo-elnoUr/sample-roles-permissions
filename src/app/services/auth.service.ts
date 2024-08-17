import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs';
import { User } from '../models/interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    return this.http.get<User[]>(`assets/db/users.db.json`).pipe(
      map(users => {
        const user = users.find((user) => user.userName == userName && user.password == password)
        return user ? user : null
      })
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, tap } from 'rxjs';
import { User } from '../models/interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User | null>(null)

  user$ = this.user.asObservable()

  constructor(private http: HttpClient) { }

  setUser(user: User) {
    this.user.next(user)
  }

  removeUser() {
    this.user.next(null)
  }

  login(userName: string, password: string) {
    return this.http.get<User[]>(`assets/db/users.db.json`).pipe(
      map(users => {
        const user = users.find((user) => user.userName == userName && user.password == password)
        return user ? user : null
      })
    )
  }

}

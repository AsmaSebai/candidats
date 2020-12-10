import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()

export class AuthService {
  constructor() { }

  currentUser: IUser
  loginUser(userName: string, password: string) {
    USERS.forEach(user => {
      if (user.passeword == password && user.userName == userName) {
        this.currentUser = user;
      }
    })
    return this.currentUser
  }

  isAuthenticated() {
    return !!this.currentUser
  }

  logout() {
    this.currentUser = undefined;
  }
}

const USERS: IUser[] = [
  {
    id: 1,
    userName: 'admin',
    passeword: 'admin',
    type: 'admin',
  },
  {
    id: 2,
    userName: 'admin2',
    passeword: 'admin2',
    type: 'admin',
  },
  {
    id: 3,
    userName: 'super',
    passeword: 'super',
    type: 'super',
  }

]
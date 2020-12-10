import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }
  nameUser: string

  ngOnInit(): void {
    if (this.auth.currentUser) {
      this.nameUser = this.auth.currentUser.userName
      console.log("test")
    }
  }

  logout() {
    this.auth.logout()
  }

}

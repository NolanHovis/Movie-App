import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isLoggedIn = false;
  loginHeader: string;

  constructor() { }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.loginHeader = 'Login'
    } else {
      this.loginHeader = 'Sign Up'
    }
  }

}

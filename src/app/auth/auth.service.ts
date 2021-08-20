import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user/user.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(newUser: User) {
    return this.http.post('https://codelabs2021.herokuapp.com/api/v1/users/signup', newUser)
  }

}

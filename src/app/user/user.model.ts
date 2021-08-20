export class User {
  email: string;
  first_name: string;
  last_name: string;
  nickname: string;
  password: string;
  password_conformation: string;

  constructor(
    email: string,
    first_name: string,
    last_name: string,
    nickname: string,
    password: string,
    password_confirmation: string
  ) {
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.nickname = nickname;
    this.password = password;
    this.password_conformation = password_confirmation
  }
}

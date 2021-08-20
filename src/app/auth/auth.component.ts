import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component
({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.initForm()
  }

  onSubmit() {

  }

  private initForm() {

  }
}

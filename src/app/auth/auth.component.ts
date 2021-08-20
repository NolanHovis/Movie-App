import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component
({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  userForm: FormGroup;

}

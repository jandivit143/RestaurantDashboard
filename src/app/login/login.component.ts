import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Subject } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  // isLoggedIn: boolean = false;
  constructor(private formbuilder: FormBuilder,
    private _http:HttpClient,
    private _router:Router,
    private api:ApiService,
    private loginService:LoginService) {
      this.loginForm = this.formbuilder.group({
          email:["",Validators.required],
          password:["",Validators.required]
      });
  }
  registeredUsers: any[] = [];

  ngOnInit(): void {
	this.registeredUsers = this.api.registeredUsers();
  }

  logIn() {
    if (this.registeredUsers.filter((e: any) => e.email === this.loginForm.value.email && e.password === this.loginForm.value.password).length) {
      this._router.navigate(['/restaurants']);
      this.loginService.addUserName(true);
      // this.isLoggedIn = true;
    }
  }
}

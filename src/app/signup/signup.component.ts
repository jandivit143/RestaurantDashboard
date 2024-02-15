import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  registeredUsers: any[] = [];
  constructor(private formbuilder:FormBuilder, private api:ApiService, private _router:Router){
    this.signupForm = this.formbuilder.group({
      email:["",Validators.required],
      name:["",Validators.required],
      phone:["",Validators.required],
      password:["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.registeredUsers = this.api.registeredUsers();
  }

  signUp(){
    // this.registerUser();
    if (this.registeredUsers.filter((e: any) => e.email === this.signupForm.value.email).length) {
      this._router.navigate(['/restaurant']);
    }
    }
}

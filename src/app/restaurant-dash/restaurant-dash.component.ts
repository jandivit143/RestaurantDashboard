import { Component, OnInit } from '@angular/core';
import { RestaurantData } from './restaurant.model';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {
  title = 'Restaurant Record App';
  formValue:FormGroup;
  allRestaurantData: RestaurantData[] = [];
  updateRestaurant:boolean = false;

  constructor(private formbuilder:FormBuilder, private api:ApiService){
    this.formValue = this.formbuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
      email:["",Validators.required],
      address:["",Validators.required],
      mobile:["",Validators.required],
      services:["",Validators.required]
    });
  }

  ngOnInit(): void {
      this.getAllData();
  }

  getAllData(){
    this.allRestaurantData = this.api.getAllRestaurants();
    // console.log('this.allRestaurantData',this.allRestaurantData);
  }

  updateResto() {
    this.api.updateResto(this.formValue.value);
    this.formValue.reset();
    this.updateRestaurant = false;
  }

  saveRestaurant(){
    this.api.addRestaurant(this.formValue.value);
    this.getAllData();
    this.formValue.reset();
  }

  editResto(data: any){
    this.updateRestaurant = true;
    this.formValue.patchValue({
        id:data.id,
        name:data.name,
        email:data.email,
        address:data.address,
        mobile:data.mobile,
        services: data.services
    })
  }

  deleteResto(id: number){
    this.api.deleteResto(id);
    this.getAllData();
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from '../restaurant-dash/restaurant.model';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  formValue:FormGroup;
  allRestaurantData: RestaurantData[] = [];
  constructor(private formbuilder:FormBuilder,
    private api:ApiService){
    this.formValue = this.formbuilder.group({

    });
  }

  getAllData(){
    this.allRestaurantData = this.api.getAllRestaurants();
  }

  saveRestaurant(){
    this.api.addRestaurant(this.formValue.value);
    this.getAllData();
    this.formValue.reset();
  }
}

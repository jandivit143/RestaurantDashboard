import { Injectable } from "@angular/core";
import { db } from "../restaurant-dash/restaurant.model";

@Injectable({
    providedIn:'root'
})
export class ApiService{
    db = db;

    getAllRestaurants() {
        return this.db.posts;
    }

    registeredUsers() {
        return this.db.signup;
    }

    addRestaurant(restaurantModelObj: any) {
        let id = this.db.posts.length+1;
        this.db.posts.push({id,...restaurantModelObj});
    }

    updateResto(data: any){
        this.db.posts.forEach((item, idx) => {
            if(item.id == data.id){
                item.name = data.name;
                item.address = data.address;
                item.mobile = data.mobile;
                item.services = data.services;
                item.email = data.email;
            }
        });
    }

    deleteResto(id: number){
        this.db.posts = this.db.posts.filter(rest => rest.id != id);
        this.getAllRestaurants();
    }
}
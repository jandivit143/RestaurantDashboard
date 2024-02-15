import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class MenuService{
    menuItems:string[];
    constructor(){
        this.menuItems = ['Login', 'Restaurants', 'Add Restaurant'];
    }
}
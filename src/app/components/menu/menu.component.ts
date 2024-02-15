import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isUserLoggedIn:boolean=false;
  title:string = 'Restaurant Record App';
  menuItems:string[];
  constructor(private menuService:MenuService,
    private loginService:LoginService){
    this.menuItems = this.menuService.menuItems;
    this.loginService.isLoggedInBroadCaster.subscribe(res => {
      console.log('the user is abhijith', res);
      this.isUserLoggedIn = res;
    });
    this.loginService.isLoggedOutBroadCaster.subscribe(res => {
      console.log('the user is abhijith', res);
      this.isUserLoggedIn = res;
    });
  }

  logout(){
    this.loginService.removeUserName(false);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent,
  },
  {
    path:'restaurants', component:RestaurantDashComponent
  },
  {
    path:'add restaurant', component:AddRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

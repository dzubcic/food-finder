import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {AnonymousGuardService} from "./blocks/anonymous-guard.service";
import {RestaurantsComponent} from "./main/restaurants/restaurants.component";
import {AuthGuardService} from "./blocks/auth-guard.service";
import {AddRestaurantComponent} from "./main/restaurants/add-restaurant/add-restaurant.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-restaurant',
    component: AddRestaurantComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

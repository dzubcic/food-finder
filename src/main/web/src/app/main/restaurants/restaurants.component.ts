import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../service/restaurant.service";
import {RestaurantDTO} from "../../models/restaurant.model";
import {categories} from "../../models/categories.model";
import {AuthService} from "../../service/auth.service";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  categories = categories;
  loggedIn$: Observable<User>;

  restaurants: Map<string, RestaurantDTO[]>;

  constructor(private restaurantService: RestaurantService, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initRestaurants();
    this.loggedIn$ = this.authService.loggedIn$;
  }

  removeRestaurant(restaurant: RestaurantDTO) {
    if (confirm(`Are you sure you want to delete restaurant: ${restaurant.name}?`)) {
      this.restaurantService.deleteRestaurant(restaurant.id).subscribe(() => {
        this.initRestaurants();
        this.snackBar.open('Restaurant deleted successfully!', 'Close');
      });
    }
  }

  initRestaurants() {
    this.restaurants = new Map<string, RestaurantDTO[]>();
    this.restaurantService.getAllRestaurants().subscribe((res: RestaurantDTO[]) => {
      res.forEach(r => {
        this.restaurants.has(r.category) ? this.restaurants.set(r.category, [...this.restaurants.get(r.category), r]) : this.restaurants.set(r.category, [r]);
      })
    });
  }
}

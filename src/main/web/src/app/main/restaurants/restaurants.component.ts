import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../service/restaurant.service";
import {Restaurant} from "../../models/restaurant.model";
import {categories} from "../../models/categories.model";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  categories = categories;

  restaurants: Map<string, Restaurant[]> = new Map();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurants().subscribe((res: Restaurant[]) => {
      res.forEach(r => {
        this.restaurants.has(r.category) ? this.restaurants.set(r.category, [...this.restaurants.get(r.category), r]) : this.restaurants.set(r.category, [r]);
      })
    });
  }

}

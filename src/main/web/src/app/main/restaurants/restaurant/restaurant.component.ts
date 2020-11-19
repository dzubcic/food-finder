import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../models/restaurant.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  data: Restaurant;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.restaurantService.getRestaurant(id).subscribe(res => {
      this.data = res;
    });
  }

}

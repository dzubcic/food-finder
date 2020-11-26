import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../models/restaurant.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  data: Restaurant;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.subscription = this.restaurantService.getRestaurant(id).subscribe(res => {
      this.data = res;
    });
  }

  redirectToGoogleMaps(address: string) {
    window.open(`https://www.google.hr/maps/search/${address}`, '_blank');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

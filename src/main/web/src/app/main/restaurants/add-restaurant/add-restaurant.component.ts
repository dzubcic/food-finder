import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  categories = ['Pizza', 'Burger'];

  restaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    workTime: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}

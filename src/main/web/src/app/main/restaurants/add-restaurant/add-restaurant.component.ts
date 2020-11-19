import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RestaurantService} from "../../../service/restaurant.service";
import {categories} from "../../../models/categories.model";

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  categories = categories;

  restaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    workTime: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  get selectedFile(): File {
    return this.restaurantForm.get('image').value as File;
  }

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.restaurantForm.get('image').patchValue(event.target.files[0]);
  }

  submit() {
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.restaurantService.addRestaurant({...this.restaurantForm.value, image: reader.result});
    };
  }

}

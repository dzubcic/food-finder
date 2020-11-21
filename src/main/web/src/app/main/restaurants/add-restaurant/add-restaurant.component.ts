import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RestaurantService} from "../../../service/restaurant.service";
import {categories} from "../../../models/categories.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  categories = categories;

  restaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    contact: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    workTime: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    image: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  get selectedFile(): File {
    return this.restaurantForm.get('image').value as File;
  }

  constructor(private restaurantService: RestaurantService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.restaurantForm.get('image').patchValue(event.target.files[0]);
  }

  submit() {
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.restaurantService.addRestaurant({...this.restaurantForm.value, image: reader.result}).subscribe(id => {
        this.router.navigate([`/restaurant/${id}`]);
        this.snackBar.open('Restaurant added successfully!', 'Close');
      });
    };
  }

}

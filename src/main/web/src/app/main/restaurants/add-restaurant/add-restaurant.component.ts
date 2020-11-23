import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RestaurantService} from "../../../service/restaurant.service";
import {categories} from "../../../models/categories.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WoltItem} from "../../../models/wolt-item.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  woltItems: WoltItem[];
  woltSelected: WoltItem;
  categories = categories;

  restaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    contact: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    workTime: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    image: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    woltLink: new FormControl('')
  });

  get selectedFile(): File {
    return this.restaurantForm.get('image').value as File;
  }

  constructor(private restaurantService: RestaurantService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(this.restaurantForm.get('woltLink').valueChanges.subscribe(value => {
      if (value.length > 2) {
        this.restaurantService.getWoltItems(value).subscribe(res => {
          this.woltItems = res.results.map(r => r.value);
        });
      } else if (!value) {
        this.woltSelected = null;
      }
    }));
  }

  selectFile(event) {
    this.restaurantForm.get('image').patchValue(event.target.files[0]);
  }

  submit() {
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      const woltLink = this.woltSelected ? this.woltSelected.public_url : null;
      const woltName = this.woltSelected ? this.woltSelected.name[0].value : null;
      this.subscription.add(this.restaurantService.addRestaurant({...this.restaurantForm.value, image: reader.result, woltLink, woltName}).subscribe(id => {
        this.router.navigate([`/restaurant/${id}`]);
        this.snackBar.open('Restaurant added successfully!', 'Close');
      }));
    };
  }

  woltLinkDisplay(item: WoltItem) {
    return item ? item.name[0].value : '';
  }
}

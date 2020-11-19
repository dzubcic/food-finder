import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {Restaurant} from "../models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  addRestaurant(formData: any) {
    this.http.post<number>('/restaurant', formData).subscribe(id => {
      this.router.navigate([`/restaurant/${id}`]);
      this.snackBar.open('Restaurant added successfully!', 'Close');
    })
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`/restaurant/${id}`);
  }

  getAllRestaurants(): Observable<any> {
    return this.http.get('/restaurant');
  }

}

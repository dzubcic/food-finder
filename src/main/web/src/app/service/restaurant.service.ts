import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Restaurant} from "../models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  resourceUrl = '/restaurant';

  constructor(private http: HttpClient) { }

  addRestaurant(formData: any): Observable<number> {
    return this.http.post<number>(this.resourceUrl, formData);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.resourceUrl}/${id}`);
  }

  getAllRestaurants(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }

  deleteRestaurant(id: number) {
    return this.http.delete(`${this.resourceUrl}/${id}`)
  }

}

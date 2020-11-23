import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Restaurant, RestaurantDTO} from "../models/restaurant.model";

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

  getAllRestaurants(): Observable<RestaurantDTO[]> {
    return this.http.get<RestaurantDTO[]>(this.resourceUrl);
  }

  deleteRestaurant(id: number) {
    return this.http.delete(`${this.resourceUrl}/${id}`)
  }

  getWoltItems(q: string): Observable<any> {
    const params = {
      q,
      sort: 'relevancy',
      lat: '45.8081021057639',
      lon: '15.9955787658691',
      limit: '10'
    };
    return this.http.get('api/v1/search', { params });
  }

}

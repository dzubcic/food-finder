import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Restaurant} from "../models/restaurant.model";
import {Review} from "../models/review.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  resourceUrl = '/review';

  constructor(private http: HttpClient) { }

  addReview(restaurantId: number, review: string): Observable<Review> {
    return this.http.post<Review>(`${this.resourceUrl}/${restaurantId}`, review);
  }

  getAllReviews(restaurantId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.resourceUrl}/${restaurantId}`);
  }

  deleteReview(id: number) {
    return this.http.delete(`${this.resourceUrl}/${id}`)
  }

}

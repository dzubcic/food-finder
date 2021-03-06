import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ReviewService} from "../../service/review.service";
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Review} from "../../models/review.model";
import {Subscription} from "rxjs";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnDestroy {

  @Input() restaurantId: number;

  loggedIn: User;
  newReview: string;
  reviews: Review[];
  hasPosted: boolean = true;
  subscription = new Subscription();
  currentDateTime: number = Date.now();

  constructor(private reviewService: ReviewService, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = Date.now();
    }, 100);
    this.loggedIn = this.authService.loggedIn;
    this.reviewService.getAllReviews(this.restaurantId).subscribe(res => {
      this.reviews = res;
      this.hasPosted = !!res.find(r => this.hasPosted = r.createdBy.email === this.loggedIn.email);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addReview() {
    this.subscription.add(this.reviewService.addReview(this.restaurantId , this.newReview).subscribe(res => {
      this.newReview = '';
      this.hasPosted = true;
      this.reviews.unshift(res);
      this.snackBar.open('Review successfully added!', 'Close');
    }));
  }

  deleteReview(id: number) {
    if (confirm('Are you sure you want to delete review?')) {
      this.subscription.add(this.reviewService.deleteReview(id).subscribe(() => {
        this.hasPosted = false;
        this.reviews = this.reviews.filter(r => r.id !== id);
        this.snackBar.open('Review successfully deleted!', 'Close');
      }));
    }
  }

}

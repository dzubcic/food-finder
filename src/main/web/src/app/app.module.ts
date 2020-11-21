import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from "./main/navbar/navbar.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from "./main/login/login.component";
import {RegisterComponent} from "./main/register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomeComponent} from './main/home/home.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AnonymousGuardService} from "./blocks/anonymous-guard.service";
import {AuthGuardService} from "./blocks/auth-guard.service";
import {AuthService} from "./service/auth.service";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {TokenInterceptor} from "./blocks/token.interceptor";
import {MatButtonModule} from "@angular/material/button";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RestaurantsComponent } from './main/restaurants/restaurants.component';
import { AddRestaurantComponent } from './main/restaurants/add-restaurant/add-restaurant.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {RestaurantService} from "./service/restaurant.service";
import { RestaurantComponent } from './main/restaurants/restaurant/restaurant.component';
import {MatCardModule} from "@angular/material/card";
import { ReviewsComponent } from './main/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RestaurantsComponent,
    AddRestaurantComponent,
    RestaurantComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    FontAwesomeModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS , useValue: { floatLabel: 'always', appearance: 'outline' }},
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 }},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AnonymousGuardService, AuthGuardService, AuthService, RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

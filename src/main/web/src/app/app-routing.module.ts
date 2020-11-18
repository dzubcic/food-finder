import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {AnonymousGuardService} from "./blocks/anonymous-guard.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AnonymousGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
// Import EditTripComponent if it's defined
// import { EditTripComponent } from './edit-trip/edit-trip.component';

const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  // Uncomment if EditTripComponent is defined
  // { path: 'edit-trip', component: EditTripComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//Saving just in case
// import { NgModule } from "@angular/forms";
// import {Routes, RouterModule} from '@angular/router';
// import { TripListingComponent } from "./trip-listing/trip-listing.component";
// import { AddTripComponent } from "./add-trip/add-trip.component";
// // import {EditTripComponent} from './edit-trip/add-trip.component';

// const routes: Routes = [
//     {path: 'add-trip', component: AddTripComponent},
//     //{path: 'edit-trip, component: EditTripComponent},
//     {path: '', component: TripListingComponent, pathMatch: 'full'}
// ]

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}



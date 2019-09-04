import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepliStatusComponent } from './repli-status/repli-status.component';
import { StorageUtilizationComponent } from './storage-utilization/storage-utilization.component';
import { RoutesDetailsComponent } from './routes-details/routes-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'replication-status', component: RepliStatusComponent },
  { path: 'storage-utilization', component: StorageUtilizationComponent },
  { path: 'routes', component: RoutesDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

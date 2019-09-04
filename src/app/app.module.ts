import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepliStatusComponent } from './repli-status/repli-status.component';
import { StorageUtilizationComponent } from './storage-utilization/storage-utilization.component';
import { RoutesDetailsComponent } from './routes-details/routes-details.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepliStatusComponent,
    StorageUtilizationComponent,
    RoutesDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBLksSNFaf5E2LJihHWE_sIvpi-SMd5n30'
    }),
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
    MatTableModule,
    MatExpansionModule
  ],
  exports: [
    // MatButtonModule,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
    MatTableModule, 
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-storage-utilization',
  templateUrl: './storage-utilization.component.html',
  styleUrls: ['./storage-utilization.component.css']
})
export class StorageUtilizationComponent implements OnInit {
  usageData;
  myData;
  oldestBuild;

  constructor( private restApi: ApiServiceService ) { }

  ngOnInit() {
    this.getUsage();
    this.getOldestBuild();
  }

  getUsage() {
    return this.restApi.usageApi().subscribe((data) => {
      this.usageData = data[0];
      this.myData = [];
      for(let usage of this.usageData) {
        let myObj = {};
        myObj = usage;
        // myObj['percentage'] = parseInt((usage.disk_usage/usage.disk)*100);
        this.myData.push(myObj)
      }
    })
  }

  getOldestBuild() {
    return this.restApi.oldestBuildsApi().subscribe((data) => {
      console.log('data', data);
      this.oldestBuild = data[0];
    });
  }

}

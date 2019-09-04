import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
// import { PeriodicElement } from '../periodic-element';

export interface PeriodicElement {
  build: string;
}

import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

@Component({
  selector: 'app-repli-status',
  templateUrl: './repli-status.component.html',
  styleUrls: ['./repli-status.component.css']
})
export class RepliStatusComponent implements OnInit {
  temp: any;
  
  constructor(private restApi: ApiServiceService) { };
  buildsData: any = [];
  temp1: any = [];
  temp2: any;
  myData: any;
 
  getBuilds(gamersData) {
      return this.restApi.buildsApi().subscribe((data) => {
        // this.getDclist(data, gamersData);
        this.buildsData = this.temp1;
        console.log("builds ", this.buildsData);
        
      });
  };

  getGamers() {
    return this.restApi.gamersApi().subscribe((gamersData) => {
      this.getBuilds(gamersData);
      // this.sourceData.push(gamersData);
        console.log("gamers ", gamersData);
    });
  };

  // getDclist(data1, gamersData) {
  //   // this.buildsData.push(data1);
  //   let temp = {};
  //   this.restApi.dclistApi().subscribe((data) => {
  //     var myData = data;
  //     for(let dcData of myData) {
  //         let buildsinfo = {};
  //         let isValid = function (data) {
  //             return data.dc === dcData.dc_id;
  //         };
  //         if (dcData.dc_id !== 1) {
  //             // buildsinfo.builds = data1.filter(isValid);
  //             temp[dcData.dc_name] = buildsinfo;
              
  //         } else {
  //             // buildsinfo.builds = gamersData;
  //             temp[dcData.dc_name] = buildsinfo;
  //         }
  //         temp[dcData.dc_name].region = dcData.region;
  //         temp[dcData.dc_name].region.dcid = dcData.dc_id;
  //     }
  //     this.temp1.push(temp);
  //     this.temp2 = this.setBuildStatus(this.temp1);
  //     console.log('temp2', this.temp2)
  //   });


  // }
  getBuildServer() {
    return this.restApi.buildserverApi().subscribe((data) => {
    });
  }

  setBuildStatus(getData) {
    var myData = Object.values(getData[0])
    for (let data of myData) {
      for(let build of data['builds']) {
        if(build.build_status === 3 || build.build_status === null) {
          build.status = 'complete';
        } else {
          build.status = 'incomplete';
        }
      }
    } 
    return myData;
  }

  ngOnInit() {
    this.getGamers();
    this.getBuildServer();
  };

};

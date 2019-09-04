import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-routes-details',
  templateUrl: './routes-details.component.html',
  styleUrls: ['./routes-details.component.css']
})
export class RoutesDetailsComponent implements OnInit {
  activeData: any;
  passiveData: any;

  constructor(private restApi: ApiServiceService) { }

  ngOnInit() {
    this.getActive();
    this.getPassive();
  }

  getActive() {
    return this.restApi.activeApi().subscribe((data) => {
      console.log('data', data);
      this.activeData = data[0];
    })
  }

  getPassive() {
    return this.restApi.passiveApi().subscribe((data) => {
      console.log('data', data);
      this.passiveData = data[0];
    })
  }

}

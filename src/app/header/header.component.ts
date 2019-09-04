import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ClockService } from '../services/clockServices';
import {Observable} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  // providers: [ClockService]
})
export class HeaderComponent implements OnInit {
  time = new Observable(observer =>
    setInterval(() => observer.next(new Date().toString()), 2000)
  );

  constructor(  ) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    
  }
}

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { interval } from 'rxjs';


@Injectable()
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).map(tick => new Date()).share();
    interval(5000).pipe(tick => new Date()).share()
  }

  getClock(): Observable<Date> {
    return this.clock;
  }

}

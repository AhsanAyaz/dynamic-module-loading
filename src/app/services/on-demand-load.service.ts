import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnDemandLoadService {
  subject = new Subject<string>();

  /**
   * The function updates the value of the `subject` and causes the OnDemandPreloadStrategy to
   * check all routes against this new value.
   * @param moduleName - the 'name' property defined for each route as
   * {data: { name: MODULE_NAME }}
   */
  startPreload(moduleName: string) {
    this.subject.next(moduleName);
  }
}

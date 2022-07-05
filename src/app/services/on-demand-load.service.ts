import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnDemandLoadService {
  subject = new Subject<string>();

  startPreload(moduleName: string) {
    this.subject.next(moduleName);
  }
}

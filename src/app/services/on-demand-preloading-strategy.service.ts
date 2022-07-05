import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OnDemandLoadService } from './on-demand-load.service';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OnDemandPreloadStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<string>;

  constructor(private preloadOnDemandService: OnDemandLoadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.subject;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap((moduleName) => {
        const shouldPreload = route.data?.['name'] === moduleName;
        return shouldPreload ? load() : of(null);
      })
    );
  }
}

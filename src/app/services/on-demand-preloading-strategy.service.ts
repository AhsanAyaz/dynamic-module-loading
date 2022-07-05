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

  /**
   * The function that listens to the preloadOnDemand subject.
   * Whenever a new value is provided to the subject, this function
   * checks its value against EACH ROUTE. And if any route matches the 'name'
   * property with the value provided to the subject, the route's module is loaded.
   * @param route - the route being checked
   * @param load - method from Angular to load module
   * @returns Observable
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap((moduleName) => {
        const shouldPreload = route.data?.['name'] === moduleName;
        if (shouldPreload) {
          console.log('Attempted to load module: ', route.data?.['name']);
        }
        return shouldPreload ? load() : of(null);
      })
    );
  }
}

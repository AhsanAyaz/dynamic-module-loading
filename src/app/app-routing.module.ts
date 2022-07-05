import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnDemandPreloadStrategy } from './services/on-demand-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
    data: {
      name: 'User',
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: OnDemandPreloadStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

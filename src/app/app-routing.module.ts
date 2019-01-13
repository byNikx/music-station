import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

export class Delay implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}

const routes: Routes = [
  {
    path: 'discover',
    loadChildren: 'src/app/modules/discover/discover.module#DiscoverModule',
    resolve: [Delay]
  }, {
    path: 'album',
    loadChildren: 'src/app/modules/album/album.module#AlbumModule',
    resolve: [Delay]
  },
  {
    path: '',
    redirectTo: 'discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Delay]
})
export class AppRoutingModule { }

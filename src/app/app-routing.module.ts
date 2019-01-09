import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'discover',
    loadChildren: 'src/app/modules/discover/discover.module#DiscoverModule'
  },{
    path: 'album',
    loadChildren: 'src/app/modules/album/album.module#AlbumModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

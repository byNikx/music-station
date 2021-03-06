import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlbumRoutingModule } from './album-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContainerModule } from '../container/container.module';
import { MaterialModule } from '../material/material.module';
import { SongModule } from '../song/song.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    FlexLayoutModule,
    ContainerModule,
    SongModule,
    MaterialModule
  ]
})
export class AlbumModule { }

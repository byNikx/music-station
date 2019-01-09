import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ContainerModule
  ]
})
export class DiscoverModule { }

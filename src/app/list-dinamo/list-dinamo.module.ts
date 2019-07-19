import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDinamoRoutingModule } from './list-dinamo-routing.module';
import { ListDinamoComponent } from './list-dinamo.component';

@NgModule({
  declarations: [ListDinamoComponent],
  imports: [
    CommonModule,
    ListDinamoRoutingModule
  ]
})
export class ListDinamoModule { }

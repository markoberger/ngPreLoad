import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCibonaRoutingModule } from './list-cibona-routing.module';
import { ListCibonaComponent } from './list-cibona.component';

@NgModule({
  declarations: [ListCibonaComponent],
  imports: [
    CommonModule,
    ListCibonaRoutingModule
  ]
})
export class ListCibonaModule { }

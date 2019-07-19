import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProgRoutingModule } from './list-prog-routing.module';
import { ListProgComponent } from './list-prog.component';

@NgModule({
  declarations: [ListProgComponent],
  imports: [
    CommonModule,
    ListProgRoutingModule
  ]
})
export class ListProgModule { }

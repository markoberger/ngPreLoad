import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProgComponent } from './list-prog.component';

const routes: Routes = [
  {path: '', component: ListProgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProgRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCibonaComponent } from './list-cibona.component';

const routes: Routes = [
  {path: '', component: ListCibonaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCibonaRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDinamoComponent } from './list-dinamo.component';

const routes: Routes = [
  {path: '', component: ListDinamoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDinamoRoutingModule { }

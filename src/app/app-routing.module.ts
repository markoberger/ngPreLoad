import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptInPreloadService } from './opt-in-preload.service';
import { NetworkAwarePreloadService } from './network-aware-preload.service';

// PreLoad all {preloadingStrategy: PreloadAllModules}
// opt in {preloadingStrategy: OptInPreloadService}
// networ aware {preloadingStrategy: NetworkAwarePreloadService}
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cibona', loadChildren: '../app/list-cibona/list-cibona.module#ListCibonaModule', data: {preload: true}},
  {path: 'dinamo', loadChildren: '../app/list-dinamo/list-dinamo.module#ListDinamoModule'},
  {path: 'prog-lang', loadChildren: '../app/list-prog/list-prog.module#ListProgModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NetworkAwarePreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

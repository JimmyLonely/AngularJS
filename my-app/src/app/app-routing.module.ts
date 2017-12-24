// Lib
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Components
import { PageNotFoundComponent } from './404/404.component'
import { ComposeMessageComponent} from './compose-message.component';

// Routes
const routes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule'
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  }, {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
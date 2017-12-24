// Lib
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

// Component
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes.component';

// Router
import { AdminRoutingModule }       from './admin-routing.module';

// Service
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdminModule {}
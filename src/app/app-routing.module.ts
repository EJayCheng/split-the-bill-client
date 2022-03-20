import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserGuard } from './user.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

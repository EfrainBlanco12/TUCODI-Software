import {NgModule} from '@angular/core';
import * as router from '@angular/router';

const routes: router.Routes = [
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'login', loadChildren: () => import('../app/components/login/login.module').then(r => r.LoginModule)},
  {path: 'dashboard', loadChildren: () => import('../app/components/dashboard/dashboard.module').then(r => r.DashboardModule)}
];


@NgModule({
  imports: [router.RouterModule.forRoot(routes)],
  exports: [router.RouterModule]
})
export class AppRoutingModule {
}

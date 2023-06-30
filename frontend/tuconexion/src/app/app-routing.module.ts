import {NgModule} from '@angular/core';
import * as router from '@angular/router';
import {InitialComponent} from "./components/login/initial/initial.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: router.Routes = [
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'login', loadChildren: () => import('../app/components/login/login.module').then(r => r.LoginModule)}
];


@NgModule({
  imports: [router.RouterModule.forRoot(routes)],
  exports: [router.RouterModule]
})
export class AppRoutingModule {
}

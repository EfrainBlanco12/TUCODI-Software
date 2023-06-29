import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InitialComponent} from "./components/login/initial/initial.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'login', loadChildren: () => import('../app/components/login/login.module').then(r => r.LoginModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

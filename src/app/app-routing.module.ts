import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./shared/pages/login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,  children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login',  component: LoginPageComponent},
    ]
  },
  {
    path: '', component: MainLayoutComponent,  children: []
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

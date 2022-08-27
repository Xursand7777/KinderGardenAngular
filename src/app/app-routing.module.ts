import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./shared/pages/login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";
import {RegistrationPageComponent} from "./shared/pages/registration-page/registration-page.component";
import {CashPageComponent} from "./shared/pages/cash-page/cash-page.component";
import {PaymentsPageComponent} from "./shared/pages/payments-page/payments-page.component";
import {SettingsPageComponent} from "./shared/pages/settings-page/settings-page.component";
import {EmployeesComponent} from "./shared/components/employees/employees.component";
import {InsertemployeeComponent} from "./shared/components/insertemployee/insertemployee.component";
import {UsersComponent} from "./shared/components/users/users.component";
import {SystemComponent} from "./shared/components/system/system.component";
import {SmsComponent} from "./shared/components/sms/sms.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,  children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login',  component: LoginPageComponent},
    ]
  },
  {
    path: 'app', component: MainLayoutComponent,  children: [
      { path: 'home', component:  HomePageComponent },
      { path: 'reg', component: RegistrationPageComponent, data: { title: 'Регистрация'} },
      { path: 'reg/:id', component: RegistrationPageComponent, data: { title: 'Регистрация'} },
      { path: 'cash', component: CashPageComponent, data: { title: 'Касса'} },
      { path: 'payments', component: PaymentsPageComponent },
      { path: 'settings', component: SettingsPageComponent,
        children: [
          { path: 'employee', component: EmployeesComponent, data: { title: 'Настройка / Сотрудники'} },
          { path: 'employee/:id', component: InsertemployeeComponent, data: { title: 'Настройка / Сотрудники'} },
          { path: 'users', component: UsersComponent, data: { title: 'Настройка / Пользователь'} },
          { path: 'system', component: SystemComponent, data: { title: 'Настройка / Система'} },
          { path: 'sms', component: SmsComponent, data: { title: 'Настройка / СМС'} },
          { path: '', redirectTo: 'employee', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

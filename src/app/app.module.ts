import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxAwesomePopupModule, ToastNotificationConfigModule} from "@costlydeveloper/ngx-awesome-popup";
import { BredcrumbComponent } from './shared/components/bredcrumb/bredcrumb.component';
import { CardComponent } from './shared/components/card/card.component';
import { RegistrationPageComponent } from './shared/pages/registration-page/registration-page.component';
import { CashPageComponent } from './shared/pages/cash-page/cash-page.component';
import { PaymentsPageComponent } from './shared/pages/payments-page/payments-page.component';
import { SettingsPageComponent } from './shared/pages/settings-page/settings-page.component';
import { EmployeesComponent } from './shared/components/employees/employees.component';
import { InsertemployeeComponent } from './shared/components/insertemployee/insertemployee.component';
import { UsersComponent } from './shared/components/users/users.component';
import { SystemComponent } from './shared/components/system/system.component';
import { SmsComponent } from './shared/components/sms/sms.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LoginPageComponent,
    MainLayoutComponent,
    HomePageComponent,
    SidebarComponent,
    BredcrumbComponent,
    CardComponent,
    RegistrationPageComponent,
    CashPageComponent,
    PaymentsPageComponent,
    SettingsPageComponent,
    EmployeesComponent,
    InsertemployeeComponent,
    UsersComponent,
    SystemComponent,
    SmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxAwesomePopupModule.forRoot(),
    ToastNotificationConfigModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RolesComponent } from './components/roles/roles.component';
import { SignupConfrimComponent } from './components/signup-confrim/signup-confrim.component';
import { SignupComponent } from './components/signup/signup.component';
import { SliderComponent } from './components/slider/slider.component';
import { UsersComponent } from './components/users/users.component';
import { AfterloginService } from './services/afterlogin.service';
import { ApiService } from './services/api.service';
import { BeforeloginService } from './services/beforelogin.service';
import { DataService } from './services/data.service';
import { ClassComponent } from './components/class/class.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    UsersComponent,
    SignupConfrimComponent,
    RolesComponent,
    PermissionsComponent,
    AttendanceComponent,
    LocationMapComponent,
    LocationComponent,
    SliderComponent,
    ProfileComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    SnotifyModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [
    ApiService,
    AfterloginService,
    BeforeloginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    DataService,
    SliderComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

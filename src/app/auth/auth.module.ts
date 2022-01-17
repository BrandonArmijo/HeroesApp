import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatGridListModule,
    MaterialModule
  ]
})
export class AuthModule {
}

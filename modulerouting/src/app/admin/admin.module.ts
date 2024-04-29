import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    LoginComponent,
    ListComponent
  ]
})
export class AdminModule { }
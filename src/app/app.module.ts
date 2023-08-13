import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { CustomerrorComponent } from './customerror/customerror.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailComponent,
    StudentComponent,
    LoginComponent,
    CustomerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

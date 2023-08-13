import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { LoginComponent } from './login/login.component';
import { CustomerrorComponent } from './customerror/customerror.component';

const routes: Routes = [

  {
    path:'studentLink', component:StudentComponent
  },
  {
    path:'studentdetailsLink', component: StudentdetailComponent
  },
  {
    path:'Login', component:LoginComponent
  },
  {
    path:'',redirectTo : 'Login', pathMatch:'full'
 },
  {
    path:'**', component:CustomerrorComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

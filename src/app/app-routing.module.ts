import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
     path:'',redirectTo : 'Login', pathMatch:'full'
  },
  {
    path:'studentLink', component:StudentComponent
  },
  {
    path:'studentdetailsLink', component: StudentdetailComponent
  },
  {
    path:'Login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

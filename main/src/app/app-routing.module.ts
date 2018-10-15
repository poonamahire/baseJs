import { StudentComponent } from './role/student.component';
import { TeacherComponent } from './role/teacher.component';
import { FirstloginComponent } from './firstlogin/firstlogin.component';
// import { LoginComponent } from './../../../login/src/app/dashboard/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoleComponent } from './role/role.component';
// import { LoginComponent } from '../../../angularPro/sample/src/app/login/login.component';

const routes: Routes = [
  {path: '',component: FirstloginComponent},
  {path: 'signin',component: MainComponent },
  {path: 'signup',component: RoleComponent},
  {path: 'teacher',component: TeacherComponent},
  {path: 'student',component: StudentComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FirstloginComponent]


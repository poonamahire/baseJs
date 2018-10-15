import { MainModule } from './main/main.module';
import { FirstloginModule } from './firstlogin/firstlogin.module';
// import { FirstloginComponent } from './firstlogin/firstlogin.component';
// import { LoginModule } from './../../../angularPro/sample/src/app/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { TeacherComponent } from './role/teacher.component';
import { StudentComponent } from './role/student.component';
// import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    TeacherComponent,
    StudentComponent,
    // MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FirstloginModule,
  MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

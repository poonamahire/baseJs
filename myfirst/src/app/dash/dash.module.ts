import { SigninModule } from './../signin/signin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { SignupModule } from '../signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    SigninModule,
    SignupModule
  ],
  declarations: [DashComponent]
})
export class DashModule { }

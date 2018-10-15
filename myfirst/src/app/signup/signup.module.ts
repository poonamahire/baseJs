// import { SignupComponent } from './../../../../login/src/app/dashboard/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SignupComponent],
declarations: [SignupComponent]
})
export class SignupModule { }

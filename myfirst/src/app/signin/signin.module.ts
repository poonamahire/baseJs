import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SigninComponent],
  declarations: [SigninComponent]
})
export class SigninModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RemComponent } from './rem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RemComponent],
  exports:[LoginComponent]
})
export class LoginModule { }

import { MainModule } from './../main/main.module';
import { MainComponent } from './../main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstloginComponent } from './firstlogin.component';

@NgModule({
  imports: [
    CommonModule,
    MainModule
  ],
  declarations: [FirstloginComponent]
})
export class FirstloginModule { }

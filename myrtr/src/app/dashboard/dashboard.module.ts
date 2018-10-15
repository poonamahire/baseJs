import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CardModule } from '../card/card.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    CardModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

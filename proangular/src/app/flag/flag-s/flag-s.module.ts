import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagComponent } from '../flag.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlagComponent],
  exports:[FlagComponent]
})
export class FlagSModule { }

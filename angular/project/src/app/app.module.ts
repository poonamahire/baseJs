import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { ViewChildComponent } from './view-child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewContentChildComponent,
    ViewChildComponent,
    FirstComponent,
    SecondComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlagComponent } from './flag/flag.component';
import { ImgComponent } from './img/img.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
// import { ImageDirective } from './img/image.directive';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
    ImgComponent,
    ChatboxComponent,
    // ImageDirective
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

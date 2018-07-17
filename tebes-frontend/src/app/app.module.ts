import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignInSocketService} from "./services/sign-in-socket.service";

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SignInSocketService
  ],
  bootstrap: [SignInComponent]
})
export class AppModule {
}

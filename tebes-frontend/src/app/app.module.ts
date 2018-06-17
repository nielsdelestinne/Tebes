import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SignInComponent} from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SignInComponent]
})
export class AppModule { }

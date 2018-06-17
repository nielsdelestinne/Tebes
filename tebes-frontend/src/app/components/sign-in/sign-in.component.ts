import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/User";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit{

  public user: User;
  private hasEagerlyClickedPlay: boolean;
  private hasClickedPlay: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.user = new User('');
  }

  onPlay(): void {
    if(this.hasValidUsername()) {
      console.log("jup");
      this.hasClickedPlay = true;
    } else {
      this.hasEagerlyClickedPlay = true;
    }
  }

  hasValidUsername(): boolean {
    return this.user.username.trim() != ''
      && this.user.username.trim() != null
      && this.user.username.trim() != undefined;
  }

  hasEagerlyClickedPlayButton(): boolean {
    return this.hasEagerlyClickedPlay;
  }

  hasClickedPlayButton(): boolean {
    return this.hasClickedPlay;
  }
}

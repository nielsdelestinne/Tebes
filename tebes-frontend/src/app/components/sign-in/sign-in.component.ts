import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../domain/User";
import {SignInSocketService} from "../../services/sign-in-socket.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit, OnDestroy{

  public user: User;

  private hasEagerlyClickedPlay: boolean;
  private hasClickedPlay: boolean;
  constructor(private signInService: SignInSocketService) {}

  ngOnInit(): void {
    this.user = new User('');
  }

  ngOnDestroy(): void {
    // Not yet implemented
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

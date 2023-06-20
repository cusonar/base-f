import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isPasswordRevealed = false;

  onClickClean(el: any) {
    el.value = '';
  }

  onClickReveal(password: any) {
    if (this.isPasswordRevealed) {
      password.type = 'password';
    } else {
      password.type = 'input';
    }
    this.isPasswordRevealed = !this.isPasswordRevealed;
  }
}

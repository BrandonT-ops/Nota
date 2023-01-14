import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.css']
})
export class OptionsBarComponent {

  constructor(private auth: AuthService, private router: Router) { }

  onLogout() {
    console.log('a');
    this.auth.SignOut();
  }

}

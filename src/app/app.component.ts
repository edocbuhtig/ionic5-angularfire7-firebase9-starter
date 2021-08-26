import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public auth: AngularFireAuth,
              private router: Router,) {
    this.setApp();
  }

  setApp(){
    this.auth.authState
      .subscribe(
        user => {
          if (user) {
            this.router.navigateByUrl('/home');
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        () => {
          this.router.navigateByUrl('/login');
        }
      );
  }

  


}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
  }

  async login() {

    const { username, password } = this;
    
    try {
      const res = await this.auth.signInWithEmailAndPassword(username, password).then(data => {
        console.log(data);
        this.router.navigateByUrl('/home');
      });
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

}

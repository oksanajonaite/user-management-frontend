import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule], //leidzia naudoti ng model
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';
  email = '';
  phoneNumber = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password, this.email, this.phoneNumber)
      .subscribe({ //penumeruoja observable, kai atsakymas grizta, sekmingas atsakyma issaugo i message
        next: (response) => {
          this.message = response;
        },
        error: (err) => {
          this.message = 'Error: ' + err.message; //error klaidos pranesima issaugo i message
        }
      });
  }

  goToUsers() { //navigacija i usrs puslapi kai paspaudziamas mygtukas
    this.router.navigate(['/users']);
  }
}
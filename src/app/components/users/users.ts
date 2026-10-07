import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {

  ngOnInit() {
    // Kai komponentas užsikraunama - nieko nedarome
    // Vartotojas pats turi įvesti kredencialus
  }

  username = '';
  password = '';
  users: any[] = [];
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  getUsers() {
    this.authService.getUsers(this.username, this.password)
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (err) => {
          this.message = 'Error: ' + err.message;
        }
      });
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  goToAudit() {
    this.router.navigate(['/audit']);
  }
}

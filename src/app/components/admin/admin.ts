import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  username = '';
  password = '';
  targetId = 0;
  newRole = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  changeRole() {
    this.authService.changeRole(this.username, this.password, this.targetId, this.newRole)
      .subscribe({
        next: (response) => {
          this.message = response;
        },
        error: (err) => {
          this.message = 'Error: ' + err.message;
        }
      });
  }

  deleteUser() {
    this.authService.deleteUser(this.username, this.password, this.targetId)
      .subscribe({
        next: (response) => {
          this.message = response;
        },
        error: (err) => {
          this.message = 'Error: ' + err.message;
        }
      });
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

  goToAudit() {
    this.router.navigate(['/audit']);
  }
}

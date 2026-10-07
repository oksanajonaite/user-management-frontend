import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-audit',
  imports: [FormsModule, CommonModule],
  templateUrl: './audit.html',
  styleUrl: './audit.css'
})
export class Audit {

  username = '';
  password = '';
  auditLogs: any[] = [];
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  getAuditLog() {
    this.authService.getAuditLog(this.username, this.password)
      .subscribe({
        next: (data) => {
          this.auditLogs = data;
        },
        error: (err) => {
          this.message = 'Error: ' + err.message;
        }
      });
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }
}

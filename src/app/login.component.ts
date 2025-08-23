// ...existing code...
import { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  screwTheLogin(): void {
    this.authService.login({ email: 'guy@guy.com', password: 'password' }).subscribe({
      next: () => {
        this.success = 'Login successful!';
        this.error = null;
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        this.error = err.error?.message || 'Login failed.';
        this.success = null;
      }
    });
  }
  ngOnInit() {
  document.body.style.background = "url('https://i.pinimg.com/originals/6f/5c/58/6f5c58cbdb45d470fb21054337bbe0a4.gif') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
  }

  ngOnDestroy() {
    document.body.style.background = '';
    document.body.style.backgroundSize = '';
  }
  loginForm: FormGroup;
  error: string | null = null;
  success: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.success = 'Login successful!';
          this.error = null;
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.error = err.error?.message || 'Login failed.';
          this.success = null;
        }
      });
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/home']);
    });
  }
}

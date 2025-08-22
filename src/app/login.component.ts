import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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

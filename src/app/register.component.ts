import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.style.background = "url('https://i.pinimg.com/originals/6f/5c/58/6f5c58cbdb45d470fb21054337bbe0a4.gif') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
  }

  ngOnDestroy() {
    document.body.style.background = '';
    document.body.style.backgroundSize = '';
  }
  registerForm: FormGroup;
  error: string | null = null;
  success: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.success = 'Registration successful!';
          this.error = null;
        },
        error: (err) => {
          this.error = err.error?.message || 'Registration failed.';
          this.success = null;
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  onRegister(registerForm: any): void {
    if (registerForm.valid) {
      this.authService.register(registerForm.value).subscribe({
        next: () => {
          alert('Registration successful!');
          registerForm.resetForm(); // Reset the form after successful submission
        },
        error: (err) => {
          alert(`Registration failed: ${err.error.message || 'Please try again later'}`);
        }
      });
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [provideNgxMask()]
})
export class AppComponent {
  userForm: FormGroup;
  submitted: boolean = false;
  apiResponse: any;
  totalErrors: number = 0;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.strongPasswordValidator]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
    });

    this.userForm.statusChanges.subscribe(() => {
      this.updateErrorCount();
    });
  }

  updateErrorCount() {
    this.totalErrors = Object.keys(this.userForm.controls)
      .filter(key => this.userForm.get(key)?.errors)
      .length;
  }

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    if (!password) {
      return null;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar ? null : { strongPassword: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', this.userForm.value).subscribe({
        next: (response) => {
          this.apiResponse = response;
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    }
  }

  get f() {
    return this.userForm.controls;
  }

}

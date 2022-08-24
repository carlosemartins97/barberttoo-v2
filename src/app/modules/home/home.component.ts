import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true
      this.auth.login(this.loginForm.value).subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['app']);
          this.loading = false
        },
        error: error => {
          console.log(error);
          this.loading = false;
        }
      })
    }

  }

  getForm() {
    return this.loginForm.controls;
  }

}

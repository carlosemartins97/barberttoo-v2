import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.loading = true
      this.auth.login(this.loginForm.value).subscribe({
        next: res => {
          console.log(res);
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

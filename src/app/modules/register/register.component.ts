import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomValidator } from 'src/app/shared/utils/validators/CustomValidator';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidator.validateFullName]),
    cpf: new FormControl('', [CustomValidator.ValidaCpf]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11), CustomValidator.validatePhone]),
    date: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  loading: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  getTodayDate() {
    return new Date().toISOString().split("T")[0];
  }

  getForm() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.loading = true;
      this.auth.register(this.registerForm.value).subscribe({
        next: res => {
          this.loading = false;
          console.log(res);
        },
        error: error => {
          this.loading = false;
          console.log(error)
        }
      })
    }
  }

}

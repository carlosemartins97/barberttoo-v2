import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CustomValidator } from 'src/app/shared/utils/validators/CustomValidator';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  submitted: boolean = false;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    cpf: new FormControl('', [CustomValidator.ValidaCpf]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11), CustomValidator.validatePhone]),
    date: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getTodayDate() {
    return new Date().toISOString().split("T")[0];
  }

  getForm() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.loading = true;
      this.auth.register(this.registerForm.value).subscribe({
        next: res => {
          const login = {
            email: res.ds_Email,
            password: res.cd_Password
          }
          this.auth.login(login).subscribe({
            next: response => {
              this.loading = false;
              this.router.navigate(['app']);
            },
            error: err => {
              console.log(err)
              this.loading = false;
            }
          })
          console.log(res);
        },
        error: error => {
          this.loading = false;
          console.log(error)
          alert('Não foi possível realizar seu cadastro. Tente novamente mais tarde!')
        }
      })
    }
  }

}

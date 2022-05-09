import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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

  constructor() { }

  ngOnInit(): void {
  }

  getTodayDate() {
    return new Date().toISOString().split("T")[0];
  }

  getForm() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.registerForm.valid && console.log('valido');
  }

}

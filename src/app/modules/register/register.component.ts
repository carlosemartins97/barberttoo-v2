import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  registerForm = new FormGroup({
    name: new FormControl(''),
    cpf: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}

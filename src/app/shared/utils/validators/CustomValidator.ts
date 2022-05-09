import { AbstractControl } from "@angular/forms";


export class CustomValidator {

  constructor() {}

  static ValidaCpf(controle: AbstractControl) {
    const cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    ) {
      return {cpfInvalido: true};
    }
    else {
      for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) {resto = 0};
      if (resto != parseInt(cpf.substring(9, 10))) {return {cpfInvalido: true}};

      soma = 0;
      for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }

      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) {resto = 0};
      if (resto != parseInt(cpf.substring(10, 11))) {return {cpfInvalido: true}};
      return null;
    }
  }

  static validateFullName(controle: AbstractControl) {
      const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
      const name = controle.value;
      if(!regName.test(name)){
          return {fullNameInvalid: true};
      } else{
          return null;
      }
  }

  static validatePhone(controle: AbstractControl) {  
    const phone = controle.value;
    const regPhone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    if (!regPhone.test(phone)) {
        return {phoneInvalid: true};
    } else {
        return null;
    }        

  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { CrudService } from 'src/app/core/models/service.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { formatDateForInput, formateHourForAgendamentos } from 'src/app/shared/utils/functions/date';
import { FuncionariosService } from '../../../funcionarios/services/funcionarios.service';
import { ServicosService } from '../../../servicos/services/servicos.service';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-create-agendamento',
  templateUrl: './create-agendamento.component.html',
  styleUrls: ['./create-agendamento.component.scss']
})
export class CreateAgendamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({
    servico: new FormControl('', [Validators.required]),
    funcionario: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required])
  })

  submitted: boolean = false;
  loading: boolean = false;

  servicos: CrudService[] = [];
  funcionarios: AtendenteInterface[] = [];
  atendimentosDoFuncionario: { data: string, hora: string }[] = [];

  minDate: string;
  horarios: string[] = [];


  //icons
  faAngleDown = faAngleDown;

  constructor(private servicosService: ServicosService, private funcionariosService: FuncionariosService, private agendamentoService: AgendamentoService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getServicos();
    this.setMinDate();
    this.generateHorarios();
  }

  getForm() {
    return this.form.controls;
  }

  getServicos() {
    this.servicosService.getServices().then(res => {
      this.servicos = res;
    }).catch(error => {
      console.log(error);
      alert('Erro ao carregar serviços! Tente novamente mais tarde.');
    })
  }

  getFuncionarios() {
    this.funcionariosService.getFuncionarios().then(res => {
      this.funcionarios = res;
    }).catch(error => {
      console.log(error);
      alert('Erro ao carregar funcionários! Tente novamente mais tarde.');
    })
  }

  getAgendamentosFuncionario() {
    const funcId = this.form.controls.funcionario.value;
    this.agendamentoService.getAgendamentosFuncionario(funcId).then(res => {

      this.atendimentosDoFuncionario = res.map(agendamento => {
        return {
          hora: formateHourForAgendamentos(agendamento.dt_Agendamento),
          data: new Date(agendamento.dt_Agendamento).getFullYear() + '-' + (new Date(agendamento.dt_Agendamento).getMonth() + 1) + '-' + new Date(agendamento.dt_Agendamento).getDate()
        }
      });
      console.log(this.atendimentosDoFuncionario);

    }).catch(error => {
      console.log(error);
      alert('Não foi possível completar sua requisição! Tente novamente mais tarde.')
    })
  }

  setMinDate() {
    const date = new Date();
    if (date.getHours() > 18) {
      const rawDay = date.getDate();
      const day = rawDay === 31 ? 1 : rawDay + 1;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      this.minDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    } else {
      this.minDate = formatDateForInput(true, new Date());
    }
  }

  generateHorarios() {
    const date = new Date();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    const horarios = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
      '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

    const disponiveis = horarios.filter(horario => {
      if (Number(horario.substring(0, 2)) > hour) {
        return horario;
      } else if (Number(horario.substring(0, 2)) === hour) {
        if (Number(horario.substring(3)) > Number(minutes) + 15) {
          return horario;
        }
      } return null;
    })

    return disponiveis;
  }

  getHorariosDisponiveis() {
    let listaHoras: any[] = [];
    const data = formatDateForInput(false, this.form.get('date')?.value);
    this.atendimentosDoFuncionario.filter(agendamento => {
      if (data === agendamento.data) {
        listaHoras.push(agendamento.hora)
      }
    })

    const newList = this.generateHorarios().filter(hora => {
      return !listaHoras.includes(hora)
    })
    this.horarios = newList;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.loading = true;
      const id = this.userService.retornaUserId();
      this.agendamentoService.createAgendamento(this.form.value, id).then(res => {
        this.loading = false;
        this.router.navigate(['app/agendamento']);
      }).catch(error => {
        console.log(error);
        this.loading = false;
        alert('Não foi possível completar sua requisição! Tente novamente mais tarde.');
      })
    }
  }

}

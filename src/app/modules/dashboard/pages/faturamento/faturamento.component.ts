import { Component, OnInit } from '@angular/core';
import { getDate, getDay, getMonth, startOfTomorrow, startOfYesterday } from 'date-fns';
import { UserService } from 'src/app/core/services/user/user.service';
import { HistoricoModel } from '../historico/models/historico.model';
import { HistoricoService } from '../historico/services/historico.service';
import { ServicosService } from '../servicos/services/servicos.service';
import { ServicoMaisRealizado } from './models/faturamento.model';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.scss']
})
export class FaturamentoComponent implements OnInit {

  loading: boolean = false;
  agendamentosInMonth: number = 0;
  servicoMaisRealizado: string = 'Nenhum serviço realizado até o momento.';
  historicoMesAtual: any[] = [];
  historicoMesPassado: any[] = [];
  lucroMesPassado: number = 0;
  lucroMesAtual: number = 0;
  lucroDiaAnterior: number = 0;
  lucroDiaAtual: number = 0;
  saldoTotal: number = 0;
  atendimentosTotal: number = 0;

  isADM: boolean;

  constructor(private historicoService: HistoricoService, private servicosService: ServicosService, private userService: UserService) { }

  ngOnInit(): void {
    this.isADM = this.userService.retornaUserRole() === 'ROLE_ADM';

    this.getHistoricoMesAtual();
  }

  getHistoricoMesAtual() {
    this.loading = true;
    this.historicoService.getHistoricoMesAtual().then(res => {
      console.log(res)
      console.log('=============')
      this.historicoMesAtual = res;
      this.agendamentosInMonth = res.length;
      this.lucroMesAtual = this.getLucro(res);
      this.getServicoMaisRealizado(res);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  getServicoMaisRealizado(agendamentos: any[]) {
    const auxArray: ServicoMaisRealizado[] = [];
    agendamentos.forEach(agendamento => {
      const id = agendamento.servico.id!;
      const item = auxArray.filter(item => item.id === id);
      item.length === 0 ? auxArray.push({ id: id, qnt: 1 }) : item.find(item => item.id === id && (item.qnt! += 1));
    })
    console.log(auxArray)
    let maior: any = 0;
    let idMaior: any;
    auxArray.forEach(servico => {
      servico.qnt! > maior && (maior = servico.qnt) && (idMaior = servico.id);
    })

    if (idMaior) {
      this.servicosService.getServiceById(idMaior).then(res => {
        this.servicoMaisRealizado = res.nm_servico;
        this.getHistoricoMesPassado();
      }).catch(error => {
        console.log(error);
        this.loading = false;
      })
    } else {
      this.getHistoricoMesPassado();
    }
  }

  getHistoricoMesPassado() {
    this.loading = true;
    const mesPassado = getMonth(new Date());
    this.historicoService.getHistoricoByDate(0, mesPassado)
      .then(res => {
        this.lucroMesPassado = this.getLucro(res);
        this.getComparacaoEntreDias();
      })
      .catch(error => {
        console.log(error)
        this.loading = false;
      });
  }

  getComparacaoEntreDias() {
    const today = getDate(new Date());
    const yesterday = getDate(new Date(startOfYesterday()));

    let somaDiaAtual = 0;
    let somaDiaAnterior = 0;
    this.historicoMesAtual.forEach(agendamento => {
      //mes atual
      getDate(new Date(agendamento.dt_Realizado)) === today && (somaDiaAtual += agendamento.vl_Pago);

      //mes anterior
      getDate(new Date(agendamento.dt_Realizado)) === yesterday && (somaDiaAnterior += agendamento.vl_Pago);
    })
    this.lucroDiaAnterior = somaDiaAnterior;
    this.lucroDiaAtual = somaDiaAtual;

    this.isADM ? this.getHistoricoTotal() : this.loading = false;
  }

  getHistoricoTotal() {
    this.historicoService.getHistoricoTotal().then(res => {
      this.saldoTotal = this.getLucro(res);
      this.atendimentosTotal = res.length;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      alert('Houve um erro ao completar a requisição do ADM.');
      this.loading = false;
    })
  }



  getLucro(array: any[]) {
    let soma = 0;
    array.forEach(agendamento => {
      soma += agendamento.vl_Pago;
    })
    return soma;
  }

}

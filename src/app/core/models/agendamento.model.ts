import { CrudService } from "./service.model";

export interface Agendamento {
  id: number;
  dt_Agendamento: string;
  funcionario: {
    id: number;
    nm_Funcionario: string;
    ds_Email: string;
    cd_Celular: string;
  };
  servico: CrudService;
  cliente: {
    id: number;
    nm_Cliente: string;
    ds_Email: string;
    cd_Celular: string;
  }
}

export interface AgendamentoCurto {
  funcionario: number;
  servico: number;
  cliente: number;
  dt_Agendamento: string;
}
export interface HistoricoModel {
  id?: number;
  dt_Realizado: string;
  vl_Pago: number;
  ds_Pagamento?: string;
  funcionario: number;
  servico: number;
  cliente: number;
}

export interface HistoricoFuncionario {
  cliente: {
    nm_Cliente: string;
    ds_Email: string;
  };
  dt_Realizado: string;
  servico: {
    nm_servico: string;
  };
  vl_Pago: number;
}
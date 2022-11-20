export interface HistoricoModel {
  id?: number;
  dt_Realizado: string;
  vl_Pago: number;
  ds_Pagamento?: string;
  funcionario: number;
  servico: number;
  cliente: number;
}
export interface Cliente {
  id: number;
  nm_Cliente: string;
  ds_Email: string;
  cd_Cpf: string;
  dt_BirthDate: string;
  cd_Celular: string;
  enabled?: boolean;
  authority?: string;
  cd_Password?: string;
}
export interface AtendenteInterface {
  nm_Funcionario: string;
  ds_Email: string;
  cd_Cpf: string;
  dt_BirthDate: string;
  cd_Celular: string;
  cd_Password?: string;
  ds_Endereco: string;
  ds_Cidade: string;
  sg_Uf: string;
  cd_Cep: string;
  authority: string;
  id: number;
}
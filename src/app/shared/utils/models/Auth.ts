export interface Auth {
  token: string;
  profile: string;
  username: string;
  id: number;
  nome: string;
}

export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  date: string;
  cep?: string;
  uf?: string;
  city?: string;
  address?: string;
  role?: string
}
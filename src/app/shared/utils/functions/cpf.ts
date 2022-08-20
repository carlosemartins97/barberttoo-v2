//retorna cpf sem caracteres especiais
export function formataCpf(cpf: string) {
  return cpf.substring(0, 3) + cpf.substring(4, 7) + cpf.substring(8, 11) + cpf.substring(12, 14);
}
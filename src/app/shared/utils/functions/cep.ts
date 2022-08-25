export function formatCep(cep: string) {
  return cep.substring(0, 5) + '-' + cep.substring(5);
}
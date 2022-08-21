export function formatDateForAgendamentos(date: string) {
  let b = new Date(date)

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return b.getDate() + ' ' + monthNames[b.getMonth()].substring(0, 3) + '.';
}
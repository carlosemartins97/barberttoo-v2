export function formatDateForAgendamentos(date: string) {
  let b = new Date(date)

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return b.getDate() + ' ' + monthNames[b.getMonth()].substring(0, 3) + '.';
}

export function formatDateForInput(generateActualDate: boolean, data: Date) {
  if (generateActualDate) {
    return `${data.getFullYear()}-${data.getMonth() + 1 <= 9 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1}-${data.getDate() <= 9 ? '0' + data.getDate() : data.getDate()}`;
  } else {
    const actualTime = new Date().getTime() + 86400;
    const oldData = new Date(String(data));
    const utc = actualTime + (oldData.getTimezoneOffset() * 60000);
    const newData = new Date(utc + (3600000 * -3));
    return `${newData.getFullYear()}-${newData.getMonth() + 1}-${newData.getDate() <= 31 ? newData.getDate() + 1 : newData.getDate()}`;
  }
}

export function formateHourForAgendamentos(date: string) {
  let min = new Date(date).getMinutes();
  let hour = new Date(date).getHours();

  if (hour <= 9) {
    if (min === 0) {
      return `0${hour}:${min}0`;
    }
    return `0${hour}:${min}`
  } else if (min === 0) {
    return `${hour}:${min}0`;
  }
  return `${hour}:${min}`;
}

export function formatDateAndHour(hour: string, date: string) {
  return `${date + ' ' + hour}:00`;
}
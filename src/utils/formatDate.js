/**
 * Форматирует дату по маске DD.MMM
 * @param {number} date ISO строка времени
 * @returns 
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('ru', {month: 'short', day: '2-digit'}).format(date)
}
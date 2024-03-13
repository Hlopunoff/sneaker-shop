/**
 * Метод форматирует полученное число в нужный формат
 * @param { number } number Число для форматирования
 * @returns { string } Отформатированное число
 */

export const formatNumber = (number, options = {}) => {
  const defaultOptions = {
    showCurrency: false,
    ...options,
  }

  return new Intl.NumberFormat('ru', {
    currencyDisplay: "symbol",
    currency: 'RUB',
    style: defaultOptions.showCurrency ? "currency" : "decimal",
    minimumFractionDigits: 0,
  }).format(number)
}
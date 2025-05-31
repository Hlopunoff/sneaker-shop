export const getCookies = () => {
  return document.cookie.split('; ').reduce((acc, item) => {
    const itemInternal = item.split('=')
    const key = itemInternal[0]
    const value = itemInternal[1]

    acc[key] = value

    return acc
  }, {})
}
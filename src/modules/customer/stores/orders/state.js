export const state = () => {
  return {
    orders: JSON.parse(localStorage.getItem('user'))?.orders ?? [],
  }
}
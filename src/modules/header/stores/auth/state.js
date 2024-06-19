export const state = () => ({
  isAuthorized: false,
  isAuthModalOpened: false,
  activeTab: 'registration',
  user: JSON.parse(localStorage.getItem('user')) || {},
  isLoggedIn: !!localStorage.getItem('user'),
  isPending: false,
})
export const state = () => ({
  isAuthorized: false,
  isAuthModalOpened: false,
  activeTab: 'registration',
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
  isPending: false,
})
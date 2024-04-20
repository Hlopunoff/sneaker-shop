import { useBem } from '@/composables/use'

import { AppHeaderNavMinimizedModal } from '../nav-minimized-modal'

import { useNavStore } from '../../stores'

export default {
  name: 'app-nav-minimized',
  components: {
    AppHeaderNavMinimizedModal,
  },
  setup() {
    const b = useBem('nav-minimized')
    const navStore = useNavStore()

    const onBurgerMenuClick = () => {
      navStore.toggleNavMinimizedModal()
    }

    return {
      b,

      onBurgerMenuClick,
    }
  }
}
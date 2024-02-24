<template>
  <router-view/>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'app',
  components: {
    RouterView,
  }
}
</script>
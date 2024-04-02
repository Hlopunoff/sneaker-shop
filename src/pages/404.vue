<template>
  <main :class="b()">
    <div :class="b('image-wrap')">
      <img src="@/assets/images/not-found_bg.png" alt="Страница не найдена">
    </div>
    <p :class="b('text')">К сожалению такой страницы не существует или адрес введен неверно</p>
    <app-button :class="b('button')" text="На главную" href="/" :full="tillTablet"/>
  </main>
</template>

<script>
import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useBem } from '@/composables/use'
import { BREAKPOINTS } from '@/constants'
import { AppButton } from '@/ui-components/button'

export default {
  name: 'app-not-found-page',
  components: {
    AppButton,
  },
  setup() {
    const b = useBem('app-not-found-page')
    const bp = useBreakpoints(BREAKPOINTS)

    const tillTablet = computed(() => !bp.TABLET.value)

    return {
      b,

      tillTablet
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/base/styles/common';
@use '@/assets/base/styles/bp';
@use '@/assets/base/styles/colors';

$name: 'app-not-found-page';
$block: '.' + $name;

#{$block} {
  flex: 1;
  padding: 0 common.$main-layout-padding-x;
  text-align: center;

  &__image-wrap {
    margin: 0 auto;
    max-width: 585px;
  }

  &__text {
    color: colors.color('typography', 'base-2');
  }

  &__button {
    display: inline-block;
  }

  @include bp.till(bp.$tablet) {
    padding-top: 32px;

    &__text {
      margin-top: 16px;
    }

    &__button {
      margin-top: 32px;
    }
  }

  @include bp.from(bp.$tablet) {
    padding-top: 80px;

    &__text {
      margin-top: 24px;
    }

    &__button {
      margin-top: 40px;
    }
  }
}
</style>
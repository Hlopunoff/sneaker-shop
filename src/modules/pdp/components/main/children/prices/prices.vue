<template>
  <div :class="b()">
    <app-price :class="b('price')" :view="VIEW.CURRENT" :value="current"/>
    <app-price v-if="old" :class="b('price')" :view="VIEW.OLD" :value="old"/>
  </div>
</template>

<script src="./prices.script.js"></script>

<style scoped src="./prices.style.scss" lang="scss"></style>
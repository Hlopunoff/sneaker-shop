<template>
  <div :class="b()">
    <div :class="b('slider')"></div>
    <div :class="b('name')"></div>
    <div :class="b('prices')">
      <div :class="b('price')"></div>
      <div :class="b('price')"></div>
    </div>
  </div>
</template>

<script src="./product-card-skeleton.script.js"></script>

<style scoped src="./product-card-skeleton.style.scss" lang="scss"></style>
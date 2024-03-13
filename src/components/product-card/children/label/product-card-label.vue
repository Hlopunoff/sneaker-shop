<template>
  <span v-if="text" :class="b({ size })" :style="labelStyles">{{ text }}</span>
</template>

<script src="./product-card-label.script.js"></script>

<style scoped src="./product-card-label.style.scss" lang="scss"></style>
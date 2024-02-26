<template>
  <component :is="component" :href="href" :class="b({view, full})">{{ text }}</component>
</template>

<script src="./app-button.script.js"></script>

<style scoped src="./app-button.style.scss" lang="scss"></style>
<template>
  <li :class="b()">
    <router-link :to="path">{{ text }}</router-link>
  </li>
</template>

<script src="./menu-item.script.js"></script>

<style scoped src="./menu-item.style.scss" lang="scss"></style>
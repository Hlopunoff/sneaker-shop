<template>
  <nav :class="b()">
    <router-link :class="b('logo')" to="/">
      <img src="@/assets/icons/logo-main.svg" alt="OG Shop (Go to main page)">
    </router-link>
    <button :class="b('burger')">
      <div :class="b('line')"></div>
      <div :class="b('line')"></div>
      <div :class="b('line')"></div>
    </button>
  </nav>
</template>

<script src="./nav-minimized.script.js"></script>

<style scoped src="./nav-minimized.style.scss" lang="scss"></style>
<template>
  <header :class="b()">
    <app-nav-expanded v-if="fromDesktop"/>
    <app-nav-minimized v-else/>
    <app-header-auth-modal :is-opened="isAuthModalOpened"/>
  </header>
</template>

<script src="./header-main.script.js"></script>

<style scoped src="./header-main.style.scss" lang="scss"></style>
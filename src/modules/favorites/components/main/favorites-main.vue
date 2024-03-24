<template>
  <main :class="b()">
    <app-breadcrumbs :crumbs="matched"/>
    <app-favorites-plp />
  </main>
</template>

<script src="./favorites-main.script.js"></script>

<style scoped src="./favorites-main.style.scss" lang="scss"></style>
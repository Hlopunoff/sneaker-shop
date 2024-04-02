<template>
  <main :class="b()">
    <app-breadcrumbs :class="b('breadcrumbs')" :items="['Главная', 'Кроссовки']"/>
    <app-plp-listing/>
  </main>
</template>

<script src="./plp-main.script.js"></script>

<style scoped src="./plp-main.style.scss" lang="scss"></style>
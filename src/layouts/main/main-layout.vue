<template>
  <div :class="b()">
    <header-main :class="b('header')"/>
    <router-view/>
    <footer>Footer</footer>
  </div>
</template>

<script src="./main-layout.script.js"></script>

<style scoped src="./main-layout.style.scss" lang="scss"></style>
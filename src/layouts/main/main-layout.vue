<template>
  <div :class="b()">
    <header-main :class="b('header')"/>
    <router-view/>
    <app-footer-main :class="b('footer')"/>
    <app-cart-main/>
    <app-location-main/>
  </div>
</template>

<script src="./main-layout.script.js"></script>

<style scoped src="./main-layout.style.scss" lang="scss"></style>
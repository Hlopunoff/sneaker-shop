<template>
  <main :class="b()">
    <app-home-slider :class="b('slider')" :slides="promoSliderData" :autoplay="false"/>
    <app-home-brands/>
  </main>
</template>

<script src="./home-main.script.js"></script>

<style scoped src="./home-main.style.scss" lang="scss"></style>
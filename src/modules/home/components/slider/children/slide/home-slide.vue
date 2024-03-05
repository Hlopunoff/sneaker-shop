<template>
  <div :class="b()">
    <div :class="b('content')"><slot/></div>
    <img :class="b('image')" :src="backgroundImage" alt="Slide picture"/>
  </div>
</template>

<script src="./home-slide.script.js"></script>

<style scoped src="./home-slide.style.scss" lang="scss"></style>
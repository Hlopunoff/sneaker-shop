<template>
  <div :class="b()">
    <header-main :class="b('header')"/>
    <main :class="b('main')">
        <router-view/>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script src="./main-layout.script.js"></script>

<style scoped src="./main-layout.style.scss" lang="scss"></style>
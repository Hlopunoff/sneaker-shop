<template>
  <div :class="b()">
    <header>header</header>
    <main :class="b('main')">
      main
    </main>
    <footer>footer</footer>
  </div>
</template>

<script src="./main-layout.script.js"></script>

<style scoped src="./main-layout.style.scss" lang="scss"></style>
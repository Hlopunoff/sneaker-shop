<template>
  <main :class="b()">
    <h1 :class="b('title')">Заказы</h1>
    <app-customer-orders :class="b('orders')" :orders="orders"/>
  </main>
</template>

<script src="./main.script.js"></script>

<style scoped src="./main.styles.scss" lang="scss"></style>
<template>
  <section :class="b()">
    <h2 :class="b('title')">Избранное</h2>
    <div v-if="hasItems" :class="b('list')">
      <app-product-card v-for="item in items" :key="item.id" :class="b('item')" :product="item"/>
    </div>
    <div v-else :class="b('empty')">
      <h2>Список избранного пуст</h2>
    </div>
  </section>
</template>

<script src="./favorites-plp.script.js"></script>

<style scoped src="./favorites-plp.style.scss" lang="scss"></style>
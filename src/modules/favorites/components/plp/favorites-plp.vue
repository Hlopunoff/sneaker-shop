<template>
  <section :class="b()">
    <h2 :class="b('title')">Избранное</h2>
    <div :class="b('list')">
      <app-product-card v-for="item in wishlistMockListing" :key="item.id" :class="b('item')" :product="item"/>
    </div>
    <app-pagination :class="b('pagination')" :pages-amount="3"/>
  </section>
</template>

<script src="./favorites-plp.script.js"></script>

<style scoped src="./favorites-plp.style.scss" lang="scss"></style>
<template>
  <section :class="b()">
    <h2 :class="b('title')">Кроссовки</h2>
    <app-filters-main :class="b('filters')"/>
    <div :class="b('list')">
      <div v-if="isListingPending">
        Loading...
      </div>
      <template v-else>
        <app-product-card v-for="item in listing" :key="item.id" :class="b('item')" :product="item"/>
      </template>
    </div>
    <app-pagination :class="b('pagination')" :length="4"/>
  </section>
</template>

<script src="./plp-listing.script.js"></script>

<style scoped src="./plp-listring.style.scss" lang="scss"></style>
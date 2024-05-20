<template>
  <section :class="b()">
    <h2 :class="b('title')">Кроссовки</h2>
    <app-filters-main :class="b('filters')"/>
    <div :class="b('list')">
      <template v-if="isListingPending">
        <app-product-card-skeleton v-for="i in 5" :key="i"/>
      </template>
      <template v-else-if="listing.length">
        <app-product-card v-for="item in listing" :key="item.id" :class="b('item')" :product="item"/>
      </template>
      <div v-else :class="b('no-products')">
        <h2 :class="b('title')">К сожалению, по вашему запросу нет результата</h2>
        <app-button :class="b('reset-button')" @click="onResetButtonClick" text="Сбросить фильтры"/>
      </div>
    </div>
  </section>
</template>

<script src="./plp-listing.script.js"></script>

<style scoped src="./plp-listring.style.scss" lang="scss"></style>
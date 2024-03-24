<template>
  <div :class="b()" ref="paginationItemsRef">
    <div v-if="fromTablet" :class="[b('item'), b('arrow')]">
      <app-arrow-double-icon :width="24" :height="24"/>
    </div>
    <div ref="paginationItemRef" :class="[b('item'), b('arrow')]">
      <app-arrow-icon :width="24" :height="24"/>
    </div>
    <ul :class="b('items')">
      <li v-for="i in pagesAmountInternal" :key="i" :class="b('item', {active: i === 3})">
        {{ i }}
      </li>
      <li :class="b('item', {dotted: true})">...</li>
      <li :class="b('item', {last: true})">{{ pagesAmount }}</li>
    </ul>
    <div :class="[b('item'), b('arrow', {reversed: true})]">
      <app-arrow-icon :width="24" :height="24"/>
    </div>
    <div v-if="fromTablet" :class="[b('item'), b('arrow', {reversed: true})]">
      <app-arrow-double-icon :width="24" :height="24"/>
    </div>
  </div>
</template>

<script src="./app-pagination.script.js"></script>

<style scoped src="./app-pagination.style.scss" lang="scss"></style>
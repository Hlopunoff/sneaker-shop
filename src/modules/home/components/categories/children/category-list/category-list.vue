<template>
  <div :class="b()">
    <h2 :class="b('title')">Распродажа одежды и обуви</h2>
    <ul :class="b('list')">
      <app-home-category-item v-for="(item, index) in categoriesInternal" :key="index" v-bind="item"/>
    </ul>
  </div>
</template>

<script src="./category-list.script.js"></script>

<style scoped src="./category-list.style.scss" lang="scss"></style>
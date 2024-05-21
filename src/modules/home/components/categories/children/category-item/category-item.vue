<template>
  <router-link :to="link" :class="b()">
    <h4 :class="b('name')">{{ name }}</h4>
    <span v-if="productMinPrice" :class="b('min-price')">{{ productMinPrice }}</span>
    <p v-if="description" :class="b('description')" v-html="description"></p>
    <button v-if="buttonText" :class="b('button')">{{ buttonText }}</button>
    <div :class="b('image')">
      <img :src="image" :alt="`${name} категория`">
    </div>
  </router-link>
</template>

<script src="./category-item.script.js"></script>

<style scoped src="./category-item.style.scss" lang="scss"></style>
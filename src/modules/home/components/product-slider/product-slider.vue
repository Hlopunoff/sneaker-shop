<template>
  <section :class="b()">
    <header :class="b('header')">
      <h2 :class="b('title')">Популярные</h2>
      <nav :class="b('arrows')">
        <app-slider-arrow-icon :class="b('arrow')" :width="32" :height="32" @click="prevSlide"/>
        <app-slider-arrow-icon :class="b('arrow')" :width="32" :height="32" reversed @click="nextSlide"/>
      </nav>
    </header>
    <div :class="b('wrap')">
      <ul :class="b('products')" :style="{transform: `translateX(${-Math.floor(currentSlideIndex / sliderColumns) * 100}%)`}">
        <app-product-card v-for="item in slides" :key="item.id" :class="b('product')" :product="item"/>
      </ul>
    </div>
  </section>
</template>

<script src="./product-slider.script.js"></script>

<style scoped src="./product-slider.style.scss" lang="scss"></style>
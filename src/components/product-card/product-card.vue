<template>
  <router-link :class="b()" :to="`/product/${product.id}`">
    <div :class="b('slider-wrap')">
      <ul :class="b('slider')" :style="{transform: `translateX(${-currentSlideIndex * 100}%)`}">
        <li v-for="(image, index) in product.images" :key="index" :class="b('slider-item')">
          <img :src="image" alt="Product image slide">
        </li>
      </ul>
      <app-product-card-label :class="b('label')" :size="labelSize" v-bind="product.badge"/>
      <div :class="b('cta')">
        <app-heart-icon :class="b('heart-icon', {active: isAddedToWishlist})" :width="32" :height="32" @click.prevent="toggleWishlist"/>
      </div>
      <!-- <ul :class="b('dots')">
        <li v-for="(_, index) in product.images" :key="index" :class="b('dot', {active: currentSlideIndex === index})" @click="onSliderDotClick(index)"></li>
      </ul> -->
    </div>
    <div :class="b('product-info')">
      <h4 :class="b('name')">{{ product.name }}</h4>
      <div :class="b('prices')">
        <span :class="b('price', {current: true})">{{ currentCurrencyFormatted }}</span>
        <span v-if="product.prices.old" :class="b('price', {old: true})">{{ oldCurrencyFormatted }}</span>
        <span v-if="product.discount" :class="b('discount')">-{{ product.discount }}%</span>
      </div>
    </div>
  </router-link>
</template>

<script src="./product-card.script.js"></script>

<style scoped src="./product-card.style.scss" lang="scss"></style>
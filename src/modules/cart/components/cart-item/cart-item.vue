<template>
  <div :class="b()">
    <div :class="b('wrapper')">
      <div :class="b('image-wrap')">
        <img :src="imageUrl" :alt="name"/>
      </div>
      <div :class="b('info')">
        <h4 :class="b('name')">{{ name }}</h4>
        <span :class="b('attribute')">Размер {{ size }}</span>
        <span :class="b('attribute')">Цвет <div :class="b('color')" :style="{backgroundColor: color}"></div></span>
      </div>
      <div :class="b('control')">
        <button :class="b('action', {decrement: true})" @click="decrement">—</button>
        <span :class="b('amount')">{{ amount }}</span>
        <button :class="b('action', {increment: true})" @click="increment">+</button>
      </div>
      <div :class="b('cta')">
        <div :class="b('prices')">
          <app-price :class="b('price', {current: true})" :value="currentPrice"/>
          <app-price v-if="oldPrice" :class="b('price', {old: true})" :view="PRICE_VIEW.OLD" :value="oldPrice"/>
        </div>
        <app-button :class="b('delete-button')" :view="BUTTON_VIEW.THIRD" text="Удалить" @click="removeItem"/>
      </div>
    </div>
  </div>
</template>

<script src="./cart-item.script.js"></script>

<style scoped src="./cart-item.style.scss" lang="scss"></style>
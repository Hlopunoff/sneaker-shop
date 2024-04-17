<template>
  <main :class="b()">
    <app-pdp-gallery :class="b('gallery')" :view="galleryView" :slides="mockProduct.gallery"/>
    <div :class="b('section')">
      <h2 :class="b('name')">{{ mockProduct.name }}</h2>
      <app-pdp-prices :class="b('prices')" :current="mockProduct.prices.current" :old="mockProduct.prices.old"/>
      <app-pdp-attributes v-for="(attributes, index) in mockProduct.configuration" :key="index" :class="b('attributes')" v-bind="attributes"/>
      <app-button :class="b('button')" text="Добавить в корзину" full/>
      <div :class="b('info-list')">
        <app-pdp-info v-for="(item, index) in mockProduct.productInfo" :key="index" :class="b('info')" :title="item.title">
          <app-pdp-info-item :view="getInfoItemView(item)" :details="item.details"/>
        </app-pdp-info>
      </div>
    </div>
  </main>
  <app-home-product-slider/>
</template>

<script src="./main.script.js"></script>

<style scoped src="./main.style.scss" lang="scss"></style>
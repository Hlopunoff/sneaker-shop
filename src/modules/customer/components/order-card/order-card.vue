<template>
  <router-link :to="`/profile/order/${orderId}`" :class="b()">
    <h2 :class="b('id')">{{ orderId }}</h2>
    <ul :class="b('images')">
      <li v-for="(image, i) in images" :key="i" :class="b('image-wrap')">
        <img :class="b('image')" :src="image" alt="product img"/>
      </li>
    </ul>
    <div :class="b('info')">
      <span :class="b('amount')">состав / {{ itemsAmount }} шт.</span>
      <span :class="b('delivery-date')">{{ deliveryDateFormatted }}</span>
      <span :class="b('address')">{{ address }}</span>
      <app-price :class="b('total')" :value="total"/>
    </div>
  </router-link>
</template>

<script src="./order-card.script.js"></script>

<style scoped src="./order-card.style.scss" lang="scss"></style>
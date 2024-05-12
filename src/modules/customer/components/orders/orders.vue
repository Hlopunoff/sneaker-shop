<template>
  <div :class="b()">
    <app-customer-order-card 
      v-for="(order) in ordersInternal" 
      :key="order.orderId"
      :class="b('order')"
      v-bind="order"/>
  </div>
</template>

<script src="./orders.script.js"></script>

<style scoped src="./orders.style.scss" lang="scss"></style>
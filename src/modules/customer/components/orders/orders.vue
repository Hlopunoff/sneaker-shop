<template>
  <div :class="b()">
    <template v-if="hasOrders">
      <app-customer-order-card 
      v-for="(order) in orders" 
      :key="order.orderId"
      :class="b('order')"
      v-bind="order"/>
    </template>
    <div v-else :class="b('empty')">
      <h2>Список заказов пуст</h2>
    </div>
  </div>
</template>

<script src="./orders.script.js"></script>

<style scoped src="./orders.style.scss" lang="scss"></style>
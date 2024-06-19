<template>
  <main :class="b()">
    <h1 :class="b('title')">Заказы</h1>
    <app-customer-orders :class="b('orders')" :orders="orders"/>
    <app-button v-if="fromDesktopSmall" :class="b('logout-button')" text="Выйти из профиля" @click="onLogoutButtonClick" :disabled="isLogoutButtonDisabled"/>
  </main>
</template>

<script src="./main.script.js"></script>

<style scoped src="./main.styles.scss" lang="scss"></style>
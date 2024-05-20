<template>
  <Teleport to="body">
    <div v-if="isModalOpened" :class="b()" @click.self="onOverlayClick">
      <div v-if="isCartEmpty" :class="b('wrapper')">
        <div :class="b('image-wrap-empty')">
          <img src="../../assets/img/cart.png" alt="cart image"/>
        </div>
        <h3 :class="b('title')">ваша корзина пуста</h3>
        <span :class="b('subtitle')">Выберите нужный вам товар и добавьте его в корзину.</span>
        <app-button :class="b('redirect-button')" text="К покупкам" @click="redirectToCatalog"/>
      </div>
      <div v-else :class="b('wrapper')">
        <ul :class="b('list')">
          <app-cart-item
          v-for="item in cartItems" 
          :key="item.id" 
          :class="b('item')"
          v-bind="item"/>
        </ul>
        <div :class="b('submit-button')">
          <app-button @click="onCreateButtonCLick" full text="Оформить заказ"/>
        </div>
      </div>
      <button :class="b('close-btn')" @click="onCloseButtonClick">&#10060;</button>
    </div>
  </Teleport>
</template>

<script src="./modal.script.js"></script>

<style scoped src="./modal.style.scss" lang="scss"></style>
<template>
  <Teleport to="body">
    <div v-if="isModalOpened" :class="b('overlay')" @click.self="onModalClose">
      <div :class="b('modal')">
        <h2 :class="b('title')">Введите адрес доставки</h2>
        <app-combobox 
        :class="b('address')"
        label="Адрес"
        :items="suggestions"
        v-model="address"
        @input="enterDeliveryAddress($event.target.value)"/>
        <app-button text="Выбрать адрес" :class="b('apply-button')" full @click="onApplyButtonClick"/>
        <button :class="b('close-button')" @click="onModalClose">&#10060;</button>
      </div>
    </div>
  </Teleport>
</template>

<script src="./modal.script.js"></script>

<style scoped src="./modal.style.scss" lang="scss"></style>
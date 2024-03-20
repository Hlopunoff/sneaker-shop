<template>
  <section :class="b()">
    <form :class="b('form')">
      <h3 :class="b('title')">Подпишись на рассылку</h3>
      <h5 :class="b('subtitle')">Чтобы всегда быть в курсе интересного</h5>
      <app-input :class="b('input')" type="email" placeholder="Ваш email"/>
      <app-button :class="b('button')" text="Подписаться" :view="submitButtonView" full/>
      <p :class="b('policy')"><app-input :class="b('checkbox')" type="checkbox"/>Я согласен с политикой обработки и политикой конфиденциальности</p>
    </form>
  </section>
</template>

<script src="./home-cta.script.js"></script>

<style scoped src="./home-cta-style.scss" lang="scss"></style>
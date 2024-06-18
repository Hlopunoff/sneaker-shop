<template>
  <nav :class="b('nav-top')">
    <router-link :class="b('logo')" to="/">
      <img src="@/assets/icons/logo-main.svg" alt="OG Style (Go to main page)"/>
    </router-link>

    <ul :class="b('info-links')">
      <li :class="b('info-link')">
        <router-link to="/purchases">Оплата и доставка</router-link>
      </li>
      <li :class="b('info-link')">
        <router-link to="/returns">Обмен и возврат</router-link>
      </li>
      <li :class="b('info-link')">
        <router-link to="/about">О компании</router-link>
      </li>
      <li :class="b('info-link')">
        <router-link to="/contacts">Контакты</router-link>
      </li>
      <li :class="b('info-link')">
        <router-link to="/proofs">Оригинал 100%</router-link>
      </li>
    </ul>

    <ul :class="b('social-links')">
      <li :class="b('social-link')">
        <a href="mailto:order@ogstyle.ru">
          <img src="@/assets/icons/mail.svg"/>
        </a>
      </li>
      <li :class="b('social-link')">
        <a href="tel:+79020416339">
          <img src="@/assets/icons/phone.svg"/>
        </a>
      </li>
    </ul>
  </nav>
  <nav :class="b('nav-bottom')">
    <ul :class="b('category-list')">
      <li :class="b('category')">
        <router-link to="/catalog/category/running">Беговые</router-link>
      </li>
      <li :class="b('category')">
        <router-link to="/catalog/category/basketball">Баскетбол</router-link>
      </li>
      <li :class="b('category')">
        <router-link to="/catalog/category/football">Футбол</router-link>
      </li>
      <li :class="b('category')">
        <router-link to="/catalog/category/tennis">Теннис</router-link>
      </li>
      <li :class="b('category')">
        <router-link to="/catalog/category/volleyball">Волейбол</router-link>
      </li>
    </ul>

    <ul :class="b('cta')">
      <li :class="b('cta-item')">
        <router-link to="/wishlist">
          <app-heart-icon :width="32" :height="32"/>
        </router-link>
      </li>
      <li :class="b('cta-item')">
        <router-link to="/profile/orders">
          <app-user-icon :width="32" :height="32"/>
        </router-link>
      </li>
      <li :class="b('cta-item')" @click="onCartModalToggle">
          <app-cart-icon :width="32" :height="32"/>
          <div v-if="totalCartAmount" :class="b('badge')">{{ totalCartAmount }}</div>
      </li>
    </ul>
  </nav>
</template>

<script src="./nav-expanded.script.js"></script>

<style scoped src="./nav-expanded.style.scss" lang="scss"></style>
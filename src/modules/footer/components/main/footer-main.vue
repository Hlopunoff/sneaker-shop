<template>
  <footer :class="b()">
    <div :class="b('content')">
      <div :class="b('col')">
        <router-link :class="b('logo')" to="/">
          <img src="@/assets/icons/logo-main.svg" alt="Footer logo"/>
        </router-link>
        <p :class="b('description')">OGstyle - магазин по продаже оригинальной одежды и обуви мировых брендов</p>
        <a :class="b('phone')" href="tel:+79020416339">+7 (902) 041-63-39</a>
        <a :class="b('mail')" href="mailto:order@ogstyle.ru">order@ogstyle.ru</a>
        <ul :class="b('socials')">
          <li :class="b('social')">
            <a>
              <img src="@/assets/icons/whatsapp.svg" alt="whatsapp social"/>
            </a>
          </li>
          <li :class="b('social')">
            <a>
              <img src="@/assets/icons/telegram.svg" alt="telegram social"/>
            </a>
          </li>
        </ul>
      </div>
      <div :class="b('col')">
        <app-footer-menu-list :class="b('menu-list')">
          <app-footer-menu-item v-for="(item, i) in catalogItems" :key="i" :class="b('menu-item')" v-bind="item"/>
        </app-footer-menu-list>
        <app-footer-menu-list :class="b('menu-list')">
          <app-footer-menu-item v-for="(item, i) in sectionSecondaryItems" :key="i" :class="b('menu-item')" v-bind="item"/>
        </app-footer-menu-list>
        <app-footer-menu-list :class="b('menu-list')">
          <app-footer-menu-item v-for="(item, i) in sectionMainItems" :key="i" :class="b('menu-item')" v-bind="item"/>
        </app-footer-menu-list>
      </div>
    </div>
  </footer>
</template>

<script src="./footer-main.script.js"></script>

<style scoped src="./footer-main.style.scss" lang="scss"></style>
<template>
  <Teleport to="body">
    <div v-if="isModalOpened" :class="b('overlay')" @click.self="closeMenu">
      <div :class="b('wrapper')">
        <nav :class="b('nav')">
          <h5 :class="b('nav-section')">Разделы</h5>
          <router-link 
          :class="b('nav-item')" 
          to="/wishlist" 
          @click="onNavItemClick">
            Избранное
          </router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/profile/orders" 
          @click="onNavItemClick">Профиль</router-link>
          <span 
          :class="b('nav-item')" 
          @click="onNavItemClick('cart')">Корзина</span>
        </nav>
        <nav :class="b('nav')">
          <h5 :class="b('nav-section')">Каталог</h5>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/running"
          @click="onNavItemClick">Беговые</router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/basketball"
          @click="onNavItemClick">Баскетбол</router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/football"
          @click="onNavItemClick">Футбол</router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/tennis"
          @click="onNavItemClick">Теннис</router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/volleyball"
          @click="onNavItemClick">Волейбол</router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/sneakers"
          @click="onNavItemClick">Кеды</router-link>
          <router-link 
          :class="b('nav-item')" 
          to="/catalog/category/trainers"
          @click="onNavItemClick">Кроссовки</router-link>
        </nav>
        <app-button v-if="isLoggedIn" :class="b('logout-button')" text="Выйти из профиля" @click="onSignOutClick"/>
        <button :class="b('button-close')" @click="closeMenu">&#10060;</button>
      </div>
    </div>
  </Teleport>
</template>

<script src="./nav-minimized-modal.script.js"></script>

<style scoped src="./nav-minimized-modal.style.scss" lang=scss></style>
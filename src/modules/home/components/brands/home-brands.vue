<template>
  <div :class="b()">
    <ul :class="b('brands')">
      <li :class="b('item')">
        <app-nike-icon :width="110" :height="58"/>
      </li>
      <li :class="b('item')">
        <app-north-face-icon :width="120" :height="54"/>
      </li>
      <li :class="b('item')">
        <app-adidas-icon :width="91" :height="61"/>
      </li>
      <li :class="b('item')">
        <app-puma-icon :width="108" :height="58"/>
      </li>
      <li :class="b('item')">
        <app-new-balance-icon :width="123" :height="57"/>
      </li>
      <li :class="b('item')">
        <app-jordan-icon :width="40" :height="40"/>
      </li>
    </ul>
  </div>
</template>

<script src="./home-brands.script.js"></script>

<style scoped src="./home-brands.style.scss" lang="scss"></style>
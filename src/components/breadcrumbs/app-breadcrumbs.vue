<template>
  <nav :class="b()">
    <ul :class="b('items')">
      <li :class="b('item')">
        <router-link :to="crumbs[0].path">{{ crumbs[0].name }}</router-link>
      </li>
      <template v-for="(item, index) in crumbsInternal" :key="index">
        <li :class="b('divider')">/</li>
        <li :class="b('item', {active: index === crumbsInternal.length - 1})">
          <component :is="index === crumbsInternal.length - 1 ? 'span' : 'router-link'" :to="item.path">{{ item.name }}</component>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script src="./app-breadcrumbs.script.js"></script>

<style scoped src="./app-breadcrumbs.style.scss" lang="scss"></style>
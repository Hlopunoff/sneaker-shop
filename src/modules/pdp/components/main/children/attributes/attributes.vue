<template>
  <div :class=b()>
    <h5 :class="b('title')">{{ title }}</h5>
    <ul :class="b('list')">
      <li 
      v-for="(attr, index) in values" 
      :key="index" 
      :class="b('item', itemMods)" 
      :style="{backgroundColor: attr.color}">{{ type === 'size' ? attr.value : null }}</li>
    </ul>
  </div>
</template>

<script src="./attributes.script.js"></script>

<style scoped src="./attributes.style.scss" lang="scss"></style>
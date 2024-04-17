<template>
  <div :class=b()>
    <div v-if="isTableView" :class="b('table')">
      <div v-for="(details, index) in details" :key="index" :class="b('row')">
        <span :class="b('row-title')">{{ details.title }}</span>
        <span :class="b('row-text')">{{ details.info }}</span>
      </div>
    </div>
    <div v-else :class="b('text')">{{ details }}</div>
  </div>
</template>

<script src="./info-item.script.js"></script>

<style scoped src="./info-item.style.scss" lang="scss"></style>
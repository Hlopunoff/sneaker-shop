<template>
  <div :class="b(accordionMods)">
    <div :class="b('header')" @click="onAccordionClick">
      <h3 :class="b('title')">{{ title }}</h3>
      <app-arrow-icon :class="b('icon')" :width="24" :height="24"/>
    </div>
    <div :class="b('content')"><slot/></div>
  </div>
</template>

<script src="./info.script.js"></script>

<style scoped src="./info.style.scss" lang="scss"></style>
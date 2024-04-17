<template>
  <div :class="b()">
    <div v-if="isExpanded" :class="b('wrap', {expanded: isExpanded})">
      <div :class="b('image-wrap')" v-for="(slide, index) in slides" :key="index">
        <img :class="b('image')" :src="slide" alt="slide 1"/>
      </div>
    </div>
    <div v-else :class="b('wrap', {minimized: !isExpanded})">
      <div :class="b('wrap-sections')">
        <div v-for="(_, index) in slides" :key="index" :class="b('wrap-section')" :style="{width: minimizedSectionSize}" @mouseover="onImageHover(index)"></div>
      </div>
      <div :class="b('image-wrap')">
        <img :class="b('image')" :src="slides[activeImageIndex]" alt="some alt text"/>
      </div>
    </div>
  </div>
</template>

<script src="./gallery.script.js"></script>

<style scoped src="./gallery.style.scss" lang="scss"></style>
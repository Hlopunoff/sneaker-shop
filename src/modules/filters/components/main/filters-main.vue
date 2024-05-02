<template>
  <section :class="b()">
    <app-filters-autocomplete
      label="Размер"
      variant="underlined"
      :items="filters.sizes"
      :flat="true"
      v-model="sizeFilter"
    />
    <app-filters-autocomplete
      label="Бренд"
      variant="underlined"
      :items="filters.brands"
      v-model="brandFilter"
    />
    <app-filters-autocomplete
      label="Цвет"
      variant="underlined"
      :items="filters.colors"
      v-model="colorFilter"
    />
  </section>
</template>

<script src="./filters-main.script.js"></script>

<style scoped src="./filters-main.style.scss" lang="scss"></style>

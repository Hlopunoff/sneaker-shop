<template>
  <section :class="b()">
    <app-filters-autocomplete
      label="Размер"
      variant="underlined"
      :items="[37, 38, 39, 40, 44]"
      :flat="true"
    />
    <app-filters-autocomplete
      label="Бренд"
      variant="underlined"
      :items="[37, 38, 39, 40, 44]"
    />
    <app-filters-autocomplete
      label="Цвет"
      variant="underlined"
      :items="[37, 38, 39, 40, 44]"
    />
  </section>
</template>

<script src="./filters-main.script.js"></script>

<style scoped src="./filters-main.style.scss" lang="scss"></style>

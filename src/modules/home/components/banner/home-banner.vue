<template>
  <section :class="b()">
    <div :class="b('content')">
      <div :class="b('image-wrap')">
        <img :class="b('image')" src="@/modules/home/assets/imgs/banner-bg-image.png" alt="Честный знак"/>
      </div>
      <p :class="b('text')">
        Совершая покупки в OGstyle, <strong>вы приобретаете оригинальный и сертифицированный товар.</strong> Вся продукция промаркирована в соответствии 
        с законодательством и может быть идентифицирована в системе Честный ЗНАК.
      </p>
    </div>
  </section>
</template>

<script src="./home-banner.script.js"></script>

<style scoped src="./home-banner.style.scss" lang="scss"></style>
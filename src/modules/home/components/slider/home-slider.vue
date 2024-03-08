<template>
  <section :class="b()">
      <div :class="b('wrapper')">
        <div :class="b('slider')" :style="{transform: `translateX(-${100 * currentSlideIndex}%)`}">
          <app-home-slide v-for="slide in slides" :key="slide.id" :class="b('slide')" :background-image="slide.image">
            <h2 :class="b('title')">{{ slide.title }}</h2>
            <p :class="b('text')">{{ slide.text }}</p>
            <app-button :class="b('button')" text="Подробнее" :view="slideButtonView"/>
          </app-home-slide>
        </div>
        <nav :class="b('cta')">
            <app-slider-arrow-icon v-if="showSliderArrows" :width="32" :height="32" fill="#fff" @click="prevSlide"/>
            <ul :class="b('dots')">
              <li 
                v-for="(slide, index) in slides" 
                :key="slide.id" 
                :class="b('dot', { active: index === currentSlideIndex })"
                @click="onDotClick(index)"></li>
            </ul>
            <app-slider-arrow-icon v-if="showSliderArrows" :width="32" :height="32" fill="#fff" reversed @click="nextSlide"/>
          </nav>
      </div>
  </section>
</template>

<script src="./home-slider.script.js"></script>

<style scoped src="./home-slider.style.scss" lang="scss"></style>
<template>
  <header
    id="carouselSlider"
    class="masthead text-center text-white d-flex carousel slide"
    data-ride="carousel"
  >
    <b-carousel id="carouselHeaderSlider" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide v-for="slider in headerSliders" :key="slider.id" :img-src="slider.image"></b-carousel-slide>
    </b-carousel>
  </header>
</template>

<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      headerSliders: [
        {
          id: 1,
          image: "assets/img/slider/slider-01.jpg"
        },
        {
          id: 2,
          image: "assets/img/slider/slider-02.jpg"
        },
        {
          id: 3,
          image: "assets/img/slider/slider-03.jpg"
        },
        {
          id: 4,
          image: "assets/img/slider/slider-04.jpg"
        },
        {
          id: 5,
          image: "assets/img/slider/slider-05.jpg"
        }
      ]
    };
  }
};
</script>
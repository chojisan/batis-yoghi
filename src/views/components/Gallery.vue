<template>
  <section id="gallery" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 text-center" data-aos="zoom-in">
          <h2 class="site text-uppercase">Gallery</h2>
          <h3 class="section-subheading text-muted">sub header</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 gallery mb-3" v-for="image in images" v-bind:key="image.id">
          <div class="gallery-item">
            <a :href="image.big_image" data-fancybox="gallery" class="gallery-popup">
              <img :src="image.big_image" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          alt: "",
          small_image: "assets/img/gallery/1.jpg",
          big_image: "assets/img/gallery/1.jpg"
        },
        {
          id: 2,
          alt: "",
          small_image: "assets/img/gallery/1.jpg",
          big_image: "assets/img/gallery/1.jpg"
        },
        {
          id: 3,
          alt: "",
          small_image: "/assets/img/gallery/1.jpg",
          big_image: "/assets/img/gallery/1.jpg"
        },
        {
          id: 4,
          alt: "",
          small_image: "/assets/img/gallery/1.jpg",
          big_image: "/assets/img/gallery/1.jpg"
        },
        {
          id: 5,
          alt: "",
          small_image: "/assets/img/gallery/1.jpg",
          big_image: "/assets/img/gallery/1.jpg"
        },
        {
          id: 6,
          alt: "",
          small_image: "/assets/img/gallery/1.jpg",
          big_image: "/assets/img/gallery/1.jpg"
        },
        {
          id: 7,
          alt: "",
          small_image: "/assets/img/gallery/1.jpg",
          big_image: "/assets/img/gallery/1.jpg"
        },
        {
          id: 8,
          alt: "",
          small_image: "/assets/img/gallery/1.jpg",
          big_image: "/assets/img/gallery/1.jpg"
        }
      ]
    };
  }
};
</script>
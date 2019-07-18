<template>
  <div class="wrapper">
    <header-nav></header-nav>
    <header-slider></header-slider>
    <about></about>
    <activities></activities>
    <gallery></gallery>
    <officers></officers>
    <contact-us></contact-us>
    <site-footer></site-footer>
  </div>
</template>

<script>
import HeaderNav from "@/views/components/HeaderNav";
import HeaderSlider from "@/views/components/HeaderSlider";
import About from "@/views/components/About";
import Activities from "@/views/components/Activities";
import Gallery from "@/views/components/Gallery";
import Officers from "@/views/components/Officers";
import ContactUs from "@/views/components/ContactUs";
import SiteFooter from "@/views/components/Footer";

export default {
  name: "landing",
  components: {
    HeaderNav,
    HeaderSlider,
    About,
    Activities,
    Gallery,
    Officers,
    ContactUs,
    SiteFooter
  }
};
</script>
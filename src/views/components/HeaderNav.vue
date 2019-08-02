<template>
  <base-nav
    class="navbar-mainnavbar-top navbar-horizontal navbar-dark fixed-top py-2"
    containerClasses="container"
    type
    effect="light"
    expand
  >
    <router-link slot="brand" class="navbar-brand" to="/">
      <img src="@/assets/img/logo/yoghi.png" />
    </router-link>

    <div class="row" slot="content-header" slot-scope="{closeMenu}">
      <div class="col-6 collapse-brand">
        <a href="#">
          <img src="@/assets/img/logo/yoghi.png" />
        </a>
      </div>
      <div class="col-6 collapse-close">
        <close-button @click="closeMenu"></close-button>
      </div>
    </div>

    <ul class="nav navbar-nav navbar-nav-hover align-items-lg-center ml-auto">
      <li class="nav-item px-2">
        <router-link to="/" class="nav-link">HOME</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#about-us" class="nav-link">ABOUT US</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#programs-and-activities" class="nav-link">PROGRAMS &amp; ACTIVITIES</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#gallery" class="nav-link">GALLERY</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#officers" class="nav-link">OFFICERS</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#contact" class="nav-link">CONTACT</router-link>
      </li>
    </ul>
  </base-nav>
</template>

<script>
import CloseButton from "@/components/bootstrap/CloseButton";

export default {
  name: "navigation",
  components: {
    CloseButton
  }
};
</script>
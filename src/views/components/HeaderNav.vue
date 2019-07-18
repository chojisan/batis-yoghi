<template>
  <base-nav
    class="navbar-top navbar-horizontal navbar-dark fixed-top"
    containerClasses="px-4 container"
    expand
  >
    <router-link slot="brand" class="navbar-brand" to="/">
      <img src="@/assets/img/logo/yoghi.png" class="img-logo" />
    </router-link>

    <ul class="nav ml-auto">
      <li class="nav-item px-2">
        <router-link to="/" class="nav-link">HOME</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#about-us" class="nav-link">ABOUT US</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#what-we-do" class="nav-link">PROGRAMS &amp; ACTIVITIES</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#activities" class="nav-link">GALLERY</router-link>
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
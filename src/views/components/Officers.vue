<template>
  <section id="officers" class="py-5 bg-secondary">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 text-center" data-aos="zoom-in">
          <h2 class="site text-uppercase">OUR OFFICERS</h2>
          <h3 class="section-subheading text-muted">List of Elected Officers</h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          data-aos="fade-up"
          data-aos-delay="150"
          v-for="officer in officers"
          v-bind:key="officer.id"
        >
          <div class="team-member">
            <img class="mx-auto rounded-circle" :src="officer.profile_picture" alt />
            <h4>{{officer.full_name}}</h4>
            <p class="text-muted">{{officer.postion}}</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item" v-if="officer.twitter">
                <a :href="officer.twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item" v-if="officer.facebook">
                <a :href="officer.facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item" v-if="officer.linkedin">
                <a :href="officer.linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
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
      officers: [
        {
          id: 1,
          full_name: "Juan Dela Cruz",
          postion: "President",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 1
        },
        {
          id: 2,
          full_name: "Juan Dela Cruz",
          postion: "Secretary",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 2
        },
        {
          id: 3,
          full_name: "Juan Dela Cruz",
          postion: "Treasurer",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 3
        },
        {
          id: 4,
          full_name: "Juan Dela Cruz",
          postion: "Auditor",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 4
        },
        {
          id: 5,
          full_name: "Juan Dela Cruz",
          postion: "Networking and Advocacy",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 5
        },
        {
          id: 6,
          full_name: "Juan Dela Cruz",
          postion: "Education and Training",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 6
        },
        {
          id: 7,
          full_name: "Juan Dela Cruz",
          postion: "Social Enterprise",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 7
        },
        {
          id: 8,
          full_name: "Juan Dela Cruz",
          postion: "Membership and Organizing",
          profile_picture: "assets/img/officers/profile.jpg",
          facebook: "",
          twitter: "",
          linkedin: "",
          order: 8
        }
      ]
    };
  }
};
</script>
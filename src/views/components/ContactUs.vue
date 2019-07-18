<template>
  <section id="contact" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 text-center" data-aos="zoom-in">
          <h3
            class="section-subheading text-muted"
          >"The Empowered Women is Powerful Beyond Measure and Beautiful Beyond Description"</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4" data-aos="fade-up" data-aos-delay="150">
          <div class="contact-about">
            <h3>Batis AWARE</h3>
            <p>An organization of Filipino migrant women who have experienced labor rights violation and exploitation in their place of work. It also looks into the plight of previous entertainers, who have been abuse and abandoned by their Japanese husbands., and other Filipino women migrants who are victims of trafficking in other countries.</p>
            <div class="social-links">
              <a href="https://www.facebook.com/BATISAWARE96/" target="_blank" class="facebook">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
          <div class="info">
            <div>
              <i class="fab fa-map-marked-alt"></i>
              <p>
                #54 K9th St. West kamias,
                <br />Quezon City, Philippines
              </p>
            </div>

            <div>
              <i class="fab fa-envelope"></i>
              <p>batisaware`at`yahoo.com.ph</p>
            </div>

            <div>
              <i class="fab fa-phone"></i>
              <p>(632) 709-7481</p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-8" data-aos="fade-up" data-aos-delay="450">
          <div class="form">
            <div id="form-messages" class></div>
            <form
              action="mailer.php"
              method="post"
              role="form"
              class="contactForm"
              id="ajax-contact"
            >
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    required
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-lg-6">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    required
                  />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                  rquired
                />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                  required
                ></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center">
                <button type="submit" title="Send Message">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
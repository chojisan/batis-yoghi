<template>
  <footer id="footer" class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-lg-left text-center">
          <div class="copyright">
            &copy; {{year}} Copyright
            <strong>Batis YOGHI - Youth Organization that Gives Hope and Inspiration</strong>. All Rights Reserved
          </div>
          <div class="credits">
            Powered by
            <a href="https://takada.tech">Takada Teknolohiya</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
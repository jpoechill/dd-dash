<template>
  <div class="h-100">
    <div class="container h-100">
      <div class="row h-100">
        <div class="offset-md-3 col-md-6 h-100">
          <div class="position-relative h-100">
            <div class="position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
              <!-- <img src="/cover-landing.png" class="w-100" alt=""> -->
            </div>
            <div class="position-absolute text-center w-100 h-100 d-flex justify-content-center align-items-center" style="z-index: 1111;">
              <ul>
                <li class="pb-2">
                  Thank you for signing up! 
                  <p>
                    Your next steps are...
                  </p>
                  <p>
                    • Finish adding account details <br>
                    • Add Stripe account <br>
                    • Create an app
                  </p>
                  <nuxt-link to="/profile">
                    <button class="btn btn-blue mb-3 text-uppercase font-weight-bold w-100">
                      Skip to Dashboard
                    </button>         
                  </nuxt-link>
                  <nuxt-link to="/">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                      Back to Main
                    </button>         
                  </nuxt-link>
                </li>
              </ul>         
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  layout: 'empty',
  created() {},
  data() {
    return {
    }
  },
  methods: {
  },
  transition: 'fade'
}
</script>

<style>
li {
  list-style: none;
}

hr {
  border: 2px solid #fff !important;
  border-radius: 10px !important;
}
</style>

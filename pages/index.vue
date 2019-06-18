<template>
    <div class="h-100">
      <div class="container h-100">
        <div class="row h-100">
          <div class="offset-md-3 col-md-6 h-100">
            <div class="position-relative h-100">
              <div class="position-absolute h-100 d-flex justify-content-center align-items-center">
                <img src="/cover-post-click.png" class="w-100" alt="">
              </div>
              <div class="position-absolute text-center w-100 h-100 d-flex justify-content-center align-items-center" style="z-index: 1111;">
                <nuxt-link to="/profile">
                <ul>
                  <li class="pb-2">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                      Login
                    </button>
                  </li>
                  <li class="">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                      Sign Up
                    </button>
                  </li>
                  <li class="">
                    <hr>
                  </li>
                  <li>
                    <button class="btn btn-blue text-uppercase font-weight-bold">
                      Go to Dashboard
                    </button>
                  </li>
                  <li class="">
                    <hr>
                  </li>
                  <li class="pb-2">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                      Support
                    </button>
                  </li>
                  <li class="pb-2">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                      Blog
                    </button>
                  </li>
                  <li class="">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                      Pricing
                    </button>
                  </li>
                </ul>

                  
                </nuxt-link>
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
  created() {
    // this.$router.push({
    //     path: '/profile'
    // })
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style>
li {
  list-style: none;
}

hr {
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

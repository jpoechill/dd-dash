<template>
    <div class="h-100">
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Login with Facebook <br>
              Login with Google <br><br>
              <p>
                <input type="text" placeholder="Email Address"> <br>
                <input type="text" placeholder="Password">
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-red font-weight-bold text-uppercase" data-dismiss="modal">Cancel</button>
              <nuxt-link to="/pages/onboard">
                <button type="button" class="btn btn-blue font-weight-bold text-uppercase" data-dismiss="modal">Login</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="container h-100">
        <div class="row h-100">
          <div class="offset-md-3 col-md-6 h-100">
            <div class="position-relative h-100">
              <div class="position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
                <!-- <img src="/cover-post-click.png" class="w-100" alt=""> -->
                <!-- <div class="container-fixed-ratio"> 
              <div class="content-fixed-ratio overflow-hidden d-flex align-items-center"> -->
                <video class="w-100" autoplay muted loop src="https://player.vimeo.com/external/280933857.sd.mp4?s=2cab736310b4b0aa4de60f09bedbd79090091305&profile_id=165&oauth2_token_id=57447761" style=""></video>
              <!-- </div> 
            </div> -->
              </div>
              <div class="position-absolute text-center w-100 h-100 d-flex justify-content-center align-items-center" style="z-index: 1111;">
                <ul>
                  <li class="pt-2 pb-2">
                    <!-- <nuxt-link to="/pages/login"> -->
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100" data-toggle="modal" data-target="#exampleModal">
                        Login
                      </button>         
                    <!-- </nuxt-link> -->
                  </li>
                  <li class="">
                    <button class="btn btn-blue text-uppercase font-weight-bold w-100" data-toggle="modal" data-target="#exampleModal">
                        Sign Up
                      </button>  
                  </li>
                  <li class="">
                    <hr>
                  </li>
                  <li>
                    <nuxt-link to="/pages/onboard">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        Onboard
                      </button>         
                    </nuxt-link>
                  </li>
                  <li class="">
                    <hr>
                  </li>
                  <li class="pb-2">
                    <nuxt-link to="/profile">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        → Dashboard
                      </button>         
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pages/landing">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        → Landing
                      </button>         
                    </nuxt-link>
                  </li>
                  <li class="">
                    <hr>
                  </li>
                  <li class="pb-2">
                    <nuxt-link to="/pages/my-apps">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        → My Apps
                      </button>         
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pages/my-apps-cp">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        → My Apps CP
                      </button>         
                    </nuxt-link>
                  </li>
                  <li class="">
                    <hr>
                  </li>
                  <li class="pb-2">
                    <nuxt-link to="/pages/support">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        Support
                      </button>         
                    </nuxt-link>
                  </li>
                  <li class="pb-2">
                    <nuxt-link to="/pages/blog">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        Blog
                      </button>         
                    </nuxt-link>
                  </li>
                  <li class="pb-2">
                    <nuxt-link to="/pages/pricing">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        Pricing
                      </button>         
                    </nuxt-link>
                  </li>
                  <li class="">
                    <nuxt-link to="/pages/legal">
                      <button class="btn btn-blue text-uppercase font-weight-bold w-100">
                        Legal
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
  head: {
    bodyAttrs: {
      class: 'overflow-hidden'
    }
  },
  components: {
  },
  layout: 'empty',
  created() {
    // this.$router.push({
    //     path: '/profile'
    // })
    // $('.modal-backdrop').css({display:'none!important'});
    var x = document.getElementsByClassName("modal-backdrop");
    // x.style.backgroundColor = 'green';
    console.log(x)
  },
  data() {
    return {
    }
  },
  methods: {
  },
  transition: 'fade'
}
</script>

<style scoped>
li {
  list-style: none;
}

hr {
  border: 2px solid #fff !important;
  border-radius: 10px !important;
}

.modal {
  z-index: 99999;
}

</style>

<template>
  <div class="h-100">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-md-12 h-100">
          <div class="position-relative h-100">
            <div class="position-absolute w-100 d-flex justify-content-center align-items-center">
              <img src="/pages-my-apps-cp.png" class="w-100" alt="">
            </div>
            <div class="position-absolute text-center w-100 h-100 d-flex justify-content-center align-items-center" style="z-index: 1111;">
              <ul>
                <li class="pb-2">
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

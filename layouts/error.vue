<template>
    <div>
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-12 text-center">
            <img src="https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/source.gif" class="w-50 pb-2" alt="">
            <p>
              Oops! The page you are looking for is not here. :( <br>
              <nuxt-link to="/">
                Go Home
              </nuxt-link>
            </p>
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
</style>

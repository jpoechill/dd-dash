<template>
  <transition name="fade" appear>
    <div class="h-100">
      <nuxt class="h-100" />
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },
  layout: '',
  data() {
    return {
    }
  },
  methods: {
  },
  transition: {
    name: 'fade',
    appear: true,
    mode: 'out-in'
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#__nuxt, #__layout {
  height: 100%;
}


.modal-backdrop {
  opacity: .3!important;
}

</style>

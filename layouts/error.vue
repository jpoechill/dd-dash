<template>
    <div>
      X
    </div>
</template>

<script>
export default {
  components: {
  },
  layout: 'empty',
  created() {
    this.$router.push({
        path: '/404'
    })
  },
  methods: {
  },
  transition: 'fade'
}
</script>

<style>
</style>

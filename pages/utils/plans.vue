<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Current Subscription Plans 
            </div>
            <div class="header-text-description mb-3">
              View and manage your current subscription plans.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active Subscribers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <img src="/pages-plans-graph.png" class="w-100 mb-4" alt="">
          </div>
        </div>
      </div>
      
      
    </div>
</template>

<script>
export default {
  components: {
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

<style>
</style>

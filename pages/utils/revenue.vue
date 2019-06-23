<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Revenue and Sales
            </div>
            <div class="header-text-description mb-3">
              View and manage information about the current state of revenue and sales for your business.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Amount ($)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Customers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Balances ($)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <img src="/pages-sales-graph.png" class="mb-4 w-100" alt="">
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

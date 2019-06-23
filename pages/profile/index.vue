<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              My Profile 
            </div>
            <div class="header-text-description mb-3">
              View and edit you current personal information.  
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row pb-4">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-12 rounded bg-white">
                  <div class="p-4">
                    <div class="row">
                      <div class="col-md-6 pb-1">
                        Full Name
                        <p>
                          <input type="text" value="Stacey Rodriguez" class="form form-control mt-2">
                        </p>
                      </div>
                      <div class="col-md-6 pb-1">
                        Email Address
                        <p><input type="text" value="stacey.rodriguez@gmail.com" class="form form-control mt-2"></p>
                      </div>
                      <div class="col-md-6 pb-1">
                        Phone Number
                        <p><input type="text" value="415-555-5555" class="form form-control mt-2"></p>
                      </div>
                      <div class="col-md-6 pb-1">
                        Country
                        <p><input type="text" value="USA" class="form form-control mt-2"></p>
                      </div>
                      <div class="col-md-6 pb-1">
                        State
                        <p><input type="text" value="CA" class="form form-control mt-2"></p>
                      </div>
                      <div class="col-md-6 pb-1">
                        City
                        <p><input type="text" value="San Francisco" class="form form-control mt-2"></p>
                      </div>
                      <div class="col-md-6 pb-1">
                        Street Address
                        <p><input type="text" value="555 Magnolia St." class="form form-control mt-2"></p>
                      </div>
                      <div class="col-md-6 pb-1">
                        Postal Code
                        <p><input type="text" value="94555" class="form form-control mt-2"></p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-right">
                        <button class="btn btn-blue text-uppercase font-weight-bold">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
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

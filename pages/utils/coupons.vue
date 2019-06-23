<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Current Coupons 
            </div>
            <div class="header-text-description mb-3">
              View and manage the coupon discounts for your web-app.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-12 rounded bg-white">
                  <div class="p-3">
                    <div class="row">
                      <div class="col-md-4">
                        Coupon Code
                        <p class="pb-0 mb-2">
                          <input type="text" value="25-PERCENT" class="form form-control mt-2">
                        </p>
                      </div>
                      <div class="col-md-4">
                        % Discount
                        <p class="pb-0 mb-2">
                          <input type="text" value="25%" class="form form-control mt-2">
                        </p>
                      </div>
                      <div class="col-md-4">
                        <br>
                        <p class="pb-0 mb-2">
                          <button class="form form-control mt-2 btn btn-blue text-uppercase font-weight-bold">
                            Create Coupon
                          </button>
                        </p>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <img src="/pages-coupons-filter.png" class="mt-3 px-2 mb-3 w-100" alt=""> -->
      <div class="container">
        <div class="row pt-4 pb-2">
          <div class="col-md-4">
            Filter Start Date
          </div>
          <div class="col-md-4">
            Filter End Date
          </div>
          <div class="col-md-4">
            Filter Words
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-12 mb-4 py-4 bg-white overflow-auto" style="-webkit-overflow-scrolling: touch;">
                  <table class="table" style="min-width: 600px;">
                    <thead>
                      <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Created</th>
                        <th scope="col">Expires</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          G-12345
                        </td>
                        <td>90% Off</td>
                        <td>Jul 7th, 2019</td>
                        <td>Jul 7th, 2022</td>
                        <td style="width: 50%">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab ad aperiam voluptas in veniam. Incidunt fuga error doloribus laudantium, unde nemo maxime laboriosam alias.  
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          G-12345
                        </td>
                        <td>90% Off</td>
                        <td>Jul 7th, 2019</td>
                        <td>Jul 7th, 2022</td>
                        <td style="width: 50%">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab ad aperiam voluptas in veniam. Incidunt fuga error doloribus laudantium, unde nemo maxime laboriosam alias.  
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          G-12345
                        </td>
                        <td>90% Off</td>
                        <td>Jul 7th, 2019</td>
                        <td>Jul 7th, 2022</td>
                        <td style="width: 50%">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab ad aperiam voluptas in veniam. Incidunt fuga error doloribus laudantium, unde nemo maxime laboriosam alias.  
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

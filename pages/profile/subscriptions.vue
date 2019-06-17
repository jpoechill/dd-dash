<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Subscriptions
            </div>
            <div class="header-text-description mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos debitis nesciunt ea. Maxime perspiciatis ipsum tempora accusantium aliquid odio necessitatibus.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-md-12 py-3 bg-white">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Sub. Type</th>
                        <th scope="col">Date Ending</th>
                        <th scope="col">Time Remaining</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" class="align-middle">
                          <nuxt-link to="#">Trial</nuxt-link>
                        </th>
                        <td class="align-middle">Jul 7th, 2019</td>
                        <td class="align-middle">One month</td>
                        <td class="align-middle text-right">
                          <button class="btn btn-red text-uppercase font-weight-bold">
                            Unsubscribe
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="align-middle">
                          <nuxt-link to="#">Trial</nuxt-link>
                        </th>
                        <td class="align-middle">Jul 7th, 2019</td>
                        <td class="align-middle">One month</td>
                        <td class="align-middle text-right">
                          <button class="btn btn-red text-uppercase font-weight-bold">
                            Unsubscribe
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="align-middle">
                          <nuxt-link to="#">Trial</nuxt-link>
                        </th>
                        <td class="align-middle">Jul 7th, 2019</td>
                        <td class="align-middle">One month</td>
                        <td class="align-middle text-right">
                          <button class="btn btn-red text-uppercase font-weight-bold">
                            Unsubscribe
                          </button>
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

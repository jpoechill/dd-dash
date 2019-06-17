<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Billing
            </div>
            <div class="header-text-description mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos debitis nesciunt ea. Maxime perspiciatis ipsum tempora accusantium aliquid odio necessitatibus.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-md-12 py-3 bg-white">
                  Current Balance Due <br>
                  <span class="font-size-68 font-weight-bold line-height-custom">
                    $99.99
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="container">
              <div class="row">
                <div class="col-md-12 py-3 bg-white">
                  <p>
                    Card Information <br>
                    <span class="font-weight-bold font-size-24">
                      4747 4747 4747 4747
                    </span>
                  </p>
                  <p>
                    Expiration <br>
                    <span class="font-weight-bold font-size-24">12/20</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Transaction History
            </div>
            <div class="header-text-description mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos debitis nesciunt ea. Maxime perspiciatis ipsum tempora accusantium aliquid odio necessitatibus.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-12 mb-4 py-4 bg-white">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount Charged</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          Jul 7th, 2019
                        </td>
                        <td>$99.99</td>
                        <td style="width: 60%">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab ad aperiam voluptas in veniam. Incidunt fuga error doloribus laudantium, unde nemo maxime laboriosam alias.  
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          Jul 7th, 2019
                        </td>
                        <td>$99.99</td>
                        <td style="width: 60%">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab ad aperiam voluptas in veniam. Incidunt fuga error doloribus laudantium, unde nemo maxime laboriosam alias.  
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          Jul 7th, 2019
                        </td>
                        <td>$99.99</td>
                        <td style="width: 60%">
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
      profiles: [
        {
          name: 'Stacey Rodriguez',
          role: 'Manager',
          img: '/avatars/avatar-stacey-02.png'
        },
        {
          name: 'Stacey Rodriguez',
          role: 'Manager',
          img: '/avatars/avatar-stacey-02.png'
        },
        {
          name: 'Stacey Rodriguez',
          role: 'Manager',
          img: '/avatars/avatar-stacey-02.png'
        }
      ]
    }
  },
  methods: {
  },
  transition: 'fade'
}
</script>

<style>
</style>

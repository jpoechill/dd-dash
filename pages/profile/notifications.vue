<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Notifications 
            </div>
            <div class="header-text-description mb-3">
              Select the type of notifications you would like to receive. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos debitis nesciunt ea. Maxime perspiciatis ipsum tempora accusantium aliquid odio necessitatibus.
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
                  <div class="p-4">
                    <div class="row">
                      <div v-for="(notification, index) in notificationItems" :key="index" class="col-md-6 pb-4">
                        <div class="row">
                          <div class="col-md-1">
                            <input type="checkbox">
                          </div>
                          <div class="col-md-11">
                            <h6>{{ notification.title }}</h6>
                            {{ notification.description }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-right">
                        <button class="btn btn-blue text-uppercase font-weight-bold">Update and Save</button>
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
      notificationItems: [
        {
          title: 'New Charges',
          description: 'Get an email when a new charge has been created, or refunded.'
        },
        {
          title: 'New Orders',
          description: 'Get an email when a new order has been placed.'
        },
        {
          title: 'Updates to Billing',
          description: 'Get an email when account details are updated. Ie. name, email, address and etc.'
        },
        {
          title: 'Subscription',
          description: 'Get an email when a subscription is about to expire.'
        },
        {
          title: 'Updates to Credit Card',
          description: 'Get an email when the credit card on file is changed or updated.'
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

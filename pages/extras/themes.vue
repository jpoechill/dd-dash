<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Website Themes 
            </div>
            <div class="header-text-description mb-3">
              Manage and edit the look and feel of your current website.  
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img src="/pages-theme-theme.png" class="w-100" alt="">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              App Notification Settings
            </div>
            <div class="header-text-description mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio qui asperiores deserunt ducimus ratione perferendis.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-12 rounded bg-white">
                  <div class="p-4">
                    <div class="row">
                      <div v-for="(notification, index) in notificationItems" :key="index" class="col-md-6 pb-0">
                        <div class="row">
                          <div class="col-md-1">
                            <input type="checkbox">
                          </div>
                          <div class="col-md-11">
                            <h6>{{ notification.title }}</h6>
                            <span class="color-grey">
                              {{ notification.description }}
                            </span>
                            <p class="pt-2">
                              → Edit <span class="float-right">→ Send test email</span> 
                            </p>
                          </div>
                        </div>
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
      notificationItems: [
        {
          title: 'Expiring Soon',
          description: 'This notification is sent when a subscription is about to expire.'
        },
        {
          title: 'Updated Profile',
          description: 'This notification is sent when a profile is updated.'
        },
        {
          title: 'Card Charged and Refunds',
          description: 'This notification is sent when a charge is created on a credit card. It is also sent when the charge is refunded.'
        },
        {
          title: 'Weekly Sales Report',
          description: 'This notification is sent to profile managers. It contains the weekly sales results.'
        },
        {
          title: 'User Inquiries',
          description: 'This notification is sent to profile managers of a domain when a user submits an inquiry on the contact-us page.'
        },
        {
          title: 'New Role Requested',
          description: 'This notification is sent to profile managers of an organization when a user has requested a role on that organization.'
        },
        {
          title: 'New Claim Code (Group Buy\'s)',
          description: 'This notification is sent to the user invited through a groupBuy.'
        },
        {
          title: 'New User Activation',
          description: 'This notification is sent to profile managers of a domain when a user has activated his/her account.'
        },
        {
          title: 'New Registered User',
          description: 'Receive emails when the credit card on file is changed or updated.'
        },
        {
          title: 'User Verification Sent',
          description: 'Receive emails when the credit card on file is changed or updated.'
        },
        {
          title: 'Card Updated',
          description: 'Receive emails when the credit card on file is changed or updated.'
        },
        {
          title: 'Password Reset',
          description: 'Receive emails when the credit card on file is changed or updated.'
        },
        {
          title: 'Order Confirmation',
          description: 'Receive emails when the credit card on file is changed or updated.'
        },
        {
          title: 'New Managers Added',
          description: 'Receive emails when the credit card on file is changed or updated.'
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

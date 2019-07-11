<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-3">
            <div class="header-text-title">
              Connected Profiles
            </div>
            <div class="header-text-description mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos debitis nesciunt ea. Maxime perspiciatis ipsum tempora accusantium aliquid odio necessitatibus.
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div v-for="(profile, index) in profiles" :key="index" class="col-md-4">
            <div class="container">
              <div class="row">
                <div class="col-md-12 py-4 text-center bg-white">
                  <img :src="profile.img" class="mb-2" alt="">
                  <p>
                    <span class="font-weight-bold">
                      {{ profile.name }}
                    </span><br>
                    <span class="sidebar-text-email">
                      {{ profile.role }}
                    </span>
                  </p>
                  <p>
                    Go to Homepage.<br>
                    Go to Dashboard.
                  </p>
                  <button class="btn btn-red font-weight-bold text-uppercase">Remove Profile</button>
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

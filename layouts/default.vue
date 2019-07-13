<template>
  <transition name="fade" appear>
    <div class="d-flex" v-bind:class="{ toggled: sidebarIsToggled }" id="wrapper">
      <!-- Sidebar -->
      <div id="sidebar-wrapper" v-bind:style="sidebarIsToggled ? 'overflow: hidden!important; margin-left: -15rem;' : ''">
        <div class="sidebar-heading pb-3">
          <nuxt-link to="/">
            <img src="/dd-logo-02.svg" class="pt-0 pb-2 w-25" alt="">
          </nuxt-link>
          <!-- <img src="/avatars/avatar-stacey-01.png" class="w-50 d-block pb-2" alt=""> -->
          <span class="sidebar-text-user pt-2">
            Hello Stacey!
          </span>
          <span class="sidebar-text-email">
            stacey.rodriguez@gmail.com
          </span>
        </div>
        <div class="list-group list-group-flush">
          <div v-for="(category, index) in sidebarCategories" :key="index">
            <div>
              <span @click="toggleCategory(category.categoryName)" class="sidebar-text-small mt-2 d-inline fake-link">{{ category.categoryName }}</span>
              <img @click="toggleCategory(category.categoryName)" class="float-right d-inline pr-4 pt-1 o-75 fake-link" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-down.svg" alt="">
            </div>
            <transition name="fade">
            <div v-if="category.isActive">
              <nuxt-link v-for="(link, linkIndex) in category.links" :key="linkIndex" :to="link.url" class="list-group-item list-group-item-action d-flex align-items-center">
                <div @click="toggleLink(link.title)" class="px-3 py-2 r-5 w-100 mx-0">
                  <!-- <nuxt-link :to="link.url"> -->
                    <div v-show="link.isActive" class="font-color-blue">
                      <img :src="link.iconHover" class="pr-2 pb-1" style="max-width: 24px;" alt=""> 
                      {{ link.title }} 
                    </div>
                    <div v-show="!link.isActive">
                      <img :src="link.icon" class="pr-2 pb-1" style="max-width: 24px;" alt=""> 
                      {{ link.title }}
                    </div>
                  <!-- </nuxt-link> -->
                </div>
              </nuxt-link>
            </div>
            </transition>
            <!-- <nuxt-link v-for="(link, linkIndex) in category.links" :key="linkIndex" to="/dashboard" class="list-group-item list-group-item-action d-flex align-items-center">
            <img src="/sidebar-circle.svg" class="pr-3" alt="">
            {{ link.title }}
            </nuxt-link> -->

            
          </div>
        </div>
        <div class="m-5">
          <!-- Footer -->
        </div>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper" style="transition: margin .25s ease-out" :style="!sidebarIsToggled ? 'margin-left: 240px' : 'margin-left: 0px'">
        <nav class="navbar navbar-light bg-light" :style="!sidebarIsToggled ? '' : 'width: 100%!important;'" style="position: fixed; width: calc(100% - 240px); z-index: 9999; transition: .25s ease-out;">
          <div class="container">
            <div class="row w-100">
              <div class="col-md-12 w-100">
                <div class="d-inline-block">
                  <button class="btn btn-hamburger" id="menu-toggle" @click="toggleMenu()" >
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                  </button>
                </div>
                <div class="d-inline float-right">Sign Out</div>
              </div>
            </div>
          </div>
          <!-- <button class="btn btn-hamburger" id="menu-toggle" @click="toggleMenu()" >
              <div class="hamburger"></div>
              <div class="hamburger"></div>
              <div class="hamburger"></div>

          </button> -->

          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> -->

          <!-- <ul class="navbar-nav ml-auto mt-2 mt-lg-0 pr-1">
            <li class="">
              <img src="/avatars/avatar-stacey-01.png" class="pt-1 mr-3" style="max-width: 40px;" alt="">
            </li>
            <li class="nav-item active d-flex align-items-center">
              <a class="nav-link" href="#">Support<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active d-flex align-items-center">
              <a class="nav-link" href="#">Sign Out <span class="sr-only">(current)</span></a>
            </li>
          </ul> -->
        </nav>

        <div class="container-fluid text-sml" style="margin-top: 50px; height: calc(100% - 60px); min-height: calc(100vh - 60px);">
          <nuxt/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      sidebarIsToggled: false,
      sidebarCategories: [
        {
          categoryName: 'Profiles',
          isActive: true,
          links: [
            {
              title: 'My Profile',
              url: '/profile',
              icon: '/_icons/user.svg',
              iconHover: '/_icons/user-blue.svg',
              alt: '/',
              isActive: false
            },
            {
              title: 'Connected Profiles',
              url: '/profile/connected',
              icon: '/_icons/connected.svg',
              iconHover: '/_icons/connected-blue.svg',
              isActive: false
            },
            {
              title: 'Notifications',
              url: '/profile/notifications',
              icon: '/_icons/notifications.svg',
              iconHover: '/_icons/notifications-blue.svg',
              isActive: false
            },
            {
              title: 'Billing',
              url: '/profile/billing',
              icon: '/_icons/billing.svg',
              iconHover: '/_icons/billing-blue.svg',
              isActive: false
            },
            {
              title: 'Subscriptions',
              url: '/profile/subscriptions',
              icon: '/_icons/subscriptions.svg',
              iconHover: '/_icons/subscriptions-blue.svg',
              isActive: false
            }
          ],
        },
        {
          categoryName: 'Utilities',
          isActive: true,
          links: [
            {
              title: 'Dashboard',
              url: '/utils',
              icon: '/_icons/dashboard.svg',
              iconHover: '/_icons/dashboard-blue.svg',
              isActive: false
            },
            {
              title: 'Coupons',
              url: '/utils/coupons',
              icon: '/_icons/coupons.svg',
              iconHover: '/_icons/coupons-blue.svg',
              isActive: false
            },
            {
              title: 'Funds',
              url: '/utils/funds',
              icon: '/_icons/funds.svg',
              iconHover: '/_icons/funds-blue.svg',
              isActive: false
            },
            {
              title: 'Revenue',
              url: '/utils/revenue',
              icon: '/_icons/revenue.svg',
              iconHover: '/_icons/revenue-blue.svg',
              isActive: false
            },
            {
              title: 'Plans',
              url: '/utils/plans',
              icon: '/_icons/plans.svg',
              iconHover: '/_icons/plans-blue.svg',
              isActive: false
            },
            {
              title: 'Subscribers',
              url: '/utils/subscribers',
              icon: '/_icons/subscribers.svg',
              iconHover: '/_icons/subscribers-blue.svg',
              isActive: false
            }
          ],
        },
        {
          categoryName: 'Extras',
          isActive: true,
          links: [
            {
              title: 'Themes',
              url: '/extras/themes',
              icon: '/_icons/themes.svg',
              iconHover: '/_icons/themes-blue.svg',
              isActive: false
            },
            {
              title: 'Rules',
              url: '/extras/rules',
              icon: '/_icons/rules.svg',
              iconHover: '/_icons/rules-blue.svg',
              isActive: false
            }
          ],
        },
      ] 
    }
  },
  mounted() {
    // console.log(this.$nuxt.$route.path)
    let currPage = this.$nuxt.$route.path

    window.addEventListener('resize', function() {
      this.handleResize()
    });

    // console.log(this.sidebarCategories[0].links.length)
    // update active link
    for (let i = 0; i < this.sidebarCategories[0].links.length; i++) {
      // console.log(currPage)
      // console.log(this.sidebarCategories.links)
      if (currPage === this.sidebarCategories[0].links[i].url || currPage === this.sidebarCategories[0].links[i].alt) {
        this.sidebarCategories[0].links[i].isActive = true
      }
    }
  },
  methods: {
    toggleMenu () {
      this.sidebarIsToggled = !this.sidebarIsToggled

      let file = '/sounds/beep-01.mp3'
      var audio = new Audio(file);
      // audio.play()
    },
    toggleCategory (categoryName) {
      let categories = this.sidebarCategories

      let file = '/sounds/beep-02.mp3'
      var audio = new Audio(file);
      // audio.play()

      for (let category in categories) {
        if (categories[category].categoryName === categoryName) {
          categories[category].isActive = !categories[category].isActive
        }
      }
    },
    handleResize () {
      console.log('Do something')
    },
    toggleLink (linkTitle) {
      let categories = this.sidebarCategories
      
      let file = '/sounds/blop.mp3'
      var audio = new Audio(file);
      // audio.play()

      for (let category in categories) {
        // console.log('Category: ' + categories[category].categoryName)
        for (let link in categories[category].links) {
          console.log('Link: ' + categories[category].links[link].title)
          if (categories[category].links[link].title !== linkTitle) {
            categories[category].links[link].isActive = false
          } else {
            categories[category].links[link].isActive = true
          }
        }
      }

    }
  },
  transition: {
    name: 'fade',
    appear: true,
    mode: 'out-in'
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  /* overflow-x: hidden; */
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  /* min-width: 300px; */
  position: fixed;
  overflow-y: auto!important;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  z-index: 9999999999999;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem 0.375rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (max-width: 768px) {
  #sidebar-wrapper {
    overflow: hidden;
    margin-left: 0px;
  }

  #page-content-wrapper {
    /* margin-left: 0px!important; */
  }

  .navbar {
    width: 100%!important;
  }
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0px;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>

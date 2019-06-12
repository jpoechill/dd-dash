<template>
    <div class="d-flex" v-bind:class="{ toggled: sidebarIsToggled }" id="wrapper">
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
        <div class="sidebar-heading">
          <nuxt-link to="/">
            <img src="/dd-logo.svg" class="pt-3 pb-4 w-25" alt="">
          </nuxt-link>
          <img src="/avatars/avatar-stacey-01.png" class="w-50 d-block pb-2" alt="">
          <span class="sidebar-text-user pt-0">
            Hello Stacey!
          </span>
          <span class="sidebar-text-email">
            stacey.rodriguez@gmail.com
          </span>
        </div>
        <div class="list-group list-group-flush">
          <div v-for="(category, index) in sidebarCategories" :key="index">
            <div @click="toggleCategory(category.categoryName)" class="fake-link">
              <span class="sidebar-text-small mt-2 d-inline">{{ category.categoryName }}</span>
              <img class="float-right d-inline pr-4 pt-1 o-75" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-down.svg" alt="">
            </div>
            <transition name="fade">
            <div v-if="category.isActive">
              <nuxt-link v-for="(link, linkIndex) in category.links" :key="linkIndex" :to="link.url" class="list-group-item list-group-item-action d-flex align-items-center">
                <div @click="toggleLink(link.title)" class="px-3 py-2 r-5 w-100 sidebar-link-active mx-0">
                  <!-- <nuxt-link :to="link.url"> -->
                    <div v-show="link.isActive" class="font-weight-bold font-color-blue">
                      <img src="/sidebar-circle-blue.svg" class="pr-2" alt=""> 
                      {{ link.title }} 
                    </div>
                    <div v-show="!link.isActive">
                      <img src="/sidebar-circle.svg" class="pr-2" alt=""> 
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
      <div id="page-content-wrapper">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="btn btn-primary" id="menu-toggle" @click="toggleMenu()">Toggle</button>

          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> -->

          <ul class="navbar-nav ml-auto mt-2 mt-lg-0 pr-1">
            <li class="nav-item active">
              <a class="nav-link" href="#">Sign Out <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Sign Out <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div> -->
        </nav>

        <div class="container-fluid text-sml">
          <nuxt/>
        </div>
      </div>
    </div>
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
              isActive: true
            },
            {
              title: 'Connected Profiles',
              url: '/profile/connected',
              isActive: false
            },
            {
              title: 'Notifications',
              url: '/profile/notifications',
              isActive: false
            },
            {
              title: 'Billing',
              url: '/profile/billing',
              isActive: false
            },
            {
              title: 'Subscriptions',
              url: '/profile/subscriptions',
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
              isActive: false
            },
            {
              title: 'Coupons',
              url: '/utils/coupons',
              isActive: false
            },
            {
              title: 'Funds',
              url: '/utils/funds',
              isActive: false
            },
            {
              title: 'Revenue',
              url: '/utils/revenue',
              isActive: false
            },
            {
              title: 'Plans',
              url: '/utils/plans',
              isActive: false
            },
            {
              title: 'Subscribers',
              url: '/utils/subscribers',
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
              isActive: false
            },
            {
              title: 'Rules',
              url: '/extras/rules',
              isActive: false
            }
          ],
        },
      ] 
    }
  },
  methods: {
    toggleMenu () {
      this.sidebarIsToggled = !this.sidebarIsToggled

      let file = '/sounds/shazam.mp3'
      var audio = new Audio(file);
      audio.play()
    },
    toggleCategory (categoryName) {
      let categories = this.sidebarCategories

      for (let category in categories) {
        if (categories[category].categoryName === categoryName) {
          categories[category].isActive = !categories[category].isActive
        }
      }

      let file = '/sounds/tiger.mp3'
      var audio = new Audio(file);
      audio.play()
    },
    toggleLink (linkTitle) {
      let categories = this.sidebarCategories
      // alert(linkTitle)

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

      let file = '/sounds/blop.mp3'
      var audio = new Audio(file);
      audio.play()
    }
  },
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
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
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

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
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

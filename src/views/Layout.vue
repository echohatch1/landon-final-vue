<template>
<div id="app-layout">
<v-app>
    <!-- <v-navigation-drawer app v-model="drawer" clipped>Nav
        <div id="nav">
      <router-link to="/" tag="li">Home</router-link><br>
      <router-link to="/about" tag="li">About</router-link><br>
      <router-link to="/about2" tag="li">About-2</router-link><br>
      <router-link to="/layout" tag="li">Layout</router-link><br>
      <router-link to="/login" tag="li">Login</router-link><br>
      <router-link to="/remote" tag="li">Remote</router-link><br>
        </div>
    </v-navigation-drawer> -->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Navigation
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
  
      <v-divider></v-divider>
  
      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="navigateRoutes(item.routeNumber)"
        >

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
        <v-toolbar app clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
            <v-content>
                <v-container fluid>
                  <router-view/>
                    <div v-box-shadow:offset="2">Content</div>
                </v-container>
            </v-content>
        <v-footer app>Footer</v-footer>
</v-app>
</div>
</template>

<script>
export default {

    data () {
        return {
            drawer: null,
            items: [
        { title: 'Home', icon: 'dashboard', route: '/layout', routeNumber: 0 },
        { title: 'About', icon: 'question_answer', route: '/about', routeNumber: 1 },
        { title: 'Login', icon: 'account_circle', route: '/login', routeNumber: 2},
      ],
      right: null
        }
    },
    methods: {
        navigateRoutes(routeNumber) {
            this.$router.push(this.items[routeNumber].route);
        }
    }
}
</script>


<style>

</style>
<template>
<div id="app-layout">
<v-app>
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
        <v-toolbar app clipped-left class="green darken-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" style="color: white;"></v-toolbar-side-icon>
            <h2 style="color: white;">Nav</h2>
        </v-toolbar>
            <v-content>
                <v-container fluid>
                  
                    <div v-box-shadow:offset="2"><router-view/></div>
                </v-container>
            </v-content>
        <v-footer app><v-layout justify-center><span>©2018 Landon Hatch | Images from <a href="https://unsplash.com/">Unsplash API</a></span></v-layout></v-footer>
</v-app>
</div>
</template>

<script>
export default {

    data () {
        return {
            drawer: null,
            items: [
        { title: 'Home', icon: 'home', route: '/home', routeNumber: 0 },
        { title: 'About', icon: 'info', route: '/about', routeNumber: 1 },
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
a {
  text-decoration: none;
}
</style>

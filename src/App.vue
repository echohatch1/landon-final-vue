<template>
  <div id="app-layout">
    <v-app>
      <v-navigation-drawer app v-model="drawer" clipped>
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">Navigation</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click="navigateRoutes(item.routeNumber), scrollToTop()"
          >
            <v-list-tile-action>
              <v-icon :id="item.color">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app clipped-left class="green darken-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" style="color: white;"></v-toolbar-side-icon>
        <h2 id="header" style="color: white;">Home</h2>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <div v-box-shadow:offset="2" class="main">
            <router-view/>
          </div>
        </v-container>
      </v-content>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
      "app-footer": Footer,

  },
  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Home",
          icon: "home",
          color: "green",
          route: "/home",
          routeNumber: 0
        },
        {
          title: "Favorites",
          icon: "favorite",
          color: "red",
          route: "/favorites",
          routeNumber: 1
        },
        {
          title: "Login",
          icon: "account_circle",
          color: "blue",
          route: "/login",
          routeNumber: 2
        }
      ],
      right: null
    };
  },
  methods: {
    navigateRoutes(routeNumber) {
      this.$router.push(this.items[routeNumber].route);
      document.getElementById("header").innerHTML = this.items[
        routeNumber
      ].title;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style>
a {
  text-decoration: none;
}

.main {
  padding: 10px;
}

#green {
  color: rgb(65, 133, 65);
}
#blue {
  color: rgb(63, 107, 230);
}
#red {
  color: rgb(180, 80, 80);
}
</style>

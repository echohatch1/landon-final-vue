<template>
  <transition name="fade" appear>
    <div class="search">
      <v-container fluid>
        <h2>Seach Images</h2>
        <form @submit.prevent="getResult(query)">
          <v-layout row wrap>
            <v-flex xs12 md8>
              <v-text-field label="Type in your search" v-model="query"></v-text-field>
            </v-flex>
            <v-flex xs12 md2>
              <v-select
                v-model="select"
                :items="items"
                placeholder="10"
                label="Number of Results"
                @change="numResults = select"
              ></v-select>
            </v-flex>
            <v-flex>
              <v-btn
                large
                :loading="loading"
                :disabled="loading"
                @click="getResult(query)"
                class="green darken-3 white--text"
              >Search</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-container>

      <div class="results">
        <v-container fluid>
          <v-layout wrap>
            <v-flex d-flex xs12 sm6 md6 v-for="result in results">
              <transition name="bounce" appear>
                <v-card class="card" :key="showing">
                  <v-container>
                    <v-flex>
                      <figure>
                        <div class="crop">
                          <img class="main-images" :src="result.urls.regular">
                        </div>
                        <!-- <figcaption>
                          <h3>{{ result.alt_description }}</h3>
                        </figcaption> -->
                      </figure>
                    </v-flex>
                  </v-container>

                  <v-container>
                    <v-layout justify-space-between align-center row wrap>
                      <v-btn
                        @click="openLinkProfile(result)"
                        :id="result.id + '-profile'"
                        class="avatar"
                        large
                        flat
                        round
                        color="black"
                      >
                        <v-list-tile-avatar>
                          <img class="profile-images" :src="result.user.profile_image.medium">
                        </v-list-tile-avatar>

                        <a flat color="black">{{ result.user.username }}</a>
                      </v-btn>

                      <v-btn @click="toggleHeart (result)" flat round fab color="black">
                        <v-icon class="like-button" :id="result.id">favorite_border</v-icon>
                      </v-btn>

                      <!-- <a download class="download-button" flat round fab color="black" href="./https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb">
                  <v-icon>cloud_download</v-icon>
                      </a>-->
                      <v-btn
                        class="download-button"
                        :id="result.id + '-download'"
                        flat
                        round
                        fab
                        color="black"
                        @click="openLinkDownload(result)"
                      >
                        <v-icon>image</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-container>
                </v-card>
              </transition>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";


export default {
  name: "search",
  components: {
    
  },
  data() {
    return {
      msg: "Search",
      query: "landscape",
      results: "",
      CLIENT_ID:
        "fc990c021cadd00f117a7b494c3ffd581a3a83c6001dd7ffd933d4415bbb653d",
      numResults: 10,
      select: null,
      liked: false,
      showing: true,
      loader: null,
      loading: false,
      items: ["10", "20", "40", "60", "80"]
    };
  },
  methods: {
    getResult(query) {
      axios.get(
          "https://api.unsplash.com/search/photos/?query=" +
            query +
            "&client_id=" +
            this.CLIENT_ID +
            "&per_page=" +
            this.numResults
        )
        .then(response => {
          this.results = response.data.results;
        });
      var i = 0;
      for (i; i < this.results.length; i++) {
        document.getElementById(this.results[i].id).innerHTML = "favorite_border";
        document.getElementById(this.results[i].id).style.color = "black";
      }

      this.showing = !this.showing;
      this.loader = "loading";
    },
    toggleHeart(result) {
      var el = document.getElementById(result.id);
      var iconColor = "black";
      var heartIcon = "";
      var value = el.innerHTML;

      //if it's current value is set to favorite
      if (value === "favorite") {
        //set value to the opposite
        heartIcon = "favorite_border";
        iconColor = "black";
        console.log("unliked!");

        //remove items from array
        this.$store.state.imageData = this.$store.state.imageData.filter(
          function(e) {
            return e.id !== result.id;
          }
        );

        //otherwise if current value is set to favorite_border
      } else if (value === "favorite_border") {
        //set value to the opposite
        heartIcon = "favorite";
        iconColor = "red";
        console.log("liked!");
        this.$store.state.imageData.push(result);
      }

      el.classList.add("bounce-enter-active");

      el.innerHTML = heartIcon;
      el.style.color = iconColor;
      return heartIcon;
    },
    openLinkDownload(result) {
      this.clickAnimationDownload(result);
      setTimeout(() => {
        window.open(result.links.download);
      }, 500);
    },
    openLinkProfile(result) {
      this.clickAnimation(result);
      setTimeout(() => {
        window.open(result.user.portfolio_url);
      }, 500);
    },
    clickAnimation(result) {
      document.getElementById(result.id + "-profile").classList.add("bounce-enter-active");
    },
    clickAnimationDownload(result) {
      document.getElementById(result.id + "-download").classList.add("bounce-enter-active");
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.bounce-enter-active {
  animation: bounce-in 0.75s;
}
.bounce-leave-active {
  display: none;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter {
  opacity: 0;
}

.results figure figcaption {
  position: absolute;
  font-size: 10px;
}

.crop {
  height: 300px;
  width: 100%;
  overflow: hidden;
  background: rgba(189, 172, 148, 0.349);
}

.results .main-images {
  position: relative;
  top: 50%;
  display: block;
  margin: auto;
  -webkit-transform: translateY(
    -50%
  ); /* Ch <36, Saf 5.1+, iOS < 9.2, An =<4.4.4 */
  -ms-transform: translateY(-50%); /* IE 9 */
  transform: translateY(-50%); /* IE 10, Fx 16+, Op 12.1+ */
  /* height: 100%;
  width: auto; */
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.avatar {
  padding-left: 0;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>


<template>
  <v-container fluid>
    <div class="results" v-if="imageData.length > 0">
      <v-container fluid>
        <v-layout wrap>
          <v-flex d-flex xs12 sm6 md6 v-for="data in imageData">
            <transition name="fade" mode="out-in" appear>
              <v-card class="card" :id="data.id + '-card'" :key="data.id">
                <v-container>
                  <v-flex>
                    <figure>
                      <div class="crop">
                        <img class="main-images" :src="data.urls.regular">
                      </div>
                      <figcaption>
                        <h3>{{ data.description }}</h3>
                      </figcaption>
                    </figure>
                  </v-flex>
                </v-container>

                <v-container>
                  <v-layout justify-space-around align-center row wrap>
                    <v-btn
                      @click="openLinkProfile(data)"
                      :id="data.id + '-profile'"
                      class="avatar"
                      large
                      flat
                      round
                      color="black"
                    >
                      <v-list-tile-avatar>
                        <img class="profile-images" :src="data.user.profile_image.medium">
                      </v-list-tile-avatar>

                      <a flat color="black">{{ data.user.username}}</a>
                    </v-btn>

                    <v-btn @click="toggleHeart (data)" flat round fab color="black">
                      <v-icon class="like-button" :id="data.id" style="color: red;">favorite</v-icon>
                    </v-btn>

                    <v-btn
                      class="download-button"
                      :id="data.id + '-download'"
                      flat
                      round
                      fab
                      color="black"
                      @click="openLinkDownload(data)"
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
    <div v-else>
      <router-link tag="ul" to="/home">
        <h3>No Favorites to Display :(</h3>
        <br>
        <a>Search images to add some!</a>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showing: true
    };
  },
  methods: {
    toggleHeart(data) {
      var el = document.getElementById(data.id);
      var elCard = document.getElementById(data.id + "-card");
      var iconColor = "black";
      var heartIcon = "";
      var value = el.innerHTML;

      //if it's current value is set to favorite
      if (value === "favorite") {
        //set value to the opposite
        console.log("unliked!");
        heartIcon = "favorite";
        iconColor = "red";

        elCard.classList.add("bounce-leave-active");
        //delete item from array
        setTimeout(() => {
          this.$store.state.imageData = this.$store.state.imageData.filter(
            function(e) {
              return e.id !== data.id;
            }
          );
        }, 500);

        //otherwise if current value is set to favorite_border
      } else if (value === "favorite_border") {
        //set value to the opposite
        heartIcon = "favorite";
        iconColor = "red";
        console.log("liked!");
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
      document
        .getElementById(result.id + "-profile")
        .classList.add("bounce-enter-active");
    },
    clickAnimationDownload(result) {
      document
        .getElementById(result.id + "-download")
        .classList.add("bounce-enter-active");
    }
  },
  computed: {
    imageData: function() {
      return this.$store.state.imageData;
    }
  }
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.75s;
}
.bounce-leave-active {
  animation: bounce-in 0.75s reverse;
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
  height: 100%;
  width: auto;
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


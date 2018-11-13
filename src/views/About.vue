<template>
<div>
  {{ layout }}
<v-container grid-list-xl>
  <v-btn @click="showing = !showing"></v-btn>
  <v-layout row wrap>
    <v-flex v-for="ship in starships" :key="ship.model" xs6>
    <v-card v-if="showing" class="flip-enter-active, flip-leave-active">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">h3 is here</h3>
          <div>sub div is here</div>
          <span>{{ ship.manufacturer | allCaps}}</span>
        </div>
      </v-card-title>
        <v-card-actions>
          <v-btn @click="showing=!showing" flat color="blue">Search</v-btn>
        </v-card-actions>
    </v-card>
    </v-flex>
  </v-layout>
</v-container>

  <!--<div class="about">
    <h1>This is an about page</h1>
    <ul id="example-1">
  <li v-for="film in allFilms" :key="film.episode_id">
    {{ film.title }}
  </li>
</ul>
  <div>
    {{ starships[0] }}
  </div>
  </div>-->
  </div>
</template>

<script>
//import { films } from "../assets/films.js";
//import { starships } from "../assets/starships.js";
import { planets } from "../assets/planets.js";
import { aboutMixin } from "../aboutMixin.js";

export default {
    data() {
    return {
      showing: true
    }
  },
  mixins: [aboutMixin],
}
</script>

<style>

.flip-enter-active {
  animation: flip-in 1s ease-in;
}

.flip-leave-active {
  animation: flip-out 1s ease-out;
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>

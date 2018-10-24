<template>
<v-container grid-list-xl>
  <v-layout row wrap>
    <v-flex v-for="ship in starships" :key="ship.model" xs6>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">h3 is here</h3>
          <div>sub div is here</div>
          <span>{{ ship.manufacturer }}</span>
        </div>
      </v-card-title>
      <v-btn flat color="blue">Search</v-btn>
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
</template>

<script>
import { films } from "../assets/films.js";
import { starships } from "../assets/starships.js";
import { planets } from "../assets/planets.js";
export default {
  data: function() {
    return {
    allFilms: films,
    starships
    }
  }
}
</script>

<style>

</style>

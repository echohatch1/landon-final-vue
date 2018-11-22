<template>
  <div class="search">
    <h2>Seach Images</h2>
    <form @submit.prevent="getResult(query)">
      <v-layout row wrap>
      <v-flex xs6>
        <v-text-field label="Type in your search" v-model="query"></v-text-field>
      </v-flex>
      <v-btn large outline flat @click="getResult(query)" class="green darken-3">Search</v-btn>
      <v-select
      v-model="select"
      :items="items"
      placeholder='10'
      label="Number of Results"
      @change="numResults = select"
    ></v-select>
      </v-layout>
    </form>
    <div class="results" v-if="results">

      <v-layout row wrap>

      <v-flex fluid xs12 md6 lg4 v-for="result in results">
        <v-card>

          <figure>
          <figcaption><h3>{{ result.description.toUpperCase() }}</h3></figcaption>
          <img class="main-images":src="result.urls.small"/>
          </figure>

          <v-layout class="card-links" align-center justify-space-between row fill-height>
            <v-container>

            <v-btn class="avatar" large flat round color="black" :href="result.user.portfolio_url">
              
                <v-list-tile-avatar>
                  <img class="profile-images":src="result.user.profile_image.small"/>
                </v-list-tile-avatar>
              
          <v-link flat color="black">{{ result.user.username }}</v-link>
            </v-btn>

            </v-container>

            <v-container>
              <v-layout justify-end>
                <v-btn class="download-button" flat round fab color="black" :href="result.links.download">
                  <v-icon>cloud_download</v-icon>
                </v-btn>
              </v-layout>
            </v-container>
          
          </v-layout>

        </v-card>
      </v-flex>

      </v-layout>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'search',
  data () {
    return {
      msg: 'Search',
      query: 'landscape',
      results: '',
      CLIENT_ID: "fc990c021cadd00f117a7b494c3ffd581a3a83c6001dd7ffd933d4415bbb653d",
      numResults: '',
      select: null,
      items: [
        '10',
        '20',
        '40',
        '60',
        '80'
      ],
    }
  },
  methods: {
      getResult(query) {
        axios.get("https://api.unsplash.com/photos/search/?query=" + query +  "&client_id=" + this.CLIENT_ID + "&per_page=" + this.numResults)
        .then( response => {
            console.log(response.data);
            this.results = response.data;
        });
      }
  }
}
</script>
//"https://api.unsplash.com/photos/search/?query=" + query +  "&client_id=" + CLIENT_ID

<style scoped>
.results figure {
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 0;
}
.results figure figcaption {

}
.results .main-images {
    width: 100%;
}


.avatar {
  padding-left: 0;
  margin:0;
}

.download-button {
  margin-right: 0;
}

h1, h2 {
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


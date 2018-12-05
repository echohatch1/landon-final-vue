<template>
  <div class="search">
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
      placeholder='10'
      label="Number of Results"
      @change="numResults = select"
    ></v-select>
    </v-flex>
    <v-btn large outline flat @click="getResult(query)" class="green darken-3">Search</v-btn>
      </v-layout>
    </form>
    <div class="results" v-if="results">

     <v-container fluid> 
      <v-layout wrap>

      <v-flex d-flex xs12 sm6 md6 v-for="result in results">
        <v-card class="card">

          <v-container>
          <v-flex>
          <figure>
          <img class="main-images":src="result.urls.small"/>
              <figcaption><h3>{{ result.description }}</h3></figcaption>
          </figure>
          </v-flex>
          </v-container>

<v-container>
          <v-layout justify-space-between align-center row wrap>
 
            <v-btn class="avatar" large flat round color="black" :href="result.user.portfolio_url">
                <v-list-tile-avatar>
                  <img class="profile-images":src="result.user.profile_image.small"/>
                </v-list-tile-avatar>
              
          <a flat color="black">{{ result.user.username }}</a>
            </v-btn>
 
            

                <v-btn @click="toggleHeart (result.id)" class="like-button" flat round fab color="black">
                  <v-icon class="like-button" :id="result.id">favorite_border</v-icon>
                </v-btn>
  

                <v-btn class="download-button" flat round fab color="black" :href="result.links.download">
                  <v-icon>cloud_download</v-icon>
                </v-btn>

          </v-layout>
</v-container>


          
   

        </v-card>
      </v-flex>

      </v-layout>
     </v-container>
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
      liked: false,
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
      },
      toggleHeart (likedId) {
        console.log(likedId);

        var el = document.getElementById(likedId);
        var iconColor = "black";
        var heartIcon = '';
        var value = el.innerHTML;

            //if it's current value is set to favorite
        if (value === "favorite") {
            //set value to the opposite
            heartIcon = "favorite_border";
            iconColor = "black";
            console.log("unliked!");
            
            //otherwise if current value is set to favorite_border
        } else if (value === "favorite_border") {
            //set value to the opposite
            heartIcon = "favorite";
            iconColor = "red";
            console.log("liked!");
        }
        
        el.innerHTML = heartIcon;
        el.style.color = iconColor;
        return heartIcon;
      }
  }
}
</script>
//"https://api.unsplash.com/photos/search/?query=" + query +  "&client_id=" + CLIENT_ID

<style scoped>
/*.results figure {
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 0;
}*/

.myStyle {
  color: blue;
}

.results figure figcaption {
  font-size: 10px;
}
.results .main-images {
    width: 100%;
}

.avatar {
  padding-left: 0;
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


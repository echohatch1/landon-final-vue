<template>
<div>
    <div>{{ courses[i] }}</div>
    <v-btn @click="getCourses">Get Courses</v-btn>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: []
    };
  },
  methods: {
    getCourses() {
      return axios
        .get("https://randomuser.me/api")
        .then(function(response) {
          this.courses.push(response.data.results[0].name);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>

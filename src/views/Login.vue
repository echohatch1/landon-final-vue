<template>
  <form>
    <v-text-field
      v-model="username"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-container fluid grid-list-md>
      <v-layout align-center justify-space-between row fill-height>
        <v-flex>
          <v-btn @click="submit" class="green darken-3 button" style="color: white;">Login</v-btn>
        </v-flex>

        <v-flex text-xs-right>
          <router-link tag="ul" to="/signup">
            <span>Don't have an account? </span>
            <a>Sign Up</a>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </form>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),

  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>

<style>
.button {
  margin-left: 0px;
}
</style>

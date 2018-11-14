<template>
<form>
    <v-text-field
      v-model="username"
      :error-messages="usernameErrors"
      :counter="10"
      label="Username"
      required
      @input="$v.username.$touch()"
      @blur="$v.username.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-btn @click="submit" class="green darken-3" style="color: white;">Login</v-btn>
  </form>
</template>

<script>
 import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      username: { required, maxLength: maxLength(10) },
      password: { required, minLength: minLength(4) },
    },

    data: () => ({
      username: '',
      password: '',
    }),

    computed: {
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.maxLength && errors.push('Username must be at most 10 characters long')
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Must be at least 4 characters long')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
    }
  }
</script>

<style>

</style>

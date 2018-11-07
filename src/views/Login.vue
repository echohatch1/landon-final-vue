<template>
<v-container>
    <v-layout>
        <v-flex xs6 offset-sm3>
            <v-card>
              <v-form @submit.prevent="onSubmit">
                  <v-text-field
                    label="Username"
                    name="username"
                    v-model.lazy="username"
                    :type="show1 ? 'text' : 'username'"
                    :rules="[rules.required, rules.min]"
                    validate-on-blur=""
                    error="Pass"
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    name="password"
                    v-model.lazy="password"
                    :type="show1 ? 'text' : 'password'"
                    :rules="[rules.required, rules.min]"
                    validate-on-blur=""
                    error="Pass"
                  ></v-text-field>
              </v-form>
           </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        show1: false,
        email: '',
        password: '',
            rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || "Min 8",
      },
      }
      
      
    },
    validations: {
        email: {
          required,
          email,
        },
    },

    methods: {
        onSubmit() {
          console.log('Thans for submitting!')
        }
    }
  }
</script>

<style>
.input.invalid div{
    border: 1px solid red;
}
</style>

<template>
  <form>
    <v-text-field
      v-model="firstName"
      :error-messages="firstNameErrors"
      label="First Name"
      @input="$v.firstName.$touch()"
      @blur="$v.firstName.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :error-messages="lastNameErrors"
      label="Last Name"
      @input="$v.lastName.$touch()"
      @blur="$v.lastName.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Email"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Create Password"
      type="password"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="passwordConfirm"
      :error-messages="passwordConfirmErrors"
      label="Confirm Password"
      type="password"
      @input="$v.passwordConfirm.$touch()"
      @blur="$v.passwordConfirm.$touch()"
    ></v-text-field>

    <v-btn @click="submit" class="green darken-3" style="color: white;">Sign Up</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  sameAs,
  email,
  alpha
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }),

  validations: {
    firstName: { required, alpha },
    lastName: { required, alpha },
    email: { required, email },
    password: { required, minLength: minLength(4) },
    passwordConfirm: { sameAsPassword: sameAs("password") }
  },

  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.alpha && errors.push("Must contain only letters");
      !this.$v.firstName.required && errors.push("First name is required");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.firstName.alpha && errors.push("Must contain only letters");
      !this.$v.lastName.required && errors.push("Last name is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be a valid email address");
      !this.$v.email.required && errors.push("Email is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Must be at least 4 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    passwordConfirmErrors() {
      const errors = [];
      if (!this.$v.passwordConfirm.$dirty) return errors;

      !this.$v.passwordConfirm.sameAsPassword &&
        errors.push("Passwords must be identical");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>

<style>
</style>

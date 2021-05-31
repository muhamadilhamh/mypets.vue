<template>
  <v-row>
    <v-col cols="12" sm="5" class="hidden-xs-only">
      <v-img class="bg_register" src="../assets/bg_register.png"> </v-img>
    </v-col>
    <v-col cols="12" sm="6">
      <v-row class="pa-12">
        <v-container>
          <h3 class="header_register">Register to MyPets</h3>
          <div v-if="errors">
            <v-alert border="top" color="red lighten-2" dark>
              {{ errors }}
            </v-alert>
          </div>
          <v-col cols="12">
            <v-form
              @submit.prevent="validate"
              ref="form"
              class="register"
              v-model="valid"
              lazy-validation
            >
              <v-row class="hidden-xs-only">
                <v-col cols="6">
                  <h5>Name</h5>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <h5>Username</h5>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    required
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col class="name_register">
                  <h5>Name</h5>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col>
                  <h5>Username</h5>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    required
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <h5>Email Address</h5>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email Address"
                required
                outlined
                rounded
                dense
              ></v-text-field>

              <h5>Phone</h5>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Phone"
                required
                outlined
                rounded
                dense
              ></v-text-field>

              <v-row class="hidden-xs-only">
                <v-col cols="6">
                  <h5>Password</h5>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    :rules="passwordRules"
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <h5>Repeat Password</h5>
                  <v-text-field
                    v-model="confirmPassword"
                    label="Repeat Password"
                    type="password"
                    required
                    :rules="
                      confirmPasswordRules.concat(passwordConfirmationRule)
                    "
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col class="name_password">
                  <h5>Password</h5>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    :rules="passwordRules"
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="hidden-sm-and-up">
                <v-col>
                  <h5>Repeat Password</h5>
                  <v-text-field
                    v-model="confirmPassword"
                    label="Repeat Password"
                    type="password"
                    required
                    :rules="
                      confirmPasswordRules.concat(passwordConfirmationRule)
                    "
                    outlined
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Creating an account means you’re agree with our Terms of Service and Privacy Policy. "
                required
              ></v-checkbox>

              <v-row class="hidden-xs-only">
                <v-col cols="6">
                  <v-btn
                    rounded
                    outlined
                    class="btn_login"
                    color="#489FB5"
                    block
                    to="/"
                    elevation="7"
                  >
                    Back
                  </v-btn>
                </v-col>

                <v-col cols="6">
                  <v-btn
                    :disabled="!valid"
                    rounded
                    dark
                    class="btn_login"
                    @click="validate"
                    color="#489FB5"
                    block
                    type="submit"
                    elevation="7"
                  >
                    Create Account
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col>
                  <v-btn
                    :disabled="!valid"
                    rounded
                    dark
                    class="btn_login"
                    @click="validate"
                    color="#489FB5"
                    block
                    type="submit"
                    elevation="7"
                  >
                    Create Account
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col>
                  <v-btn
                    rounded
                    dark
                    class="btn_login"
                    outlined
                    color="#489FB5"
                    block
                    to="/"
                    elevation="7"
                  >
                    Back
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col cols="6">
                  <p class="member_resp">Already a member?</p>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    class="register_resp"
                    to="/login"
                    x-small
                    color="orange"
                    text
                  >
                    Login Now
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-container>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import navbarlogo_register from "../layouts/navbarlogo_register";

export default {
  created() {
    this.$emit("update:layout", navbarlogo_register);
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.register();
      }
    },
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        username: this.username,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/login?msg=register_success"))
        .catch((err) => (this.errors = err.response.data));
    },
  },
  data: () => ({
    value: true,
    valid: true,
    errors: null,
    name: "",
    nameRules: [
      (value) => !!value || "Name required",
      (value) => (value && value.length >= 5) || "Name must have 5+ characters",
      (value) =>
        /(?=.*[A-Z])/.test(value) || "Must have one uppercase character",
    ],
    username: "",
    usernameRules: [
      (value) => !!value || "Username required",
      (value) =>
        (value && value.length >= 5) || "Username must have 5+ characters",
    ],
    phone: "",
    phoneRules: [
      (value) => !!value || "Phone required",
      (value) =>
        (value && value.length >= 9) || "Phone must have 9+ numbers",
        (value) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value) || "Phone Number is not valid"
    ],
    email: "",
    emailRules: [
      (value) => !!value || "E-mail required",
      (value) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(value) => !!value || "Please type password.",
    (value) => value.length >= 8 || "Password must be at least 8 characters long"],
    confirmPassword: "",
    confirmPasswordRules: [(value) => !!value || "Please type password again",
    (value) => value.length >= 8 || "Password must be at least 8 characters long"],
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
};
</script>

<style lang="scss">
.header_register {
  font-size: 3rem;
  color: #ffa62b;
  letter-spacing: 2%;
  margin-top: 3%;
}
.register_resp {
  margin-top: 100px;
}
.member_resp {
  right: 10%;
}
.name_register {
  margin-top: 10px;
  margin-bottom: -20px;
}
.name_password {
  margin-top: -20px;
  margin-bottom: -20px;
}
</style>
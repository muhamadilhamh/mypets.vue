<template>
  <v-row>
    <v-col cols="12" sm="5" class="hidden-xs-only">
      <v-img class="bg_login" src="../assets/bg_login.png"> </v-img>
    </v-col>
    <v-col cols="12" sm="6">
      <v-row class="pa-12">
        <v-container>
          <div v-if="errors">
            <v-alert border="top" color="red lighten-2" dark>
              {{ errors }}
            </v-alert>
          </div>
          <div v-if="msg == 'register_success'">
            <v-alert border="top" color="green lighten-2" dark>
              Register Success
            </v-alert>
          </div>

          <h3 class="header_login">Log in to MyPets!</h3>

          <v-col cols="12">
            <v-form
              @submit.prevent="login"
              ref="form"
              class="login"
              v-model="valid"
              lazy-validation
            >
              <h5>Username or Email</h5>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Username or Email"
                required
                outlined
                rounded
                dense
              ></v-text-field>

              <h5>Password</h5>
              <v-text-field
                v-model="password"
                label="Password"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                :rules="passwordRules"
                outlined
                rounded
                dense
              ></v-text-field>
              <v-row class="hidden-xs-only">
                <v-col cols="6">
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

                <v-col cols="6">
                  <v-btn
                    :disabled="!valid"
                    rounded
                    dark
                    @click="login"
                    class="btn_login"
                    color="#489FB5"
                    block
                    elevation="7"
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="hidden-sm-and-up">
                <v-col>
                  <v-btn
                    :disabled="!valid"
                    rounded
                    dark
                    @click="login"
                    class="btn_login"
                    color="#489FB5"
                    block
                    elevation="7"
                  >
                    Log in
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
                  <p class="member_resp">Not a member?</p>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    class="register_resp"
                    to="/register"
                    x-small
                    color="orange"
                    text
                  >
                    Register now
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
import navbarlogo_login from "../layouts/navbarlogo_login";
export default {
  created() {
    this.$emit("update:layout", navbarlogo_login);
  },
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => (this.errors = error.response.data.message));
    },
  },
  data: () => ({
    value: true,
    msg: "",
    valid: true,
    email: "",
    errors: null,
    emailRules: [(value) => !!value || "E-mail or username required"],
    password: "",
    passwordRules: [(value) => !!value || "Password is required"],
  }),
  mounted() {
    this.msg = this.$route.query.msg;
  },
};
</script>

<style lang="scss">
.header_login {
  font-size: 3rem;
  color: #ffa62b;
  letter-spacing: 2%;
  margin-top: 10%;
}
.btn_login {
  text-transform: capitalize;
}
.member_resp {
  position: absolute;
  left: 35%;
  margin-top: 3px;
  right: 35%;
  margin-right: 5px;
  font-size: 0.9rem;
}
.register_resp {
  bottom: 1%;
  position: absolute;
  left: 40%;
  margin-top: 3px;
  text-transform: capitalize;
  font-weight: 400;
}
</style>
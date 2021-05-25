<template>
  <div>
    <v-toolbar flat class="header">
      <v-toolbar-title>
        <v-card-actions>
          <v-btn to="/" color="orange" text offset="12">
            <v-img
              max-height="80"
              max-width="175"
              src="../assets/LogoPPL.svg"
            ></v-img>
          </v-btn>
        </v-card-actions>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-card-actions>
          <v-btn
            class="about"
            to="/about"
            x-small
            color="orange"
            text
            lowercase
          >
            About Us
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="adop" to="/adoption" x-small color="orange" text>
            Adopsi
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="care" to="/care" x-small color="orange" text>
            Care&Training
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="age" to="/ageconversion" x-small color="orange" text>
            Age Conversion
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="article" to="/article" x-small color="orange" text>
            Article
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="breeds" to="/breeds" x-small color="orange" text>
            Breeds
          </v-btn>
        </v-card-actions>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- Is Login -->

      <v-toolbar-items class="hidden-xs-only" v-if="isLoggedIn == true">
        <v-card-actions>
          <v-avatar size="37">
            <v-img
              :src="url + user.picture"
            >
            </v-img>
          </v-avatar>
          <v-list-item-content>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-list-item-subtitle v-on="on">
                  <v-btn to="" text x-small>
                     {{user.username}}
                    <v-icon right> mdi-chevron-down </v-icon>
                  </v-btn>
                </v-list-item-subtitle>
              </template>
              <v-list class="responsiveMenus">
                <v-list-item>
                  <v-list-item-title
                    ><v-btn :to="{name : 'profile', params: { username : user.username } }" x-small color="orange" text>
                      Profile
                    </v-btn></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><v-btn to="" x-small color="orange" text @click="logout">
                      Logout
                    </v-btn></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-content>
        </v-card-actions>
        <v-card-actions>
          <v-btn to="/uploadmoment" x-small color="#489FB5" rounded dark>
            Moment
          </v-btn>
        </v-card-actions>
      </v-toolbar-items>

      <!-- Is Logout -->
      <v-toolbar-items class="hidden-xs-only" v-else>
        <v-card-actions>
          <v-btn to="/register" x-small text color="#515151"> Register </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn to="/login" x-small color="#489FB5" rounded dark>
            Login
          </v-btn>
        </v-card-actions>
      </v-toolbar-items>

      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenus">
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/about" x-small color="orange" text>
                  About Us
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/adoption" x-small color="orange" text>
                  Adopsi
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/care" x-small color="orange" text>
                  Care&Training
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/ageconversion" x-small color="orange" text>
                  Age Conversion
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/article" x-small color="orange" text>
                  Article
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/breeds" x-small color="orange" text>
                  Breeds
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/register" x-small text color="#515151">
                  Register
                </v-btn></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-btn to="/login" x-small text color="#515151">
                  Login
                </v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
    <v-content>
      <slot />
    </v-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      url : process.env.VUE_APP_IMAGE_URL
    }
  },
  methods: {
    logout: function() {
    this.$store.dispatch("logout").then(() => {
    this.$router.push("/");
    });
    }
  },
  computed : {
    ...mapGetters({ 
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
  }
};
</script>

<style lang="scss">
.about {
  text-transform: lowercase;
}
</style>
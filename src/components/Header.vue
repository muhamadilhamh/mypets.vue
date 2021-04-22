<template>
  <v-toolbar flat>
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
        <v-btn to="/about" x-small color="orange" text> About Us </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/adoption" x-small color="orange" text> Adopsi </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/care" x-small color="orange" text> Care&Training </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/ageconversion" x-small color="orange" text>
          Age Conversion
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/article" x-small color="orange" text> Article </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/breeds" x-small color="orange" text> Breeds </v-btn>
      </v-card-actions>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-card-actions>
        <v-btn to="/register" x-small text color="#515151"> Register </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/login" x-small color="#489FB5" rounded dark> Login </v-btn>
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
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>

<template>
  <div>
    <v-toolbar flat class="header">
      <v-toolbar-title>
        <v-card-actions>
          <v-btn to="/" color="orange" text offset="2">
            <v-img
              max-height="80"
              max-width="175"
              src="../assets/LogoPPL.svg"
            ></v-img>
          </v-btn>
        </v-card-actions>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-card-actions>
          <p class="member">Already a member?</p>
          <v-btn class="login" to="/login" x-small color="orange" text>
            Login now
          </v-btn>
        </v-card-actions>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <slot />
    </v-content>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

<style lang="scss">
.member {
  padding-top: 7%;
  margin-right: 5px;
  font-size: 0.9rem;
}
.login {
  text-transform: capitalize;
  font-weight: 400;
}
</style>
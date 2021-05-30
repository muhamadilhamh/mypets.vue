<template >
  <div class="blank">
    <v-img src="../assets/blank.png"> </v-img>
    <v-img class="d-sm-none" src="../assets/blank.png"> </v-img>
    <v-img class="d-sm-none" src="../assets/blank.png"> </v-img>
  </div>
</template>

<script>
import navbarfull from "../layouts/navbarfull";
export default {
  created() {
    this.$emit("update:layout", navbarfull);
  },
};
</script>

<style>
</style>
<template>
  <v-app>
    <component :is="layout">
      <notifications group="foo" position="center"/>
      <router-view :layout.sync="layout" />
    </component>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div",
    };
  },
};
</script>

<template>
  <v-app>
    <component :is="layout">
      <notifications group="foo" position="center"/>
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    
      <router-view :layout.sync="layout" />
    </component>
  </v-app>
</template>

<script>
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapGetters } from 'vuex'
export default {
  
  name: "App",
  data() {
    return {
      layout : "div",
      fullPage : true,
    };
  },
  components : {
    Loading
  },
  computed : {
    ...mapGetters({ 
        isLoading: 'isLoading',
       
      })
  }
};
</script>

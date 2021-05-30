<template>
  <v-app>
    <component :is="layout">
      <notifications group="foo" position="center"/>
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
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
  created(){
    this.$store.commit("set_loading", false);
  },
  components : {
    Loading
  },
  computed : {
    ...mapGetters({ 
        isLoading : 'isLoading',
       
      })
  },
   watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'Mypets'
      }
    },

};
</script>

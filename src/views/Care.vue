<template>
  <div class="care_page">
    <v-app id="inspire">
      <v-row class="pa-12">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12"
              ><div class="headline_care">
                <h2>What’s in MyPets</h2>
              </div>
            </v-col>
            <v-col md="6" cols="12"
              ><div class="search_care">
                <!-- chips = bakal di highlight, clearable = menghapus highlight, filled = melebarkan layout, rounded = sudut menjadi tidak kaku, solo = membuat menjadi berwarna -->
                <v-autocomplete
                  clearable
                  rounded
                  solo
                  :items="feed_care"
                  item-text="title"
                  item-value="title"
                  v-model="search"
                  label="Select Care & Training"
                  placeholder="Select Care & Training"
                ></v-autocomplete>
              </div>
            </v-col>
            <!-- Button click -->
            <v-col cols="6" sm="6" @click="model = null"> </v-col>
            <!--feed-->
            <v-col v-for="item in filteredList" :key="item.id" cols="12" sm="4">
              <div class="feed_artikel">
                <v-card flat tile class="mx-auto">
                  <router-link
                    :to="{ name: 'caredetail', params: { id_care: item.id } }"
                  >
                    <v-img
                      class="rounded"
                      :src="item.picture"
                      aspect-ratio="1.5"
                    >
                    </v-img>
                  </router-link>
                  <v-card-text>
                    <div class="title">{{ item.title }}</div>
                    <div class="date">{{ item.date }}</div>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-btn
        class="load_more"
        text
        large
        v-if="loadList == true"
        @click="listToShow += 9"
        block
      >
        Load More
      </v-btn>
    </v-app>
  </div>
</template>
<script>
import navbarfull from "../layouts/navbarfull";
export default {
  name: "Care",
  created() {
    this.$emit("update:layout", navbarfull);
  },
  mounted() {
    let uri = process.env.VUE_APP_ROOT_API + "care_training";
    this.$http.get(uri).then((response) => {
      this.feed_care = response.data;
      this.loadList = true;
    });
  },
  data() {
    return {
      loadList: false,
      listToShow: 9,
      search: "",
      url: process.env.VUE_APP_IMAGE_URL,
      feed_care: [],
    };
  },
  computed: {
    filteredList: function () {
      return this.feed_care
        .filter((post) => {
          if (this.search != null) {
            return post.title.includes(this.search);
          } else {
            return post;
          }
        })
        .slice(0, this.listToShow);
    },
  },
};
</script>
<style lang="scss">
.btn_search_care {
  margin-top: 5px;
}

.date {
  font-size: 1rem;
  padding-top: 5%;
  font-style: italic;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 2%;
}
.title {
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 2%;
}
.care_page {
  color: #515151;
}
.headline_care {
  color: #515151;
}
</style>

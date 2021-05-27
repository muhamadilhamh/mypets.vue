<template>
  <!--Hero Static -->

  <div class="adoption_page">
    <v-img src="../assets/heroes_adoption.png">
      <v-row class="pa-12">
        <v-col cols="3" class="hidden-xs-only">
          <v-img class="il_heroes" src="../assets/il_heroes_adp.svg"> </v-img>
        </v-col>
        <v-col cols="8" offset-lg="1" class="hidden-xs-only">
          <v-row>
            <v-container>
              <h3 class="header_heroes">Be My New Family!</h3>
              <p class="desc_age_option">
                Memberikan hewanmu, untuk kasih sayang yang diperlukan
              </p>
              <div class="btn_gotoregis">
                <v-btn
                  to="/register"
                  rounded
                  small
                  color="#489FB5"
                  dark
                  v-show="(islogin = !islogin)"
                >
                  Register
                </v-btn>
              </div>
            </v-container>
          </v-row>
        </v-col>
        <v-col cols="11" offset-lg="1" class="d-sm-none">
          <v-row>
            <v-container>
              <h3 class="header_heroes">Be My New Family!</h3>
              <p class="desc_age_option">
                Memberikan hewanmu, untuk kasih sayang yang diperlukan
              </p>
              <div class="btn_gotoregis">
                <v-btn to="/register" rounded small color="#489FB5" dark>
                  Register
                </v-btn>
              </div>
            </v-container>
          </v-row>
        </v-col>
        <v-col cols="8" class="d-sm-none">
          <v-img
            aspect-ratio="1"
            class="il_heroes_respn"
            src="../assets/il_heroes_adp.svg"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-img>
    <!--Searching-->
    <v-container>
      <v-row>
        <v-col offset-md="2" cols="12" md="8">
          <div class="search_adop">
            <!-- chips = bakal di highlight, clearable = menghapus highlight, filled = melebarkan layout, rounded = sudut menjadi tidak kaku, solo = membuat menjadi berwarna -->
            <v-autocomplete
              clearable
              rounded
              item-text="name"
              :items="animal_list"
              item-value="name"
              label="Search Adoption"
              v-model="search"
              placeholder="Search Adoption"
              prepend-inner-icon="mdi-magnify"
              solo
            >
              <template slot="selection" slot-scope="{ item }">
                {{ item.type }} - {{ item.name }}
              </template>
              <template slot="item" slot-scope="{ item }">
                {{ item.type }} - {{ item.name }}
              </template>
            </v-autocomplete>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-col cols="12" md="4">
        <div class="filter">
          <v-btn
            outlined
            rounded
            solo
            @click="
              showFilter = !showFilter;
              showSort = false;
            "
          >
            <v-icon left> mdi-filter-variant </v-icon>
            filter
          </v-btn>
          <v-btn
            outlined
            rounded
            solo
            @click="
              showSort = !showSort;
              showFilter = false;
            "
          >
            <v-icon left> mdi-sort-variant </v-icon>
            Sort
          </v-btn>
        </div>
      </v-col>

      <v-row class="ma-1">
        <v-col cols="6" md="3">
          <div class="name" v-if="showFilter">
            <h5>Animal Type</h5>
            <v-select
              outlined
              item-text="animal_name"
              :items="allpet_list"
              item-value="animal_name"
              v-model="species"
              placeholder="Animal Type"
              @change="subSpecies(species)"
            ></v-select>
          </div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="gender" v-if="showFilter">
            <h5>Gender</h5>
            <v-select
              outlined
              item-text="gender"
              :items="allpet_list"
              item-value="gender"
              v-model="gender_selected"
              placeholder="Gender"
            ></v-select>
          </div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="location" v-if="showFilter">
            <h5>Location</h5>
            <v-select
              outlined
              item-text="location"
              :items="allpet_list"
              item-value="location"
              v-model="location_selected"
              placeholder="Location"
            ></v-select>
          </div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="age" v-if="showFilter">
            <h5>Age</h5>
            <v-select
              outlined
              item-text="name"
              :items="age"
              item-value="value"
              v-model="age_selected"
              placeholder="Age"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="6" md="3">
          <div class="location" v-if="showSort">
            <h5>Name</h5>
            <v-select
              outlined
              item-text="name"
              :items="sortName"
              item-value="value"
              v-model="sortType"
              placeholder="Name"
              @change="sortedItem = 'name'"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="6" md="3">
          <div class="location" v-if="showSort">
            <h5>Age</h5>
            <v-select
              outlined
              item-text="name"
              :items="sortName"
              item-value="value"
              v-model="sortType"
              placeholder="Age"
              @change="sortedItem = 'age'"
            ></v-select>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!--Feed_adop-->
    <v-container>
      <v-row>
        <v-col v-for="item in filteredList" :key="item.id" cols="12" md="4">
          <v-list dense>
            <v-list-item-group color="primary">
              <v-hover v-slot="{ hover }">
                <v-card flat tile class="mx-auto">
                  <v-carousel
                    height="250"
                    hide-delimiter-background
                    show-arrows-on-hover
                    hide-delimiters
                    hide-arrows
                  >
                    <v-carousel-item v-for="(img, i) in item.image" :key="i"
                      ><router-link
                        :to="{
                          name: 'adoptiondetail',
                          params: { id_adoption: item.id },
                        }"
                      >
                        <v-img
                          class="rounded"
                          :src="url + img.img"
                          aspect-ratio="1.5"
                        >
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out blue-grey darken-3 v-card--reveal display-5 white--text"
                              style="height: 25%"
                            >
                              <template v-if="item.animal_name == 'Dog'">
                                <v-icon left color="#fff"> mdi-dog</v-icon>
                              </template>
                              <template v-if="item.animal_name == 'Cat'">
                                <v-icon left color="#fff"> mdi-cat</v-icon>
                              </template>

                              <div v-if="item.gender == 'Male'">
                                <v-icon small left color="#fff">
                                  mdi-gender-male
                                </v-icon>
                              </div>
                              <div v-else>
                                <v-icon small left color="#fff">
                                  mdi-gender-female
                                </v-icon>
                              </div>
                              {{ item.age }} Months,
                              {{ item.upload_time }}
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </router-link>
                    </v-carousel-item>
                  </v-carousel>

                  <v-card-actions>
                    <v-list-item-avatar>
                      <v-img class="elevation-6" :src="url + item.user.picture">
                      </v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <router-link
                        :to="{
                          name: 'profile',
                          params: { username: item.user.username },
                        }"
                        style="text-decoration: none"
                      >
                        <v-list-item class="name_user">
                          {{ item.user.full_name }}
                        </v-list-item>
                      </router-link>
                    </v-list-item-content>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-list-item-group>
          </v-list>
        </v-col>

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
      </v-row>
    </v-container>
  </div>
</template>
<script>
import navbarfull from "../layouts/navbarfull";
export default {
  name: "Adoption",
  created() {
    this.$emit("update:layout", navbarfull);
  },

  data() {
    return {
      showFilter: false,
      islogin: false,
      showSort: false,
      sortedItem: "",
      sortType: "",
      sortName: [
        {
          name: "Ascending",
          value: "asc",
        },
        {
          name: "Descending",
          value: "desc",
        },
      ],
      image: "",
      sort: null,
      url: process.env.VUE_APP_IMAGE_URL,
      allpet_list: [],
      pet_list: [],
      animal_list: [],
      age: [
        { name: "Under 6 Months ", value: 6 },
        { name: "6 Months - 1 Year", value: 12 },
        { name: "1 Years - 2 Years", value: 24 },
        { name: "2 Years - 3 Years", value: 36 },
        { name: "3 Years - 4 Years", value: 48 },
        { name: "4 Years - 5 Years", value: 60 },
      ],
      species: null,
      search: null,
      listToShow: 9,
      age_selected: null,
      loadList: false,
      gender_selected: null,
      location_selected: null,
      selectedItem: 1,
      feed_adop: [
        {
          id: 1,
          src: require("../assets/1x1_ad.png"),
          avatar_src: require("../assets/ava_ad1x1.png"),
          name: "Royal Navy",
          title: "Kucing Keluarga Ibu dan anak",
        },
        {
          id: 2,
          src: require("../assets/1x2_ad.png"),
          avatar_src: require("../assets/ava_ad1x2.png"),
          name: "Low Short",
          title: "Garid si anjing gila",
        },
        {
          id: 3,
          src: require("../assets/1x3_ad.png"),
          avatar_src: require("../assets/ava_ad1x3.png"),
          name: "Attitude",
          title: "Carron",
        },
        {
          id: 4,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
          title: "Blacky",
        },
        {
          id: 5,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
          title: "Garit",
        },
        {
          id: 6,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
          title: "Milly",
        },
        {
          id: 7,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
          title: "Yaya toure",
        },
        {
          id: 8,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
          title: "Assault",
        },
        {
          id: 9,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
          title: "King",
        },
      ],
    };
  },
  mounted() {
    let uri = process.env.VUE_APP_ROOT_API + "adoption";
    this.$http.get(uri).then((response) => {
      this.pet_list = response.data;
      this.allpet_list = response.data;
      this.loadList = true;
    });
    let uri_cat = process.env.VUE_APP_ROOT_API + "animal";
    this.$http.get(uri_cat).then((response) => {
      this.animal_list = response.data;
    });
  },
  methods: {
    getImage(path) {
      return require(path);
    },
    subSpecies(value) {
      if (value != null) {
        let uri_cat = process.env.VUE_APP_ROOT_API + "animal/" + value;
        this.$http.get(uri_cat).then((response) => {
          this.animal_list = response.data;
        });
      } else {
        let uri_cat = process.env.VUE_APP_ROOT_API + "animal";
        this.$http.get(uri_cat).then((response) => {
          this.animal_list = response.data;
        });
      }
    },
  },
  computed: {
    filteredList: function () {
      return this.pet_list
        .filter((post) => {
          if (this.species != null) {
            return post.animal_name.includes(this.species);
          } else {
            return (post = this.allpet_list);
          }
        })
        .slice(0, this.listToShow)
        .filter((post) => {
          if (this.search != null) {
            return post.animal_type.includes(this.search);
          } else {
            return (post = this.allpet_list);
          }
        })
        .slice(0, this.listToShow)
        .filter((post) => {
          if (this.gender_selected != null) {
            return post.gender.includes(this.gender_selected);
          } else {
            return (post = this.allpet_list);
          }
        })
        .slice(0, this.listToShow)
        .filter((post) => {
          if (this.location_selected != null) {
            return post.location.includes(this.location_selected);
          } else {
            return (post = this.allpet_list);
          }
        })
        .slice(0, this.listToShow)
        .filter((post) => {
          if (this.age_selected != null) {
            if (this.age_selected == 6) {
              return post.age <= 6;
            } else if (this.age_selected == 12) {
              return 6 <= post.age <= 12;
            } else if (this.age_selected == 24) {
              return 12 <= post.age <= 24;
            } else if (this.age_selected == 36) {
              return 24 <= post.age <= 36;
            } else if (this.age_selected == 48) {
              return 36 <= post.age <= 48;
            } else if (this.age_selected == 60) {
              return 48 <= post.age <= 60;
            }
          } else {
            return (post = this.allpet_list);
          }
        })
        .slice(0, this.listToShow)
        .sort((a, b) => {
          let modifier = 1;
          if (this.sortType == "desc") modifier = -1;
          if (a[this.sortedItem] < b[this.sortedItem]) {
            return -1 * modifier;
          }
          if (a[this.sortedItem] > b[this.sortedItem]) return 1 * modifier;
          return 0;
        })
        .slice(0, this.listToShow);
    },
  },
};
</script>
<style lang="scss">
</style>
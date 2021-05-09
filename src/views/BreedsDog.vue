<template>
  <div>
    <v-img src="../assets/bg_breeds_dog.png">
      <v-container>
        <v-row class="pa-12">
          <v-col offset="5" cols="12" md="6">
            <h3 class="header_BreedsCat">Dog Breeds</h3>
            <p class="desc_BreedsCat">
              Discover cat breeds from around the world and get help finding
              your perfect pet.
            </p>
          </v-col>
        </v-row>
      </v-container>
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
      <v-col cols="12">
        <v-row>
          <div class="filter">
            <v-btn outlined rounded solo @click="showFilter = !showFilter">
              <v-icon left> mdi-filter-variant </v-icon>
              filter
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <div class="filter">
            <v-btn outlined rounded solo class="gotocat" to="/breedsCat">
              <v-icon left> mdi-cat </v-icon>
              Go to Cat
            </v-btn>
          </div>
        </v-row>
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
              item-text="age"
              :items="allpet_list"
              item-value="age"
              v-model="age_selected"
              placeholder="Age"
            ></v-select>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!--Feed_adop-->
    <v-container>
      <v-row>
        <v-col v-for="item in filteredList" :key="item.id" cols="12" sm="4">
          <v-list dense>
            <v-list-item-group color="primary">
              <v-card flat tile shaped class="mx-auto" :class="`rounded-lg`">
                <router-link
                  :to="{ name: 'dogdetail', params: { slug: 'akita' } }"
                >
                  <v-img class="rounded" :src="item.picture" aspect-ratio="1.5">
                  </v-img>
                </router-link>

                <v-list-item-content>
                  <v-row>
                    <v-col cols="1" md="1">
                      <v-rating
                        hover
                        background-color="grey darken-1"
                        color="#EF5350"
                        large
                        :empty-icon="emptyIcon"
                        :full-icon="fullIcon"
                        length="1"
                      >
                      </v-rating>
                    </v-col>
                    <v-col cols="2" md="2">
                      <p class="rate">256</p>
                    </v-col>

                    <v-col cols="1" md="1">
                      <router-link
                        :to="{ name: 'dogdetail', params: { slug: 'akita' } }"
                      >
                        <v-rating
                          hover
                          background-color="grey darken-1"
                          color="#E0E0E0"
                          large
                          :empty-icon="emptyIconComment"
                          :full-icon="fullIconComment"
                          length="1"
                        >
                        </v-rating>
                      </router-link>
                    </v-col>

                    <v-col cols="3" md="3">
                      <p class="rate">1000</p>
                    </v-col>

                    <v-col cols="4" md="4">
                      <p class="name_cat">{{ item.name }}</p>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-card>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import navbarlogo_register from "../layouts/navbarlogo_register";
export default {
  name: "BreedsDog",
  created() {
    this.$emit("update:layout", navbarlogo_register);
  },

  data() {
    return {
      showFilter: false,
      allpet_list: [],
      pet_list: [],
      animal_list: [],
      species: null,
      search: null,
      gender_selected: null,
      location_selected: null,
      selectedItem: 1,
      emptyIcon: "mdi-heart-outline",
      fullIcon: "mdi-heart ",
      emptyIconComment: "mdi-comment-outline",
      fullIconComment: "mdi-comment ",
      feed_adop: [
        {
          id: 1,
          src: require("../assets/1x1_ad.png"),
          avatar_src: require("../assets/ava_ad1x1.png"),
          name: "Royal Navy",
        },
        {
          id: 2,
          src: require("../assets/1x2_ad.png"),
          avatar_src: require("../assets/ava_ad1x2.png"),
          name: "Low Short",
        },
        {
          id: 3,
          src: require("../assets/1x3_ad.png"),
          avatar_src: require("../assets/ava_ad1x3.png"),
          name: "Attitude",
        },
        {
          id: 4,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 5,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 6,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 7,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 8,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 9,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
      ],
    };
  },
  mounted() {
    let uri = "http://localhost:8000/api/adoption";
    this.$http.get(uri).then((response) => {
      this.pet_list = response.data;
      this.allpet_list = response.data;
    });
    let uri_cat = "http://localhost:8000/api/animal/";
    this.$http.get(uri_cat).then((response) => {
      this.animal_list = response.data;
    });
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:8000/api/adoption")
        .then((response) => (this.pet_list = response.data));
    },
    subSpecies(value) {
      if (value != null) {
        let uri_cat = "http://localhost:8000/api/animal/" + value;
        this.$http.get(uri_cat).then((response) => {
          this.animal_list = response.data;
        });
      } else {
        let uri_cat = "http://localhost:8000/api/animal/";
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
        .filter((post) => {
          if (this.search != null) {
            return post.animal_type.includes(this.search);
          } else {
            return (post = this.allpet_list);
          }
        })
        .filter((post) => {
          if (this.gender_selected != null) {
            return post.gender.includes(this.gender_selected);
          } else {
            return (post = this.allpet_list);
          }
        })
        .filter((post) => {
          if (this.location_selected != null) {
            return post.location.includes(this.location_selected);
          } else {
            return (post = this.allpet_list);
          }
        });
    },
  },
};
</script>

<style lang="scss">
.il_heroes {
  width: 100%;
}
.header_BreedsCat {
  font-size: 3rem;
  color: #ffa62b;
  letter-spacing: 2%;
  margin-top: 20%;
}
.desc_BreedsCat {
  color: #ffff;
  opacity: 70%;
  margin-top: -1%;
}

.header_heroes {
  font-size: 2.5rem;
  color: #ffa62b;
  letter-spacing: 2%;
}

.desc_heroes {
  color: #515151;
  opacity: 70%;
  margin-top: -1%;
}

.btn_gotoregis {
  margin-top: 5%;
}

.search_adop {
  margin-top: -40px;
}

.name_user {
  font-weight: 600;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.bg {
  background: #515151;
}
.rate,
.name_cat {
  padding-top: 15px;
  padding-left: 12px;
}
.name_cat {
  font-weight: bold;
}
.gotocat {
  text-transform: none !important;
}
</style>
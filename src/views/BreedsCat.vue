<template>
  <div>
    <v-img src="../assets/bg_breeds_cat.png">
      <v-container>
        <v-row class="pa-12">
          <v-col offset-md="1" cols="12" md="7">
            <h3 class="header_BreedsCat">'Cat' Breeds</h3>
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
              label="Search Breeds"
              v-model="search"
              placeholder="Select Breeds"
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
              <v-icon left> mdi-sort-variant </v-icon>
              Sort
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <div class="filter">
            <v-btn
              color="#489FB5"
              rounded
              solo
              class="gotocat"
              to="/breeds/dog"
              dark
              elevation="2"
            >
              <v-icon left> mdi-dog </v-icon>
              Go to Dog
            </v-btn>
          </div>
        </v-row>
      </v-col>
      <v-row class="ma-1">
        <v-col cols="6" md="3">
          <div class="name" v-if="showFilter">
            <h5>Sort By Name</h5>
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
                  :to="{ name: 'catdetail', params: { slug: item.slug } }"
                >
                  <v-img class="rounded" :src="item.picture" aspect-ratio="1.5">
                  </v-img>
                </router-link>

                <v-list-item-content>
                  <v-row>
                    <v-col cols="2" md="1">
                      <v-rating
                        hover
                        background-color="grey darken-1"
                        color="#EF5350"
                        large
                        :empty-icon="emptyIcon"
                        :full-icon="fullIcon"
                        length="1"
                        value="1"
                        readonly
                      >
                      </v-rating>
                    </v-col>
                    <v-col cols="2" md="2">
                      <p class="rate">{{ item.user.length }}</p>
                    </v-col>

                    <v-col cols="2" md="1">
                      <router-link
                        :to="{ name: 'catdetail', params: { slug: item.slug } }"
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

                    <v-col cols="2" md="2">
                      <p class="rate">{{ item.moments.length }}</p>
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
    </v-container>
  </div>
</template>

<script>
import navbarfull from "../layouts/navbarfull";
export default {
  name: "BreedsDog",
  created() {
    this.$emit("update:layout", navbarfull);
  },

  data() {
    return {
      showFilter: false,
      allpet_list: [],
      pet_list: [],
      animal_list: [],
      species: null,
      search: null,
      sortedItem: null,
      sortType: null,
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
      gender_selected: null,
      location_selected: null,
      loadList: false,
      listToShow: 9,
      selectedItem: 1,
      emptyIcon: "mdi-heart-outline",
      fullIcon: "mdi-heart ",
      emptyIconComment: "mdi-camera-plus-outline",
      fullIconComment: "mdi-camera-plus ",
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
    let uri_dog = process.env.VUE_APP_ROOT_API + "animal/cat";
    this.$http.get(uri_dog).then((response) => {
      this.animal_list = response.data;
      this.allpet_list = response.data;
      this.loadList = true;
    });
  },
  methods: {
    loadData() {
      axios
        .get(process.env.VUE_APP_ROOT_API + "adoption")
        .then((response) => (this.pet_list = response.data));
    },
    subSpecies(value) {
      if (value != null) {
        let uri_dog = process.env.VUE_APP_ROOT_API + "animal/" + value;
        this.$http.get(uri_dog).then((response) => {
          this.animal_list = response.data;
        });
      } else {
        let uri_dog = process.env.VUE_APP_ROOT_API + "animal/";
        this.$http.get(uri_dog).then((response) => {
          this.animal_list = response.data;
        });
      }
    },
  },
  computed: {
    filteredList: function () {
      return this.animal_list
        .filter((post) => {
          if (this.search != null) {
            return post.name.includes(this.search);
          } else {
            return (post = this.allpet_list);
          }
        })
        .slice(0, this.listToShow)
        .sort((a, b) => {
          let modifier = 1;
          if (this.sortType == "desc") modifier = -1;
          {
            if (a[this.sortedItem] < b[this.sortedItem]) {
              return -1 * modifier;
            }
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
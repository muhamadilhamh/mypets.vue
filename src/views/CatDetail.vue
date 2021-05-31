<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat"></h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/breeds/cat">
            <v-icon left> mdi-chevron-left </v-icon>
            All Breeds 'Cat'
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col md="5" offset-md="1">
          <v-card elevation="5">
            <v-card-title> {{ breeds_info[0].name }}</v-card-title>
            <v-card-text>
              {{ breeds_info[0].description }}
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="2" md="1">
                  <template v-if="!likeStatus">
                    <button @click="addLike(user.id)">
                      <v-rating
                        hover
                        background-color="grey darken-1"
                        color="#787878"
                        large
                        :empty-icon="emptyIcon"
                        :full-icon="fullIcon"
                        length="1"
                      >
                      </v-rating>
                    </button>
                  </template>
                  <template v-if="likeStatus">
                    <button @click="addLike(user.id)">
                      <v-rating
                        class="rating_cat"
                        hover
                        background-color="grey darken-1"
                        color="#EF5350"
                        large
                        :empty-icon="emptyIcon"
                        :full-icon="fullIcon"
                        length="1"
                        :value="1"
                      >
                      </v-rating>
                    </button>
                  </template>
                </v-col>
                <v-col cols="3" md="3">
                  <p class="rate">{{ breeds_info[0].user.length }}</p>
                </v-col>

                <v-col cols="4" md="4" class="type">
                  <p><span class="bold">Type:</span> Cat</p>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-img :src="breeds_info[0].picture"> </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-tabs>
        <v-tab class="title_fact">Key Fact</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key fact -->
          <v-col cols="12" md="12" class="text-center">
            <h3 class="desc_fact">Physical Attributes</h3>
          </v-col>
          <v-row>
            <v-col offset-md="1">
              <v-card outlined class="rounded-xl">
                <v-container>
                  <v-card-title class="justify-center">
                    <h3>Profile</h3>
                  </v-card-title>
                  <v-container>
                    <v-card-text class="text_desc">
                      <span class="bold">Lifespan:</span
                      >{{ breeds_info[0].lifespan }}
                    </v-card-text>
                    <v-card-text class="text_desc">
                      <span class="bold">Weight: </span
                      >{{ breeds_info[0].weight }}
                    </v-card-text>
                    <v-card-text class="text_desc">
                      <span class="bold">Size:</span> {{ breeds_info[0].size }}
                    </v-card-text>
                    <v-card-text class="text_desc">
                      <span class="bold">Origin:</span>
                      {{ breeds_info[0].origin }}
                    </v-card-text>
                  </v-container>
                </v-container>
              </v-card>

              <br />
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->
              <v-col md="5" offset-md="1">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Body</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ cat_detail.body }}
                    </v-card-text>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Head</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ cat_detail.head }}
                    </v-card-text>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Legs</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ cat_detail.legs_paws }}
                    </v-card-text>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Color</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ cat_detail.color }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>

              <v-col md="6">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Ears</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ cat_detail.ears }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Eyes</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ cat_detail.eyes }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Tail</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ cat_detail.tail }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Coat</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ cat_detail.coat }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- first -->
        <v-tab class="tit">History</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key History -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">History</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->

              <v-col md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-text class="text-center">
                      {{ breeds_info[0].description }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- Second -->
        <v-tab class="tit">Personality</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key Personality -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Personality</h3>
            </v-col>
          </v-row>

          <v-container>
            <v-row>
              <!--left side -->

              <v-col md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-text class="text-center">
                      {{ breeds_info[0].personality }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Characteristics</h3>
            </v-col>
          </v-row>

          <v-container>
            <v-row>
              <!--left side -->

              <v-col md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-text class="text-center">
                      {{ breeds_info[0].characteristics }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Health</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->

              <v-col md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-text class="text-center">
                      {{ breeds_info[0].health }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!--Third -->
        <v-tab class="tit">Characteristics</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key Characteristics -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Characteristics</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <v-col md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <div class="pa-5">
                    <v-container>
                      <v-row>
                        <v-col md="6">
                          <h5>Activity</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.activity_level"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Attention</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.attention"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Hardiness</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.hardiness"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Affection to Owners</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.affection_owner"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Playfulness</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.playfulness"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Grooming</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.grooming"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Friendliness To Children</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.friends_children"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Independence</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.independence"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Friendliness To Other Pets</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.friends_pet"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Docility</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.docility"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Intelligence</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.intelligence"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col md="6">
                          <h5>Vocality</h5>
                          <v-rating
                            hover
                            v-model="cat_detail.vocality"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!--Fourth-->
        <v-tab class="tit"> Moment {{ moments.length }}</v-tab>
        <v-tab-item class="konten_fact">
          <v-row>
            <v-col v-for="item in moments" :key="item.id" md="12">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-icon left> mdi-cat </v-icon>
                    <v-card-title class="hidden-xs-only">
                      {{ item.title }}</v-card-title
                    >

                    <v-card-list>
                      <v-card-subtitle class="hidden-xs-only"
                        >{{ item.publish_time}}
                      </v-card-subtitle>
                    </v-card-list>
                    <v-card-list>
                      <v-btn
                        small
                        class="moment_page"
                        elevation="5"
                        color="#489FB5"
                        rounded
                        dark
                        :to="{
                          name: 'momentdetail',
                          params: { id_moment: item.id },
                        }"
                        >Go to Moment Page</v-btn
                      ></v-card-list
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-col class="justify-center">
                      <v-img
                        :src="url + item.picture"
                        class="rounded-lg img_care"
                      >
                      </v-img>
                    </v-col>
                    <h4>Description</h4>
                    <v-card-text>{{ item.description }}</v-card-text>
                    <h4>Location</h4>
                    <v-card-text>{{ item.location }}</v-card-text>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab class="tit"> Comments</v-tab>
        <v-tab-item>
          <section class="comments" aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus shortname="mypets-1" /></section
        ></v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Disqus } from "vue-disqus";
export default {
  nama: "CatDetail",
  components: {
    Disqus,
  },
  created() {
    this.$emit("update:layout", "div");
  },
  data() {
    return {
      url: process.env.VUE_APP_IMAGE_URL,
      breeds_info: [],
      actifity: 5,
      cat_detail: [{}],
      likeStatus: false,
      attention: 4,
      Hardiness: 2,
      Affection: 4,
      playfulness: 5,
      groom: 2,
      independence: 3,
      friendlinessChild: 2,
      friendlinessOther: 3,
      docility: 1,
      intelligence: 4,
      moments: [],
      vocality: 1,
      emptyIcon: "mdi-heart-outline",
      fullIcon: "mdi-heart ",
    };
  },
  mounted() {
    let uri_cat =
      process.env.VUE_APP_ROOT_API +
      "animal/cat/details/" +
      this.$route.params.slug;
    this.$http
      .get(uri_cat)
      .then((response) => {
        this.cat_detail = response.data;
      })
      .catch((error) => {
        if (error.response.status === 404) this.$router.push("/error");
      });
    let uri =
      process.env.VUE_APP_ROOT_API + "animal/cat/" + this.$route.params.slug;
    this.$http.get(uri).then((response) => {
      this.breeds_info = response.data;
    });
    let uri_moment =
      process.env.VUE_APP_ROOT_API + "moment/" + this.$route.params.slug;
    this.$http.get(uri_moment).then((response) => {
      this.moments = response.data;
    }),
      this.getLikeStatus();
  },
  methods: {
    getLikeStatus() {
      if (this.isLoggedIn) {
        let uri =
          process.env.VUE_APP_ROOT_API +
          "animal/like/" +
          this.$route.params.slug +
          "/" +
          this.user.id;
        this.$http.get(uri).then((response) => {
          this.likeStatus = response.data.message;
        });
      } else {
        this.likeStatus = false;
      }
    },
    addLike(id) {
      if (this.isLoggedIn) {
        let uri =
          process.env.VUE_APP_ROOT_API +
          "animal/like/" +
          this.$route.params.slug +
          "/" +
          this.user.id;
        this.$http
          .post(uri, id)
          .then((response) => {
            let uri_pet =
              process.env.VUE_APP_ROOT_API +
              "animal/cat/" +
              this.$route.params.slug;
            this.getLikeStatus();
            this.$http.get(uri_pet).then((response) => {
              this.breeds_info = response.data;
            });
          })
          .catch((error) => (this.errors = error.response.data.message));
      } else {
        this.$swal({
          icon: "error",
          confirmButtonColor: "#3085d6",
          text: "You need to login first before doing this action",
          confirmButtonText: "Confirm",
        });
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      user: "user",
    }),
  },
};
</script>

<style>
.title_cat {
  position: absolute;
  right: 45%;
  left: 45%;
  font-size: 1rem;
}
.btn_back {
  text-transform: capitalize;
}
.bold {
  font-weight: bold;
}
.konten_fact {
  margin-top: 2%;
}
.v-tab {
  text-transform: none !important;
}
.text_desc {
  padding: 2%;
  text-align: center;
}
.desc_fact {
  text-align: center;
  font-size: 1.5rem;
}
.img_care {
  width: 800px;
  height: 400px;
}
.moment_page {
  text-transform: capitalize;
}
</style>


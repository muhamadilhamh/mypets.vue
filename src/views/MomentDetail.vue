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
          <v-btn rounded depressed class="btn_back" to="/">
            <v-icon left> mdi-chevron-left </v-icon>
            Back to Home
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col offset-md="2" cols="12">
          <p class="adop_detail">{{ breeds_info.user.username }}'s Moment</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-md="2">
          <p class="tgl">Post Time : {{ breeds_info.time }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-md="2">
          <p class="title_adop">{{ breeds_info.title }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-sm="2" md="8">
          <v-row>
            <v-col cols="6" sm="2">
              <ShareNetwork
                network="facebook"
                :url="current_url"
                :title="breeds_info.name + 'Adoption'"
                description="Wow guys look, this pet is so cute!! found it on MyPets website"
                quote="Wow guys look, this pet is so cute!! found it on MyPets website"
                hashtags="adoption,pet,breeds,animal"
                tag="v-btn"
              >
                <v-btn outlined rounded color="#3b5998">
                  <v-icon>mdi-facebook</v-icon> Share
                </v-btn>
              </ShareNetwork>
            </v-col>
            <v-col cols="6" sm="2">
              <ShareNetwork
                network="twitter"
                :url="current_url"
                :title="
                  breeds_info.title +
                  ' - Wow guys look, this pet is so cute!! found it on MyPets website'
                "
                hashtags="moment,pet,breeds,animal"
                tag="v-btn"
              >
                <v-btn outlined rounded color="#00acee">
                  <v-icon>mdi-twitter</v-icon> Share
                </v-btn>
              </ShareNetwork>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-carousel height="500px" hide-delimiters class="hidden-xs-only">
        <v-carousel-item v-for="(item, i) in breeds_info.image" :key="i">
          <v-img class="rounded-lg" :src="url + item.img"> </v-img
        ></v-carousel-item>
      </v-carousel>
      <v-carousel height="400px" hide-delimiters class="hidden-sm-and-up">
        <v-carousel-item v-for="(item, i) in breeds_info.image" :key="i">
          <v-img class="rounded-lg" :src="url + item.img" height="400px">
          </v-img
        ></v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <v-container>
        <v-row>
          <!--left side -->
          <v-col md="9" sm="12">
            <v-card
              outlined
              class="rounded-xl"
              v-for="item in category"
              :key="item.id"
            >
              <v-container>
                <v-card-title>
                  <h2>About Moment</h2>
                </v-card-title>
                <hr class="hr" />
                <hr class="hr" />
                <v-card-subtitle>
                  <v-row>
                    <v-col md="3" sm="3">
                      <v-chip color="#489FB5" dark>
                        <p class="testing">{{ breeds_info.animal_name }}</p>
                      </v-chip>
                    </v-col>
                    <v-col md="3" sm="3">
                      <v-chip color="#489FB5" dark>
                        <p class="testing">{{ breeds_info.gender }}</p></v-chip
                      >
                    </v-col>
                    <v-col md="3" sm="3">
                      <v-chip color="#489FB5" dark>
                        <p class="testing">{{ breeds_info.gender }}</p></v-chip
                      >
                    </v-col>

                    <v-col md="2" sm="4">
                      <div v-if="breeds_info.animal_name == 'Dog'">
                        <router-link
                          :to="{
                            name: 'dogdetail',
                            params: { slug: breeds_info.animal_type },
                          }"
                          style="text-decoration: none"
                          ><v-chip color="#489FB5" dark
                            ><p class="testing">
                              {{ breeds_info.animal_type }}
                            </p></v-chip
                          ></router-link
                        >
                      </div>
                      <div v-if="breeds_info.animal_name == 'Cat'">
                        <router-link
                          :to="{
                            name: 'catdetail',
                            params: { slug: breeds_info.animal_type },
                          }"
                          style="text-decoration: none"
                          ><v-chip color="#489FB5" dark
                            ><p class="testing">
                              {{ breeds_info.animal_type }}
                            </p></v-chip
                          ></router-link
                        >
                      </div>
                    </v-col>
                    <v-col md="3" sm="5">
                      <v-chip color="#489FB5" dark
                        ><p class="testing">
                          {{ breeds_info.location }}
                        </p></v-chip
                      >
                    </v-col>
                  </v-row>
                </v-card-subtitle>

                <hr class="hr" />
                <hr class="hr" />

                <v-card-text> {{ breeds_info.description }}. </v-card-text>
                <v-card-text> Date : {{ breeds_info.date }} </v-card-text>

                <section class="comments" aria-labelledby="comment">
                  <h2 id="comment">Comments</h2>
                  <Disqus shortname="mypets-1" />
                </section>
              </v-container>
            </v-card>
          </v-col>

          <v-col md="3" sm="12">
            <v-card outlined class="rounded-xl">
              <v-container>
                <v-card-actions>
                  <v-list-item-avatar>
                    <v-img class="elevation-6" :src="url + breeds_info.picture">
                    </v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item class="name_user">
                      {{ breeds_info.full_name }}
                    </v-list-item>
                  </v-list-item-content>
                </v-card-actions>
                <v-card-actions>
                  <v-btn
                    block
                    :to="{
                      name: 'profile',
                      params: { username: breeds_info.username },
                    }"
                    large
                    color="#489FB5"
                    rounded
                    dark
                    elevation="9"
                  >
                    About Profile
                  </v-btn>
                </v-card-actions>
                <v-card-actions> </v-card-actions>
              </v-container>
            </v-card>
            <br />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Disqus } from "vue-disqus";
export default {
  components: {
    Disqus,
  },
  nama: "CatDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  data() {
    return {
      dialog: false,
      current_url: "mypets-vue.netlify.app" + this.$router.currentRoute.path,
      url: process.env.VUE_APP_IMAGE_URL,
      breeds_info: [],
      breeds_images: [],
      category: [
        {
          id: 1,
          profile: "testing",
          animaltype: "Cat",
          gender: "Female",
          age: "1 years",
          jenis: "Persian",
          location: "DKI Jakarta",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eaque, modi ipsa quae consectetur esse molestiae iure, aut doloremque veritatis laboriosam fugiat assumenda? Animi rem tenetur hic, temporibus qui quasi.",
          gmail: "duniagenggamanmu@gmail.com",
          phone: "0811223456789 ",
        },
      ],

      emptyIcon: "mdi-heart-outline",
      fullIcon: "mdi-heart ",
    };
  },
  mounted() {
    let uri =
      process.env.VUE_APP_ROOT_API +
      "moment/detail/" +
      this.$route.params.id_moment;
    this.$http
      .get(uri)
      .then((response) => {
        this.breeds_info = response.data;
      })
      .catch((error) => {
        if (error.response.status === 404) this.$router.push("/error");
      });
  },
  methods: {
    addInterest() {
      this.dialog = false;
      let uri =
        process.env.VUE_APP_ROOT_API +
        "adoption/" +
        this.$route.params.id_adoption +
        "/" +
        this.current_user.id +
        "/interest";
      this.$http.post(uri).then((response) => {
        let uri_breed =
          process.env.VUE_APP_ROOT_API +
          "adoption/detail/" +
          this.$route.params.id_adoption;
        this.$http.get(uri_breed).then((response) => {
          this.breeds_info = response.data;
        });
      });
    },
    redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      current_user: "user",
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
.hr {
  height: 0.4px;
  border-width: 0;
  background-color: #eeeeee;
}
.testing {
  padding-top: 15px;
}
.phone {
  margin-top: -35px;
}
.adop_detail {
  font-size: 1.8rem;
  font-weight: 500;
  color: #515151;
  opacity: 75%;
  letter-spacing: 2%;
  line-height: 3%;
  margin-top: 20px;
}
.tgl {
  font-size: 1rem;
  font-weight: 300;
  color: #515151;
  opacity: 50%;
  letter-spacing: 2%;
  line-height: 3%;
}
.title_adop {
  margin-top: 20px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #515151;
  letter-spacing: 2%;
  line-height: 3%;
}
.fb,
.tw,
.ig,
.link {
  margin-top: 20px;
}
.tw {
  margin-left: -80px;
}
.ig {
  margin-left: -160px;
}
.link {
  margin-left: -240px;
}
</style>
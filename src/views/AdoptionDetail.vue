<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">Adoption</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/adoption">
            <v-icon left> mdi-chevron-left </v-icon>
            All Adoption
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col offset="2">
          <p class="adop_detail">Adoption Detail</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <p class="tgl">{{ breeds_info.time }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <p class="title_adop">{{ breeds_info.name }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
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
                title="Wow guys look, this pet is so cute!! found it on MyPets website"
                description="Wow guys look, this pet is so cute!! found it on MyPets website"
                quote="Wow guys look, this pet is so cute!! found it on MyPets website"
                hashtags="adoption,pet,breeds,animal"
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
     
      <v-carousel hide-delimiters class="hidden-xs-only">
        <v-carousel-item v-for="(item, i) in breeds_images" :key="i">
          <v-img class="rounded-lg" :src="url + item.img"> </v-img
        ></v-carousel-item>
      </v-carousel>
      <v-carousel height="400px" hide-delimiters class="hidden-sm-and-up">
        <v-carousel-item v-for="(item, i) in breeds_images" :key="i">
          <v-img class="rounded-lg" :src="url + item.img" height="400px">
          </v-img
        ></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <v-container>
        <v-row>
          <!--left side -->
          <v-col lg="9" sm="12">
            <v-card outlined class="rounded-xl">
              <v-container>
                <v-card-title>
                  <h3>About Pet</h3>
                </v-card-title>
                <hr class="hr" />
                <hr class="hr" />
                <v-card-subtitle>
                  <v-row>
                    <v-col lg="3" sm="3">
                      <v-chip color="#489FB5" dark>
                        <p class="testing">{{ breeds_info.animal_name }}</p>
                      </v-chip>
                    </v-col>
                    <v-col lg="3" sm="3">
                      <v-chip color="#489FB5" dark>
                        <p class="testing">{{ breeds_info.gender }}</p></v-chip
                      >
                    </v-col>
                    <v-col md="3" sm="3">
                      <v-chip color="#489FB5" dark>
                        <p class="testing">
                          {{ breeds_info.age }} Months
                        </p></v-chip
                      >
                    </v-col>

                    <v-col md="3" sm="4">
                      <v-chip color="#489FB5" dark
                        ><p class="testing">
                          {{ breeds_info.animal_type }}
                        </p></v-chip
                      >
                    </v-col>
                    <v-col md="3" sm="5">
                      <v-chip color="#489FB5" dark
                        ><p class="testing">
                          {{ breeds_info.location }}
                        </p></v-chip
                      >
                    </v-col>
                    <v-col md="3" sm="5">
                      <v-chip color="#489FB5" dark
                        ><p class="testing">{{ breeds_info.health }}</p></v-chip
                      >
                    </v-col>
                    <v-col md="3" sm="3">
                      <v-chip color="#489FB5" dark
                        ><p class="testing">{{ breeds_info.color }}</p></v-chip
                      >
                    </v-col>
                  </v-row>
                </v-card-subtitle>

                <hr class="hr" />
                <hr class="hr" />

                <v-card-text> {{ breeds_info.description }}. </v-card-text>

                <v-col md="6">
                  <v-card outlined class="rounded-xl">
                    <v-card-title class="justify-center">
                      Adopt now
                    </v-card-title>
                    <v-card-actions class="phone">
                      <v-list-item-avatar>
                        <v-icon color="#EA4335"> mdi-gmail </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item>
                          <v-btn
                            class="ma-2 btn_sosmed"
                            color="#4285F4"
                            small
                            dark
                          >
                            <v-icon left> mdi-email</v-icon>
                            <ShareNetwork
                              network="email"
                              :url="current_url"
                              :title="'Adoption Request ' + breeds_info.name"
                              description="Hey, I am interested in adopting pet that you posted on mypets website"
                              tag="v-btn"
                            >
                              {{ breeds_info.email }}
                            </ShareNetwork></v-btn
                          >
                        </v-list-item>
                      </v-list-item-content>
                    </v-card-actions>
                    <v-card-actions class="phone">
                      <v-list-item-avatar>
                        <v-icon
                          color="success"
                         
                        >
                          mdi-whatsapp
                        </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item>
                          <template v-if="breeds_info.user.whatsapp == 1"
                            ><v-btn
                              class="ma-2"
                              color="success"
                              small
                              @click="
                                redirect(
                                  'https://api.whatsapp.com/send?phone=62' +
                                    breeds_info.phone +
                                    '&text=Hey, I am interested in adopting pet that you posted on mypets website ' +
                                    current_url
                                )
                              "
                            >
                              <v-icon left>mdi-whatsapp</v-icon>
                              {{ breeds_info.phone }}</v-btn
                            ></template
                          >
                          <template v-if="breeds_info.user.whatsapp == 0"
                            >
                              {{ breeds_info.phone }}
                            </template
                          >
                        </v-list-item>
                      </v-list-item-content>
                    </v-card-actions>
                    <v-card-actions class="phone">
                      <v-list-item-avatar>
                        <v-icon> mdi-heart </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item v-if="breeds_info.interest">
                          {{ breeds_info.interest.length }} Peoples interested
                          to adopt this pet
                        </v-list-item>
                        <v-list-item v-if="!breeds_info.interest">
                          {{ breeds_info.interest.length }} Peoples interested
                          to adopt this pet
                        </v-list-item>
                      </v-list-item-content>
                    </v-card-actions>
                  </v-card>
                </v-col>
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
                <v-card-actions>
                  <v-btn
                    v-if="!interest_status"
                    block
                    large
                    color="#489FB5"
                    rounded
                    dark
                    @click="dialog = true"
                    elevation="9"
                  >
                    Plan to Adopt
                  </v-btn>
                  <v-btn
                    v-if="interest_status"
                    block
                    large
                    color="#489FB5"
                    rounded
                    dark
                    @click="addInterest()"
                    elevation="9"
                  >
                    Cancel Adoption Plan
                  </v-btn>
                  <v-dialog v-model="dialog" max-width="500">
                    <v-card>
                      <v-card-title class="headline">
                        Are you sure you really plan to adopt this pet
                      </v-card-title>

                      <v-card-text>
                        Please make sure you will contact the owner regarding
                        this pet about adoption, otherwise this pet will be sad
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          No
                        </v-btn>

                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = addInterest()"
                        >
                          Yes
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
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
export default {
  nama: "CatDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  mounted() {
    let uri =
      process.env.VUE_APP_ROOT_API +
      "adoption/detail/" +
      this.$route.params.id_adoption;
    this.$http
      .get(uri)
      .then((response) => {
        this.breeds_info = response.data;
      })
      .catch((error) => {
        if (error.response.status === 404) this.$router.push("/error");
      });
    let uri_img =
      process.env.VUE_APP_ROOT_API +
      "adoption/detail/" +
      this.$route.params.id_adoption +
      "/images";
    this.$http.get(uri_img).then((response) => {
      this.breeds_images = response.data;
    });
    this.getLikeStatus();
  },
  data() {
    return {
      dialog: false,
      current_url: "animox-mypets.netlify.app" + this.$router.currentRoute.path,
      url: process.env.VUE_APP_IMAGE_URL,
      breeds_info: [{}],
      breeds_images: [],
      interest_status: false,

      emptyIcon: "mdi-heart-outline",
      fullIcon: "mdi-heart ",
    };
  },
  methods: {
    getLikeStatus() {
      if (this.isLoggedIn) {
        let uri =
          process.env.VUE_APP_ROOT_API +
          "adoption/" +
          this.$route.params.id_adoption +
          "/" +
          this.current_user.id +
          "/interest";
        this.$http.get(uri).then((response) => {
          this.interest_status = response.data.message;
        });
      } else {
        this.interest_status = false;
      }
    },
    addInterest() {
      this.dialog = false;
      if (this.isLoggedIn) {
        let uri =
          process.env.VUE_APP_ROOT_API +
          "adoption/" +
          this.$route.params.id_adoption +
          "/" +
          this.current_user.id +
          "/interest";
        this.$http.post(uri).then((response) => {
          this.interest_status = !this.interest_status;
          let uri_breed =
            process.env.VUE_APP_ROOT_API +
            "adoption/detail/" +
            this.$route.params.id_adoption;
          this.$http.get(uri_breed).then((response) => {
            this.breeds_info = response.data;
          });
        });
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
.btn_sosmed {
  text-transform: capitalize;
}
.img_desktop {
  clip-path: inset(1px 5px 50px round 15px 0);
}
</style>
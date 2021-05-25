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
          <p class="tgl">{{breeds_info.time}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <p class="title_adop">{{breeds_info.name}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2" cols="2" class="fb">
          <v-btn outlined rounded>
            <v-icon left>mdi-facebook</v-icon> Share
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn outlined rounded class="tw">
            <v-icon left>mdi-twitter</v-icon> Share
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn outlined rounded class="ig">
            <v-icon left>mdi-instagram</v-icon> Share
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn outlined rounded class="link">
            <v-icon left>mdi-link-variant</v-icon> Copy Link
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-carousel height="1000px" hide-delimiters>
        <v-carousel-item
      v-for="(item,i) in breeds_images"
      :key="i"
    >
    
      <v-img class="rounded-lg" :src="url + item.img"> </v-img></v-carousel-item>
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
                  <h2>About Pet</h2>
                </v-card-title>
                <hr class="hr" />
                <hr class="hr" />
                <v-card-subtitle>
                  <v-row>
                    <v-col cols="2" md="2" sm="4">
                      <v-chip>
                        <p class="testing">{{ breeds_info.animal_name }}</p>
                      </v-chip>
                    </v-col>
                    <v-col cols="2" md="2" sm="4">
                      <v-chip>
                        <p class="testing">{{ breeds_info.gender }}</p></v-chip
                      >
                    </v-col>
                    <v-col cols="2" md="2" sm="4">
                      <v-chip>
                        <p class="testing">{{ breeds_info.age }}</p></v-chip
                      >
                    </v-col>

                    <v-col cols="2" md="2" sm="4">
                      <v-chip
                        ><p class="testing">{{ breeds_info.animal_type }}</p></v-chip
                      >
                    </v-col>
                    <v-col cols="3" md="3" sm="5">
                      <v-chip
                        ><p class="testing">{{ breeds_info.location }}</p></v-chip
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
                        <v-icon> mdi-gmail </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item> {{ breeds_info.email }} </v-list-item>
                      </v-list-item-content>
                    </v-card-actions>
                    <v-card-actions class="phone">
                      <v-list-item-avatar>
                        <v-icon> mdi-phone </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item> {{ breeds_info.phone }} </v-list-item>
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
                   
                    <v-img
                      class="elevation-6"
                      :src="url + breeds_info.picture"
                    >
                    </v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item class="name_user"> {{breeds_info.full_name}} </v-list-item>
                  </v-list-item-content>
                </v-card-actions>
                <v-card-actions>
                  <v-btn
                    block
                   :to="{ name: 'profile', params: { username : breeds_info.username } }"
                    large
                    color="#489FB5"
                    rounded
                    dark
                    elevation="9"
                  >
                    About Profile
                  </v-btn>
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
export default {
  nama: "CatDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  data() {
    return {
    url : process.env.VUE_APP_IMAGE_URL,
    breeds_info: [],
    breeds_images : [],
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
  }
  },
  mounted() {
    let uri = process.env.VUE_APP_ROOT_API + "adoption/detail/" + this.$route.params.id_adoption;
    this.$http.get(uri).then((response) => {
      this.breeds_info = response.data;
    });
    let uri_img = process.env.VUE_APP_ROOT_API + "adoption/detail/" + this.$route.params.id_adoption + "/images";
    this.$http.get(uri_img).then((response) => {
      this.breeds_images = response.data;
    }); 
  },
  methods: {
    loadData() {
      let uri = process.env.VUE_APP_ROOT_API + "animal/dog/" + this.$route.params.slug;
      this.$http.get(uri).then((response) => {
        this.breeds_info = response.data;
      });
    },
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
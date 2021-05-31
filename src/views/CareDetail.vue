<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">Care & Trainng</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/care_training">
            <v-icon left> mdi-chevron-left </v-icon>
            All Care & Training
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col offset="2">
          <p class="adop_detail">Care & Training Detail</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <p class="tgl">{{ care_info.date }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2" class="hidden-xs-only">
          <p class="title_adop">{{ care_info.title }}</p>
        </v-col>
        <v-col offset="2" class="d-sm-none">
          <p class="title_adop_respn">{{ care_info.title }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <v-row>
            <v-col cols="6" sm="2">
              <ShareNetwork
                network="facebook"
                :url="current_url"
                :title="care_info.title + 'Adoption'"
                description="Wow guys look, this pet is so cute!! found it on MyPets website"
                quote="Wow guys look, this pet is so cute!! found it on MyPets website"
                hashtags="pet_treatment"
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
                  care_info.title +
                  ' - This post really helpful guys! You should check it at MyPets website!'
                "
                hashtags="animal_care,pet,breeds,animal"
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
      <v-col cols="12" offset-md="2">
        <v-img class="rounded-lg img_care" :src="care_info.picture"> </v-img>
      </v-col>
    </v-container>

    <v-container>
      <v-col cols="12" md="9" offset-md="2">
        <v-card outlined class="rounded-lg" width="800px" elevation="1">
          <v-col cols="12" md="10" offset-md="1" class="justify-center">
            <p class="mt-5" style="white-space: pre-line">
              {{ care_info.description }}
            </p>
          </v-col>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  nama: "CareDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  data() {
    return {
      care_info: [],
      current_url: "animox-vue.netlify.app" + this.$router.currentRoute.path,
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
      "care_training/" +
      this.$route.params.id_care +
      "/details";
    this.$http
      .get(uri)
      .then((response) => {
        this.care_info = response.data;
      })
      .catch((error) => {
        if (error.response.status === 404) this.$router.push("/error");
      });
  },
  methods: {},
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
.title_adop_respn {
  margin-top: 20px;
  font-size: 1.7rem;
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
.img_care {
  width: 800px;
  height: 500px;
}
</style>
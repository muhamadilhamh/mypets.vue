<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">Article</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/article">
            <v-icon left> mdi-chevron-left </v-icon>
            All Article
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col offset="2">
          <p class="adop_detail">Article Detail</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <p class="tgl">{{ article_info.date }}</p>
        </v-col>
      </v-row>
      <v-col offset="2" class="hidden-xs-only">
        <p class="title_adop">
          {{ article_info.title }}
        </p>
      </v-col>
      <v-col offset="2" class="d-sm-none">
        <p class="title_respn_art">
          {{ article_info.title }}
        </p>
      </v-col>

      <v-row>
        <v-col offset="2">
          <v-row>
            <v-col cols="6" sm="2">
              <ShareNetwork
                network="facebook"
                :url="current_url"
                :title="article_info.title + 'Article'"
                description="This post really helpful guys! You should check it at MyPets website!"
                quote="This post really helpful guys! You should check it at MyPets website!"
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
                  article_info.title +
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
        <v-img class="rounded-lg img_care" :src="article_info.picture"> </v-img>
      </v-col>
    </v-container>

    <v-container>
      <v-col cols="12" md="9" offset-md="2">
        <v-card outlined class="rounded-lg" width="800px" elevation="1">
          <v-col cols="12" md="10" offset-md="1" class="justify-center">
            <p class="mt-5" style="white-space: pre-line">
              {{ article_info.description }}
            </p>
          </v-col>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  nama: "ArticleDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  data() {
    return {
      article_info: [],
      current_url: "animox-mypets.netlify.app" + this.$router.currentRoute.path,
    };
  },
  mounted() {
    let uri =
      process.env.VUE_APP_ROOT_API +
      "article/" +
      this.$route.params.id_article +
      "/details";
    this.$http
      .get(uri)
      .then((response) => {
        this.article_info = response.data;
      })
      .catch((error) => {
        if (error.response.status === 404) this.$router.push("/error");
      });
  },
  methods: {
    loadData() {
      let uri =
        "http://localhost:8000/api/animal/dog/" + this.$route.params.slug;
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
.img_care {
  width: 800px;
  height: 500px;
}
.title_respn_art {
  margin-top: 20px;
  margin-right: 20px;
  font-size: auto;
  font-weight: 700;
  color: #515151;
  letter-spacing: 2%;
  line-height: 3%;
}
</style>
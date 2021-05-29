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
          <p class="tgl">{{article_info.publish_time}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <p class="title_adop">{{article_info.title}}</p>
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
      <v-col cols="12" offset-md="2">
        <v-img
          class="rounded-lg img_care"
          :src="article_info.picture"
          
        >
        </v-img>
      </v-col>
    </v-container>

    <v-container>
      <v-col cols="12" md="6" offset-md="2">
      <v-card outlined class="rounded-xl" width="800px" elevation="2" >
        
          <v-col cols="12" md="10" offset-md="1" class="justify-start ">
            <p  class="mt-5" style="white-space: pre-line">
          {{article_info.description}}
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
  data: () => ({
    article_info: [],
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
  }),
  mounted() {
    let uri = process.env.VUE_APP_ROOT_API + 'article/' + this.$route.params.id_article + '/details';
    this.$http.get(uri).then((response) => {
      this.article_info = response.data;
    }).catch(error => {
      if(error.response.status === 404)
        this.$router.push("/error")
    }
    )
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
</style>
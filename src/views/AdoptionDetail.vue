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
{{current_url}}ss
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
      <v-col offset-sm="2" md="8">
        <v-row>       
           <v-col  cols="6" sm="2">
          <ShareNetwork
    network="facebook"
    :url="current_url"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  tag="v-btn">
          <v-btn outlined rounded>
<v-icon>mdi-facebook</v-icon> Share

            
          </v-btn>
</ShareNetwork>
        </v-col>
        <v-col  cols="6" sm="2">
          <ShareNetwork
    network="twitter"
    :url="current_url"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  tag="v-btn">
          <v-btn outlined rounded>
<v-icon>mdi-twitter</v-icon> Share

            
          </v-btn>
</ShareNetwork>
        </v-col>
        <v-col  cols="6" sm="2">
          <ShareNetwork
    network="facebook"
    :url="current_url"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  tag="v-btn">
          <v-btn outlined rounded>
<v-icon>mdi-instagram</v-icon> Share

            
          </v-btn>
</ShareNetwork>
        </v-col>
        <v-col cols="6" md="2">
          <v-btn outlined rounded>
            <v-icon left>mdi-link-variant</v-icon> Copy Link
          </v-btn>
        </v-col>
        </v-row>
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
                        <p class="testing">{{ breeds_info.age }} Months</p></v-chip
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
                        <v-list-item> {{ breeds_info.email }} 
                          <v-btn class="ma-2" color="blue-grey" small >
                            <v-icon left> mdi-email</v-icon>
                          <ShareNetwork
    network="email"
    :url="current_url"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
     tag="v-btn"
  >
  Send Me an Email
</ShareNetwork></v-btn>
                        </v-list-item>
                      </v-list-item-content>
                      
                    </v-card-actions>
                    <v-card-actions class="phone">
                      <v-list-item-avatar>
                        <v-icon> mdi-phone </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item> {{ breeds_info.phone }} 
                          
                        <template v-if="breeds_info.user.whatsapp == 1"><v-btn  class="ma-2" color="success" small @click="redirect('https://api.whatsapp.com/send?phone=62' + breeds_info.phone)"> <v-icon left>mdi-whatsapp</v-icon> Reach me on Whatsapp</v-btn></template>
                        </v-list-item>
                      </v-list-item-content>
                    </v-card-actions>
                     <v-card-actions class="phone">
                      <v-list-item-avatar>
                        <v-icon> mdi-eye </v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item v-if ="breeds_info.interest"> {{ breeds_info.interest.length }} Peoples interested to adopt this pet </v-list-item>
                        <v-list-item v-if ="!breeds_info.interest"> {{ breeds_info.interest.length }} Peoples interested to adopt this pet </v-list-item>
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
                   <v-card-actions>
                  <v-btn
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
                  <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
       Are you sure you really plant to adopt this
        </v-card-title>

        <v-card-text>
          Please make sure you will contact the owner regarding this pet about adoption, otherwise this pet will be sad
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
import { mapGetters } from 'vuex'
export default {
  nama: "CatDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  data() {
    return {
      dialog : false,
      current_url : 'mypets-vue.netlify.app' + this.$router.currentRoute.path,
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
  methods : {
   addInterest(){
     this.dialog = false;
     let uri = process.env.VUE_APP_ROOT_API + "adoption/" + this.$route.params.id_adoption + "/" + this.current_user.id + "/interest"
     this.$http.post(uri).then((response) => {
       let uri_breed = process.env.VUE_APP_ROOT_API + "adoption/detail/" + this.$route.params.id_adoption;
    this.$http.get(uri_breed).then((response) => {
      this.breeds_info = response.data;
    });
     })
   },
   redirect: function (link, target = '_blank') {
            window.open(link, target);
        } 
  },
  computed : {
    ...mapGetters({ 
        isLoggedIn: 'isLoggedIn',
        current_user: 'user',
      })
  }
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
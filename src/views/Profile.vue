<template>
  <div>
    <v-row>
      
    <notifications group="foo" position="center"/>
      <v-col>
        <img
          :src="url +   user.picture"
          alt="John"
          class="img_profil"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="title_name">{{user.full_name}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="no_telp">{{user.phone}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="location_profile">{{user.location}} , Indonesia</p>
      </v-col>
    </v-row>
    <div v-if="isLoggedIn">
    <v-row v-if="current_user.id === user.id">
      <v-col class="edit">
        <v-btn outlined rounded :to="{ name: 'updateprofile', params: { id : user.id } }" >
          <v-icon left>mdi-pencil</v-icon> Edit Profile
        </v-btn>
      </v-col>
    </v-row>
    </div>
    <v-container>
      <div v-if="isLoggedIn">
      <v-row v-if="current_user.id === user.id">
        <v-col cols="4" md="4" sm="4" class="edit_adop">
          <v-btn outlined rounded to="/uploadadoption">
            <v-icon left>mdi-upload</v-icon> Adoption
          </v-btn>
        </v-col>
        <v-col cols="4" md="4" sm="4" class="edit_moment">
          <v-btn outlined rounded to="/uploadmoment">
            <v-icon left>mdi-upload</v-icon> Moment
          </v-btn>
        </v-col>
        <v-col cols="4" md="4" sm="4" class="edit_vaccine">
          <v-btn outlined rounded to="/uploadvaccine">
            <v-icon left>mdi-upload</v-icon> Vaccine
          </v-btn>
        </v-col>
      </v-row>
      </div>
    </v-container>

    <br />
    <v-container>
      <v-tabs class="tab">
        <!-- Adoption -->
        <v-tab
          ><p>Adoption</p>
          <p class="score">{{feed_adop.length}}</p>
        </v-tab>
        <v-tab-item class="tab_item">
          <v-container>
            <v-row>
              <v-col v-for="item in feed_adop" :key="item.id" cols="12" sm="4">
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-hover v-slot="{ hover }">
                      <v-card flat tile class="mx-auto">
                        <router-link :to="'/adoptiondetail'">
                          <v-img
                            class="rounded"
                            :src="url + item.picture"
                            aspect-ratio="1.5"
                          >
                            <v-expand-transition>
                              <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out blue-grey darken-3 v-card--reveal display-5 white--text"
                                style="height: 25%"
                              >
                                <v-if item.animal_name="Dog">
                                  <v-icon small left color="#fff">
                                    mdi-dog</v-icon
                                  >
                                </v-if>
                                {{ item.title }}
                                <div v-if="item.gender == 'Male'">
                                  <v-icon small left color="#fff">
                                    mdi-gender-male
                                  </v-icon>
                                </div>
                                <div v-else>
                                  <v-icon small left color="#fff">
                                    mdi-gender-female
                                  </v-icon>
                                </div>
                                {{ item.age }} Years Old
                              </div>
                            </v-expand-transition>
                          </v-img>
                        </router-link>

                        <v-card-actions>
                          <v-menu offset-y v-if="isLoggedIn">
                            <template v-slot:activator="{ on }">
                              <v-btn class="mx-2" rounded icon small v-on="on">
                                <v-icon dark> mdi-pencil </v-icon>
                              </v-btn>
                            </template>
                            <v-list>
                              <v-list-item>
                                <v-icon left> mdi-delete </v-icon>
                                <v-btn to="" x-small color="orange" text @click.stop="openDialog('adoption',item.id) ">
                                  delete
                                </v-btn>
                              </v-list-item>
                              <v-list-item>
                                <v-icon left> mdi-plus</v-icon>
                                <v-btn to="" x-small color="orange" text>
                                  update
                                </v-btn>
                              </v-list-item>
                            </v-list>
                          </v-menu>

                          <v-card-title>
                            {{ item.owner }}
                          </v-card-title>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- Share Moment -->
        <v-tab>
          <p>Moment</p>
          <p class="score">{{moment.length}}</p></v-tab
        >
        <v-tab-item class="tab_item">
          <v-row>
            <v-col cols="12" md="4" sm="4" v-for="item in moment" :key="item">
              
              <v-card class="mx-auto rounded-lg" elevation="8" max-width="400">
                <v-img
                  :src="url + item.picture"
                ></v-img>

                <v-card-title class="title_momment">
                  {{ item.title }}
                  <!-- Login -->
                  <v-menu offset-y v-if="isLoggedIn">
                    <template v-slot:activator="{ on }">
                      <v-btn class="mx-2" rounded icon small v-on="on">
                        <v-icon dark> mdi-pencil </v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-icon left> mdi-delete </v-icon>
                        <v-btn to="" x-small color="orange" text @click.stop="openDialog('moment',item.id) ">
                          delete
                        </v-btn>
                      </v-list-item>
                      <v-list-item>
                        <v-icon left> mdi-plus</v-icon>
                        <v-btn :to="{ name: 'updatemoment', params: { id : item.id } }" x-small color="orange" text>
                          Update
                        </v-btn>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-actions>
                  <v-btn text color="#489FB5" @click="reveal = !reveal">
                    Learn More
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal1"
                    style="height: 100%"
                  >
                    <v-card-text class="pb-0">
                      <v-card-subtitle>
                        {{ item.description }}
                      </v-card-subtitle>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn text color="teal accent-4" @click="reveal = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- Vaccine -->
        <v-tab
          ><p>Vaccine</p>
          <p class="score">{{vaccine.length}}</p></v-tab
        >
        <v-tab-item class="tab_item">
          <v-row>
            <v-col cols="12" v-for="item in vaccine" :key="item">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <div v-if="item.animal == 'Dog'">
                    <v-icon left> mdi-dog </v-icon>
                    
                    </div>
                    <div v-if="item.animal == 'Cat'">
                    <v-icon left> mdi-cat </v-icon>
                    
                    </div>
                    <v-card-title> {{item.name}}</v-card-title>
                    <div v-if="isLoggedIn">
                    <v-menu offset-y v-if="current_user.id === user.id">
                      <template v-slot:activator="{ on }">
                        <v-btn class="mx-2" rounded icon small v-on="on">
                          <v-icon> mdi-pencil </v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item>
                          <v-icon left> mdi-delete </v-icon>
                          
                          <v-btn to="" x-small color="orange" text @click.stop="openDialog('vaccine',item.id)">
                            delete
                          </v-btn>
                        </v-list-item>
                        <v-list-item>
                          <v-icon left> mdi-plus</v-icon>
                          <v-btn to="" x-small color="orange" text>
                            update
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                    <v-card-list>
                      <v-card-subtitle>{{item.date}} </v-card-subtitle>
                    </v-card-list>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-col offset-md="3">
                      <v-img
                        src="../assets/1x3_ad.png"
                        class="rounded-lg"
                        max-width="500"
                      >
                      </v-img>
                    </v-col>
                    <h4>Description</h4>
                    <v-card-text
                      >{{item.description}}</v-card-text
                    >
                    <h4>Age</h4>
                    <v-card-text
                      >{{item.age}}</v-card-text
                    >
                    <h4>Next Vaccine</h4>
                    <v-card-text
                      >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Autem nobis dolor rerum dignissimos sapiente unde, commodi
                      velit eius qui corrupti ipsam nulla enim molestiae error
                      sequi ad laudantium deleniti eos?</v-card-text
                    >
                    <h4>Vaccine Type</h4>
                    <v-card-text
                      >{{item.vaksin_type}}</v-card-text
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
       <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          Are you sure you want to delete this?
        </v-card-title>

        <v-card-text>
          By deleting this item, you will no longer see it from your profile
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="closeDialog()"
          >
            No
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog =deleteItem(table,selectedItem)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navbarfull from "../layouts/navbarfull";
export default {
  nama: "Profile",
  created() {
    this.$emit("update:layout", navbarfull);
  },
  mounted() {
    let uri = "http://localhost:8000/api/profile/" + this.$route.params.username
    this.$http.get(uri).then((response) => {
    this.user = response.data;
    }).catch(function (error) {
    console.log(error);
    });
    let uri_adopt = "http://localhost:8000/api/profile/adoption/" + this.$route.params.username
    this.$http.get(uri_adopt).then((response) => {
      this.feed_adop = response.data;
    });
    let uri_moment = "http://localhost:8000/api/profile/moment/" + this.$route.params.username
    this.$http.get(uri_moment).then((response) => {
      this.moment = response.data;
    });
    let uri_vaccine = "http://localhost:8000/api/profile/vaccine/" + this.$route.params.username
    this.$http.get(uri_vaccine).then((response) => {
      this.vaccine = response.data;
    });
  },
  data() {
    return {
      table : "",
      selectedItem : "",
      dialog : false,
      url : this.$image_url,
      user : [],
      reveal: false,
      moment: [
        
      ],
      feed_adop: [

      ],
      vaccine : [],
    };
  },
  methods : {
    openDialog(table,value){
      this.dialog = true;
      this.table = table;
      this.selectedItem =  value;
    },
    closeDialog(){
      this.dialog = false;
      this.selectedItem = null;
    },
    alert(){
      this.$notify({
  group: 'foo',
  type : 'error',
  title: 'Notifications',
  text: 'Data deleted successfully'
});
    },
    deleteItem(table, value){
      const vm = this
      const formData = new FormData();
      formData.append('user_id',this.user.id) 
      let uri_delete  = "http://localhost:8000/api/profile/" + this.user.id + '/' + table + '/' + value

      if(table == 'moment'){
      this.$http.delete(uri_delete,formData).then((response) => {
        let uri_moment = "http://localhost:8000/api/profile/moment/" + this.$route.params.username
        this.$http.get(uri_moment).then((response) => {
            this.moment = response.data;
            this.alert();
        });
      })
      }else if(table =='adoption'){
        this.$http.delete(uri_delete,formData).then((response) => {
        let uri_adoption = "http://localhost:8000/api/profile/adoption/" + this.$route.params.username
        this.$http.get(uri_adoption).then((response) => {
            this.feed_adop = response.data;
            this.alert();
        });
      })
      }else if(table =='vaccine'){
        this.$http.delete(uri_delete,formData).then((response) => {
        let uri_vaccine = "http://localhost:8000/api/profile/vaccine/" + this.$route.params.username
        this.$http.get(uri_vaccine).then((response) => {
            this.vaccine = response.data;
            this.alert();
        });
      })
      }
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
   
<style >
.img_profil {
  display: block;
  border-radius: 50%;
  width: 275px;
  margin-left: auto;
  margin-right: auto;
  height: 275px;
  margin-top: 50px;
}
.title_name {
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: 2.5rem;
  font-weight: 700;
  color: #515151;
  letter-spacing: 2%;
  line-height: 3%;
  text-align: center;
}
.no_telp {
  display: block;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  font-weight: 400;
  color: #515151;
  letter-spacing: 2%;
  line-height: 3%;
  text-align: center;
}
.location_profile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  font-weight: 400;
  color: #515151;
  letter-spacing: 2%;
  line-height: 3%;
  text-align: center;
}
.edit {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  font-weight: 400;
  color: #515151;
  letter-spacing: 2%;
  line-height: 3%;
  text-align: center;
}
.edit_adop {
  margin-top: 2%;
  text-align: right;
}
.edit_vaccine {
  margin-top: 2%;
  text-align: left;
}
.edit_moment {
  margin-top: 2%;
  text-align: center;
}

.tab {
  margin-top: 40px;
}
.tab,
.tab_item {
  margin-top: 25px;
}
.score {
  margin-left: 20px;
}
.v-card--reveal1 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 50%;
}
</style>

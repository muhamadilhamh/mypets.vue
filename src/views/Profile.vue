<template>
  <div>
    <v-row>
      <v-col>
        <img :src="url + user.picture" alt="img" class="img_profil" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="title_name">{{ user.full_name }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="no_telp">{{ user.phone }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="location_profile">{{ user.location }}</p>
      </v-col>
    </v-row>
    <div v-if="isLoggedIn">
      <v-row v-if="current_user.id === user.id">
        <v-col class="edit">
          <v-btn
            color="#489FB5"
            outlined
            rounded
            :to="{ name: 'updateprofile', params: { id: user.id } }"
          >
            <v-icon left>mdi-pencil</v-icon> Edit Profile
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <div v-if="isLoggedIn">
        <v-row v-if="current_user.id === user.id">
          <v-col md="4" sm="4" class="edit_adop">
            <v-btn outlined rounded to="/uploadadoption" color="#489FB5">
              <v-icon left>mdi-upload</v-icon> Adoption
            </v-btn>
          </v-col>
          <v-col md="4" sm="4" class="edit_moment">
            <v-btn outlined rounded to="/uploadmoment" color="#489FB5">
              <v-icon left>mdi-upload</v-icon> Moment
            </v-btn>
          </v-col>
          <v-col md="4" sm="4" class="edit_vaccine hidden-xs-only">
            <v-btn outlined rounded to="/uploadvaccine" color="#489FB5">
              <v-icon left>mdi-upload</v-icon> Vaccine
            </v-btn>
          </v-col>
          <v-col md="4" sm="4" class="edit_vaccine_respn d-sm-none">
            <v-btn outlined rounded to="/uploadvaccine" color="#489FB5">
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
          <p class="score">{{ feed_adop.length }}</p>
        </v-tab>
        <v-tab-item class="tab_item">
          <v-container>
            <v-row>
              <v-col
                v-for="(item, index) in feed_adop"
                :key="index"
                cols="12"
                sm="4"
              >
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-hover v-slot="{ hover }">
                      <v-card flat tile class="mx-auto">
                        <router-link
                          :to="{
                            name: 'adoptiondetail',
                            params: { id_adoption: item.id },
                          }"
                        >
                          <template v-if="item.adoption_status == 1">
                            <v-img
                              class="rounded"
                              :src="url + item.picture"
                              aspect-ratio="1.5"
                              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
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
                                  {{ item.age }} Months
                                </div>
                              </v-expand-transition>
                            </v-img>
                          </template>
                          <template v-if="item.adoption_status == 0">
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
                                  <div v-if="item.animal_name == 'Dog'">
                                    <v-icon small left color="#fff">
                                      mdi-dog</v-icon
                                    >
                                  </div>
                                  <div v-if="item.animal_name == 'Cat'">
                                    <v-icon small left color="#fff">
                                      mdi-cat</v-icon
                                    >
                                  </div>
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
                                  {{ item.age }} Months
                                </div>
                              </v-expand-transition>
                            </v-img>
                          </template>
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
                                <v-btn
                                  to=""
                                  x-small
                                  color="orange"
                                  text
                                  @click.stop="openDialog('adoption', item.id)"
                                >
                                  delete
                                </v-btn>
                              </v-list-item>
                              <v-list-item>
                                <v-icon left> mdi-plus</v-icon>
                                <v-btn
                                  :to="{
                                    name: 'updateadoption',
                                    params: { id_adoption: item.id },
                                  }"
                                  x-small
                                  color="orange"
                                  text
                                >
                                  update
                                </v-btn>
                              </v-list-item>
                            </v-list>
                          </v-menu>

                          <v-card-title>
                            {{ item.name }}
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
          <p class="score">{{ moment.length }}</p></v-tab
        >
        <v-tab-item class="tab_item">
          <v-row>
            <v-col
              cols="12"
              md="4"
              sm="4"
              v-for="(item, index) in moment"
              :key="index"
            >
              <v-card
                class="mx-auto rounded-lg card_moment_profile"
                elevation="8"
                max-width="400"
              >
                <router-link
                  style="text-decoration: none"
                  :to="{
                    name: 'momentdetail',
                    params: { id_moment: item.id },
                  }"
                >
                  <v-img :src="url + item.picture"></v-img>
                </router-link>
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
                        <v-btn
                          to=""
                          x-small
                          color="orange"
                          text
                          @click.stop="openDialog('moment', item.id)"
                        >
                          delete
                        </v-btn>
                      </v-list-item>
                      <v-list-item>
                        <v-icon left> mdi-plus</v-icon>
                        <v-btn
                          :to="{
                            name: 'updatemoment',
                            params: { id: item.id },
                          }"
                          x-small
                          color="orange"
                          text
                        >
                          Update
                        </v-btn>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                
                <v-card-text> Posted {{ item.publish_time }} </v-card-text>

                <v-card-list>
                  <v-btn
                    small
                    class="moment_page_profile"
                    elevation="5"
                    color="#FFA62B"
                    rounded
                    dark
                    :to="{
                      name: 'momentdetail',
                      params: { id_moment: item.id },
                    }"
                    >Go to Moment Page</v-btn
                  ></v-card-list
                >
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- Vaccine -->
        <v-tab
          ><p>Vaccine</p>
          <p class="score">{{ vaccine.length }}</p></v-tab
        >
        <v-tab-item class="tab_item">
          <v-row>
            <v-simple-table class="hidden-sm-and-up">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="jenis_hewan">Type Pet</th>
                    <th></th>
                    <th class="nama_hewan">Pet Name</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th class="tanggal_vaksin">First Vaccine</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              </template>
            </v-simple-table>
            <div class="hidden-xs-only">
              <v-row>
                <h4 class="jenis_hewan">Type Pet</h4>
                <h4 class="nama_hewan">Pet Name</h4>
                <h4 class="tanggal_vaksin">First Vaccine</h4>
              </v-row>
              <hr />
            </div>
            <v-col cols="12" v-for="(item, index) in vaccine" :key="index">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <div v-if="item.animal == 'Dog'">
                      <v-icon left> mdi-dog </v-icon>
                    </div>
                    <div v-if="item.animal == 'Cat'">
                      <v-icon left> mdi-cat </v-icon>
                    </div>
                    <v-card-title> {{ item.name }}</v-card-title>
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

                            <v-btn
                              to=""
                              x-small
                              color="orange"
                              text
                              @click.stop="openDialog('vaccine', item.id)"
                            >
                              delete
                            </v-btn>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                    <v-card-list>
                      <v-card-subtitle>{{ item.date }} </v-card-subtitle>
                    </v-card-list>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-img
                            :src="url + item.picture"
                            class="rounded-lg img_expand"
                            contain
                            max-width="500px"
                            max-height="500px"
                          >
                          </v-img>
                        </v-col>
                        <v-col cols="12" md="8">
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-card outlined class="rounded-xl">
                                <v-card-title class="justify-center">
                                  <h4>Description</h4>
                                </v-card-title>
                                <v-card-text class="text-center">{{
                                  item.description
                                }}</v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-card outlined class="rounded-xl">
                                <v-card-title class="justify-center">
                                  <h4>Next Vaccine</h4>
                                </v-card-title>
                                <v-card-text class="text-center">{{
                                  item.next_vaksin
                                }}</v-card-text>
                              </v-card>
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="12" md="6">
                              <v-card outlined class="rounded-xl">
                                <v-card-title class="justify-center">
                                  <h4>Age</h4>
                                </v-card-title>
                                <v-card-text class="text-center">{{
                                  item.age
                                }}</v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-card outlined class="rounded-xl">
                                <v-card-title class="justify-center">
                                  <h4>Vaccine Type</h4>
                                </v-card-title>
                                <v-card-text class="text-center">{{
                                  item.vaksin_type
                                }}</v-card-text>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title class="headline">
            Are you sure you want to delete this?
          </v-card-title>

          <v-card-text>
            By deleting this item, you will no longer see it from your profile
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="closeDialog()">
              No
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = deleteItem(table, selectedItem)"
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
import { mapGetters } from "vuex";
import navbarfull from "../layouts/navbarfull";
export default {
  name: "Profile",
  created() {
    this.$emit("update:layout", navbarfull);
    let uri =
      process.env.VUE_APP_ROOT_API + "profile/" + this.$route.params.username;
    this.$http
      .get(uri)
      .then((response) => {
        this.user = response.data;
        this.loadData();
      })
      .catch((error) => {
        if (error.response.status === 404) this.$router.push("/error");
      });
  },
  mounted() {},
  data() {
    return {
      table: "",
      clickDetail: [],
      selectedItem: "",
      dialog: false,
      url: process.env.VUE_APP_IMAGE_URL,
      user: [],
      reveal: "",
      moment: [],
      feed_adop: [],
      vaccine: [],
    };
  },
  methods: {
    revealDetail(index) {
      this.clickDetail[index] = true;
    },
    loadData() {
      let uri_adopt =
        process.env.VUE_APP_ROOT_API +
        "profile/adoption/" +
        this.$route.params.username;
      this.$http.get(uri_adopt).then((response) => {
        this.feed_adop = response.data;
      });
      let uri_moment =
        process.env.VUE_APP_ROOT_API +
        "profile/moment/" +
        this.$route.params.username;
      this.$http.get(uri_moment).then((response) => {
        this.moment = response.data;
      });
      let uri_vaccine =
        process.env.VUE_APP_ROOT_API +
        "profile/vaccine/" +
        this.$route.params.username;
      this.$http.get(uri_vaccine).then((response) => {
        this.vaccine = response.data;
      });
    },
    openDialog(table, value) {
      this.dialog = true;
      this.table = table;
      this.selectedItem = value;
    },
    closeDialog() {
      this.dialog = false;
      this.selectedItem = null;
    },
    alert() {
      this.$notify({
        group: "foo",
        type: "error",
        title: "Notifications",
        text: "Data deleted successfully",
      });
    },
    deleteItem(table, value) {
      const formData = new FormData();
      formData.append("user_id", this.user.id);
      let uri_delete =
        process.env.VUE_APP_ROOT_API +
        "profile/" +
        this.user.id +
        "/" +
        table +
        "/" +
        value;

      if (table == "moment") {
        this.$http.delete(uri_delete, formData).then((response) => {
          let uri_moment =
            process.env.VUE_APP_ROOT_API +
            "profile/moment/" +
            this.$route.params.username;
          this.$http.get(uri_moment).then((response) => {
            this.moment = response.data;
            this.alert();
          });
        });
      } else if (table == "adoption") {
        this.$http.delete(uri_delete, formData).then((response) => {
          let uri_adoption =
            process.env.VUE_APP_ROOT_API +
            "profile/adoption/" +
            this.$route.params.username;
          this.$http.get(uri_adoption).then((response) => {
            this.feed_adop = response.data;
            this.alert();
          });
        });
      } else if (table == "vaccine") {
        this.$http.delete(uri_delete, formData).then((response) => {
          let uri_vaccine =
            process.env.VUE_APP_ROOT_API +
            "profile/vaccine/" +
            this.$route.params.username;
          this.$http.get(uri_vaccine).then((response) => {
            this.vaccine = response.data;
            this.alert();
          });
        });
      }
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
.edit_vaccine_respn {
  margin-top: 2%;
  text-align: left;
  margin-left: 20px;
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
.jenis_hewan {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.nama_hewan {
  margin-top: 20px;
  margin-left: 160px;
  margin-right: 160px;
  margin-bottom: 30px;
}
.tanggal_vaksin {
  margin-top: 20px;
  margin-left: 300px;
  margin-right: 270px;
  margin-bottom: 30px;
}
.img_expand {
  clip-path: inset(0 0 5px round 15px 0);
  margin-left: 70px;
  margin-right: 70px;
}
.moment_page_profile {
  margin-bottom: 10px;
  margin-left: 10px;
}
.card_moment_profile {
  margin-bottom: 20px;
}
</style>

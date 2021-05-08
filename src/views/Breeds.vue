<template>
  <div class="page_breeds">
    <!-- Heroes -->
    <v-container class="heroes_age">
      <v-row class="pa-12">
        <v-col cols="12" sm="4">
          <v-img class="il_anjing_Nocalcu" src="../assets/anjing_Nocalcu.svg">
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="title_breeds">
            <p>Find Your Pet’s Type! Lets Explore</p>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img class="il_kucing_nocalcu" src="../assets/kucing_Nocalcu.svg">
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Opsi Umur Hewan -->
    <v-container class="option_breeds">
      <v-row class="ofset-1">
        <v-col cols="12" sm="7">
          <div class="title_breeds_option">
            <p>Find Your Pet’s Type</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="ofset-1">
        <v-col cols="12" sm="7">
          <div class="desc_breeds_option">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- Pilih Opsi -->
    <v-container class="hidden-xs-only">
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <v-row>
            <v-col cols="12" sm="6">
              <!-- Card Anjing -->
              <v-row>
                <v-col cols="12" sm="4">
                  <v-img
                    class="il_anjing_breeds hidden-xs-only"
                    src="../assets/anjing.svg"
                  >
                  </v-img>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-card elevation="11" class="rounded-xl cat" color="#FFA62B">
                    <v-card-title>
                      <p class="title_dog">Anjing</p>
                    </v-card-title>
                    <v-card-subtitle>
                      <p class="desc_anjing">Cek Macam-macam anjing Yuk!</p>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn
                        to="{ name : 'dogdetail', params : { slug : 'akita' }}"
                        rounded
                        color="#FFF"
                        block
                        class="btn_dog"
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" sm="6">
              <!-- Card Kucing -->
              <v-row>
                <v-col cols="12" sm="4">
                  <v-img
                    class="il_kucing_breeds hidden-xs-only"
                    src="../assets/kucing.svg"
                  >
                  </v-img>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-card elevation="11" class="rounded-xl cat" color="#FFA62B">
                    <v-card-title>
                      <p class="title_dog">Cat</p>
                    </v-card-title>
                    <v-card-subtitle>
                      <p class="desc_anjing">Cek Macam-macam kucing Yuk!</p>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn
                        to="/breedsCat"
                        rounded 
                        color="#FFF"
                        block
                        class="btn_dog"
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="hidden-sm-and-up">
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <v-carousel
            height="310"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_age_cat"
                  :key="item.id"
                  cols="12"
                  sm="6"
                >
                  <v-container>
                    <v-card
                      class="rounded-xl"
                      color="#FFA62B"
                      elevation="8"
                      to="/breeds"
                    >
                      <v-btn
                        color="#F5F1EC"
                        fab
                        large
                        absolute
                        bottom
                        top
                        class="pa-9 rounded"
                      >
                        <v-img
                          src="../assets/anjing.svg"
                          class="img_anjing"
                        ></v-img>
                      </v-btn>
                      <v-card-title>
                        <p class="title_home_age">{{ item.title }}</p>
                      </v-card-title>
                      <v-card-subtitle>
                        <p class="desc_home_age">
                          {{ item.desc }}
                        </p>
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          rounded
                          block
                          elevation="10"
                          class="btn_home_age"
                          color="#FFA62B"
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>

            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_age_dog"
                  :key="item.id"
                  cols="12"
                  sm="6"
                >
                  <v-container>
                    <v-card
                      class="rounded-xl"
                      color="#FFA62B"
                      elevation="8"
                      to="/breeds"
                    >
                      <v-btn
                        color="#F5F1EC"
                        fab
                        large
                        absolute
                        bottom
                        top
                        class="pa-9 rounded"
                      >
                        <v-img
                          src="../assets/kucing.svg"
                          class="img_anjing"
                        ></v-img>
                      </v-btn>
                      <v-card-title>
                        <p class="title_home_age">{{ item.title }}</p>
                      </v-card-title>
                      <v-card-subtitle>
                        <p class="desc_home_age">
                          {{ item.desc }}
                        </p>
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          rounded
                          block
                          elevation="10"
                          class="btn_home_age"
                          color="#FFA62B"
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import navbarfull from "../layouts/navbarfull";

export default {
  name: "Breeds",
  created() {
    this.$emit("update:layout", navbarfull);
  },

  data() {
    return {
      feed_age_dog: [
        {
          id: 1,
          title: "Kucing",
          desc: "Cek Macam-macam kucing Yuk!",
        },
      ],
      feed_age_cat: [
        {
          id: 1,
          title: "Anjing",
          desc: "Cek Macam-macam anjing Yuk!",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.title_breeds {
  font-size: 2rem;
  color: #ffa62b;
  letter-spacing: 2%;
  font-weight: 800;
  padding: 3%;
  margin-top: 10%;
  text-align: center;
}
.page_breeds {
  background: #ede7e3;
}
.il_kucing_nocalcu {
  margin-top: 40px;
}
.title_breeds_option {
  font-size: 2.3rem;
  color: #ffa62b;
  letter-spacing: 2%;
  font-weight: 900;
}
.option_breeds {
  margin-top: 5%;
}
.desc_breeds_option {
  color: #515151;
}

.title_dog {
  color: #fff;
  font-weight: 600;
}
.il_kucing_breeds {
  margin-top: 50px;
  z-index: 1;
}
.il_anjing_breeds {
  margin-top: 60px;
  z-index: 1;
}
.cat {
  margin-left: -50px;
}
.dog {
  margin-left: 10px;
}
.desc_anjing {
  padding-left: 15px;
  color: #515151;
  font-weight: 400;
}
</style>

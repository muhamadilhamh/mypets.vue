<template>
  <div class="page_age">
    <!-- Heroes -->
    <v-container class="heroes_age">
      <v-row class="pa-12">
        <v-col cols="12" sm="4">
          <v-img class="il_anjing" src="../assets/Anjing&Berdiri.svg"> </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="title_age">
            <p>Calculate easily the age of your favorite animal</p>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img class="il_kucing" src="../assets/Kucing&Jongkok.svg"> </v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Opsi Umur Hewan -->
    <v-container class="option_age">
      <v-row class="ofset-1">
        <v-col cols="12" sm="7">
          <div class="title_age_option">
            <p>Calculate your pet’s age</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="ofset-1">
        <v-col cols="12" sm="7">
          <div class="desc_age_option">
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
                    class="il_anjing_age hidden-xs-only"
                    src="../assets/anjing.svg"
                  >
                  </v-img>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-card elevation="11" class="rounded-xl cat" color="#FFA62B">
                    <v-card-title>
                      <p class="title_dog">Dog</p>
                    </v-card-title>
                    <v-card-subtitle>
                      <p class="desc_anjing">Cek Anjingmu Yuk!</p>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn rounded  to="/dogconversion" color="#FFF" block class="btn_dog">
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
                    class="il_kucing_age hidden-xs-only"
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
                      <p class="desc_anjing">Cek Kucingmu Yuk!</p>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn rounded color="#FFF"  to="/catconversion" block class="btn_dog">
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
  name: "Ageconversion",
  created() {
    this.$emit("update:layout", navbarfull);
  },

  data() {
    return {
      feed_age_dog: [
        {
          id: 1,
          title: "Kucing",
          desc: "Mau tau perbadingan umurmu dengan kucingmu?",
        },
      ],
      feed_age_cat: [
        {
          id: 1,
          title: "Anjing",
          desc: "Mau tau perbadingan umurmu dengan anjingmu?",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.title_age {
  font-size: 2rem;
  color: #ffa62b;
  letter-spacing: 2%;
  font-weight: 800;
  padding: 3%;
  margin-top: 10%;
}
.page_age {
  background: #ede7e3;
}
.title_age_option {
  font-size: 2.3rem;
  color: #ffa62b;
  letter-spacing: 2%;
  font-weight: 900;
}
.option_age {
  margin-top: 5%;
}
.desc_age_option {
  color: #515151;
}

.title_dog {
  color: #fff;
  font-weight: 600;
}
.il_kucing_age {
  margin-top: 50px;
  z-index: 1;
}
.il_anjing_age {
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
.btn_dog {
  text-transform: capitalize;
}
</style>

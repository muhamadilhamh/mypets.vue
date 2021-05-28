<template>
  <div class="home_page">
    <v-img src="../assets/heroes_adoption.png">
      <v-row>
        <v-col cols="12" sm="6" class="hidden-xs-only">
          <v-img class="il_home" src="../assets/il_home.svg"> </v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row class="pa-12">
            <v-container>
              <h3 class="header_home">Find Anything!</h3>
              <p class="desc_age_option">
                Want to love, adopt and find out more about your pet's problem.
                Let's explore
              </p>
              <div class="btn_eksplore">
                <v-btn to="" rounded small color="#489FB5" dark> Start </v-btn>
              </div>
            </v-container>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img class="d-sm-none il_home" src="../assets/il_home.svg"> </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <v-col>
            <h3 class="header_artikel">We help you,</h3>
            <h3 class="header_artikel_second">To love your pet</h3>
          </v-col>
          <v-row>
            <v-col cols="12" sm="1" class="hidden-xs-only">
              <v-img src="../assets/pic_bg.png"> </v-img>
            </v-col>
          </v-row>

          <!--Artikel -->
          <!-- Layar monitor -->
          <v-row class="pa-5 hidden-xs-only">
            <v-col v-for="item in feed_home" :key="item.id" cols="12" sm="4">
              <v-container>
                <v-card class="rounded-xl" color="#489FB5" elevation="8">
                  <v-btn
                    color="#F5F1EC"
                    fab
                    tile
                    large
                    absolute
                    left
                    class="pa-5 rounded"
                    to="/article"
                  >
                    <v-img :src="item.src" class="img"></v-img>
                  </v-btn>
                  <v-card-title>
                    <p class="title_home_train">{{ item.title }}</p>
                  </v-card-title>
                  <v-card-subtitle>
                    <p class="desc_home_train_resp">
                      {{ item.desc }}
                    </p>
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      rounded
                      block
                      dark
                      elevation="10"
                      class="btn_home_train"
                      color="#82C0CC"
                      to="/article"
                    >
                      Learn more
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-col>
          </v-row>

          <!--Artikel -->
          <!-- Layar Responsif -->
          <v-carousel
            height="320"
            hide-delimiter-background
            show-arrows-on-hover
            class="hidden-sm-and-up"
          >
            <!-- Item 1 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_home_respn1"
                  :key="item.id"
                  cols="12"
                  sm="4"
                >
                  <v-container>
                    <v-card class="rounded-xl" color="#489FB5" elevation="8">
                      <v-btn
                        color="#F5F1EC"
                        fab
                        tile
                        large
                        absolute
                        left
                        class="pa-5 rounded"
                        to="/article"
                      >
                        <v-img :src="item.src" class="img"></v-img>
                      </v-btn>
                      <v-card-title>
                        <p class="title_home_train">{{ item.title }}</p>
                      </v-card-title>
                      <v-card-subtitle>
                        <p class="desc_home_train">
                          {{ item.desc }}
                        </p>
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          rounded
                          block
                          elevation="10"
                          class="btn_home_train"
                          color="#82C0CC"
                          to="/article"
                        >
                          Learn more
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>

            <!-- Item 2 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_home_respn2"
                  :key="item.id"
                  cols="12"
                  sm="4"
                >
                  <v-container>
                    <v-card class="rounded-xl" color="#489FB5" elevation="8">
                      <v-btn
                        color="#F5F1EC"
                        fab
                        tile
                        large
                        absolute
                        left
                        class="pa-5 rounded"
                        to="/article"
                      >
                        <v-img :src="item.src" class="img"></v-img>
                      </v-btn>
                      <v-card-title>
                        <p class="title_home_train">{{ item.title }}</p>
                      </v-card-title>
                      <v-card-subtitle>
                        <p class="desc_home_train">
                          {{ item.desc }}
                        </p>
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          rounded
                          block
                          elevation="10"
                          class="btn_home_train"
                          color="#82C0CC"
                          to="/article"
                        >
                          Learn more
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>

            <!-- Item-3 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_home_respn3"
                  :key="item.id"
                  cols="12"
                  sm="4"
                >
                  <v-container>
                    <v-card class="rounded-xl" color="#489FB5" elevation="8">
                      <v-btn
                        color="#F5F1EC"
                        fab
                        tile
                        large
                        absolute
                        left
                        class="pa-5 rounded"
                        to="/article"
                      >
                        <v-img :src="item.src" class="img"></v-img>
                      </v-btn>
                      <v-card-title>
                        <p class="title_home_train">{{ item.title }}</p>
                      </v-card-title>
                      <v-card-subtitle>
                        <p class="desc_home_train">
                          {{ item.desc }}
                        </p>
                      </v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          rounded
                          block
                          elevation="10"
                          class="btn_home_train"
                          color="#82C0CC"
                          to="/article"
                        >
                          Learn more
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-row>
    </v-img>

    <!-- Adoption -->
    <v-row>
      <v-container>
        <v-col>
          <v-col>
            <h3 class="header_artikel">You want to adopt a pet?</h3>
            <h3 class="header_artikel_second">Here we have a lot of choice.</h3>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="1" class="hidden-xs-only">
                <v-img src="../assets/tulang.png"> </v-img>
              </v-col>
            </v-row>
            <v-btn
              rounded
              absolute
              dark
              elevation="10"
              class="btn_home_adop hidden-xs-only"
              color="#489FB5"
              to="/adoption"
            >
              Eksplore
            </v-btn>

            <v-btn
              rounded
              dark
              elevation="10"
              class="btn_home_adop_res hidden-sm-and-up"
              color="#489FB5"
              to="/adoption"
            >
              Eksplore
            </v-btn>

            <v-row class="feed_adop">
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
                            <v-carousel
                              height="250"
                              hide-delimiter-background
                              show-arrows-on-hover
                              hide-delimiters
                              hide-arrows
                            >
                              <v-carousel-item
                                v-for="(img, i) in item.image"
                                :key="i"
                              >
                                <router-link
                                  :to="{
                                    name: 'adoptiondetail',
                                    params: { id_adoption: item.id },
                                  }"
                                >
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
                                        <template
                                          v-if="item.animal_name == 'Dog'"
                                        >
                                          <v-icon left color="#fff">
                                            mdi-dog</v-icon
                                          >
                                        </template>
                                        <template
                                          v-if="item.animal_name == 'Cat'"
                                        >
                                          <v-icon left color="#fff">
                                            mdi-cat</v-icon
                                          >
                                        </template>
                                        {{ item.name }}
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
                                        {{ item.age }} Months,
                                        {{ item.upload_time }}
                                      </div>
                                    </v-expand-transition>
                                  </v-img>
                                </router-link>
                              </v-carousel-item>
                            </v-carousel>
                            <v-card-actions>
                              <v-list-item-avatar>
                                <v-img
                                  class="elevation-6"
                                  :src="url + item.user.picture"
                                >
                                </v-img>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <p class="name_user">
                                  {{ item.user.full_name }}
                                </p>
                              </v-list-item-content>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-col>
        </v-col>
      </v-container>
    </v-row>

    <!-- Age -->
    <v-row>
      <v-img src="../assets/heroes_adoption.png">
        <v-container>
          <v-col>
            <h3 class="header_artikel">Find your</h3>
            <h3 class="header_artikel_second">Favorite pet!</h3>
          </v-col>
          <v-row>
            <v-col cols="12" sm="1" class="hidden-xs-only">
              <v-img src="../assets/pic_bg.png"> </v-img>
            </v-col>
          </v-row>

          <!-- Age layar lappy -->
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
                        <v-card
                          elevation="11"
                          class="rounded-xl cat"
                          color="#FFA62B"
                          to="/breeds"
                        >
                          <v-card-title>
                            <p class="title_dog">'Dog'</p>
                          </v-card-title>
                          <v-card-subtitle>
                            <p class="desc_anjing">More about dog</p>
                          </v-card-subtitle>
                          <v-card-actions>
                            <v-btn rounded color="#FFF" block class="btn_dog">
                              Learn more
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
                        <v-card
                          elevation="11"
                          class="rounded-xl cat"
                          color="#FFA62B"
                          to="/breeds"
                        >
                          <v-card-title>
                            <p class="title_dog">'Cat'</p>
                          </v-card-title>
                          <v-card-subtitle>
                            <p class="desc_anjing">More about cat</p>
                          </v-card-subtitle>
                          <v-card-actions>
                            <v-btn rounded color="#FFF" block class="btn_dog">
                              Learn more
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

          <!-- Age Responsif -->
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
                                Learn more
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
                                Learn more
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
        </v-container>
      </v-img>
    </v-row>

    <!--footer -->
    <div class="footer">
      <v-row class="pa-12">
        <v-col cols="12" sm="4">
          <v-container>
            <v-card-actions>
              <v-btn to="/" color="orange" text>
                <v-img
                  max-height="122"
                  max-width="263"
                  src="../assets/LogoPPL.svg"
                ></v-img>
              </v-btn>
            </v-card-actions>
            <div class="desc">
              <p>
                Website based application to help pet owner get to know their
                pets better
              </p>
            </div>
          </v-container>
        </v-col>
        <!-- Footer -->
        <!-- 1x2 -->
        <v-col cols="12" sm="4">
          <v-container>
            <v-content class="menu">
              <h3>Menu</h3>
            </v-content>
            <v-card-actions>
              <v-btn to="/about" x-small text color="#515151"> About Us </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/adoption" x-small text color="#515151">
                Adopsi
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/care" x-small text color="#515151">
                Care&Training
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/ageconversion" x-small text color="#515151">
                Age Conversion
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/article" x-small text color="#515151">
                Article
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/breeds" x-small text color="#515151"> Breeds </v-btn>
            </v-card-actions>
          </v-container>
        </v-col>
        <!-- Footer -->
        <!-- 1x3 -->
        <v-col cols="12" sm="4">
          <v-container>
            <v-content class="menu">
              <h3>Follow Us!</h3>
            </v-content>
            <v-card-actions>
              <v-icon small left> mdi-youtube</v-icon>
              <p class="comingsoon">Comingsoon</p>
            </v-card-actions>
            <v-card-actions>
              <v-icon small left> mdi-instagram</v-icon>
              <p class="comingsoon">Comingsoon</p>
            </v-card-actions>
            <v-card-actions>
              <v-icon small left> mdi-facebook</v-icon>
              <p class="comingsoon">Comingsoon</p>
            </v-card-actions>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="copyright">Copyright &copy; MyPets 2021</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import navbarfull from "../layouts/navbarfull";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", navbarfull);
  },
  mounted() {
    let uri = process.env.VUE_APP_ROOT_API + "adoption/3";
    this.$http.get(uri).then((response) => {
      this.feed_adop = response.data;
    });
  },
  data() {
    return {
      url: process.env.VUE_APP_IMAGE_URL,
      feed_home: [
        {
          id: 1,
          title: "Training",
          src: require("../assets/kesehatan.svg"),
          desc:
            "Did you know, every animal has a different issues of their own",
        },
        {
          id: 2,
          title: "Nutrition",
          src: require("../assets/nutrision.svg"),
          desc: "Your little friend got a different diet of their own",
        },
        {
          id: 3,
          title: "Care",
          src: require("../assets/care.svg"),
          desc: "Its not just you who need to take a bath, your pet too!",
        },
      ],
      feed_home_respn1: [
        {
          id: 1,
          title: "Training",
          src: require("../assets/kesehatan.svg"),
          desc: "Tahukah kamu setiap hewan memiliki penyakit yang berbeda-beda",
        },
      ],
      feed_home_respn2: [
        {
          id: 2,
          title: "Nutrisi",
          src: require("../assets/nutrision.svg"),
          desc: "Kadar nutrisi antara setiap hewan berbeda-beda",
        },
      ],
      feed_home_respn3: [
        {
          id: 3,
          title: "Care",
          src: require("../assets/care.svg"),
          desc: "Yang butuh mandi bukan kamu aja loh, hewanmu pun butuh mandi",
        },
      ],
      feed_adop: [],
      feed_age_dog: [
        {
          id: 1,
          title: "'Cat'",
          desc: "More about cat",
        },
      ],
      feed_age_cat: [
        {
          id: 1,
          title: "'Dog'",
          desc: "More about dog",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>

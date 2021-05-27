<template>
  <div class="aboutus">
    <!-- Bg_Heroes -->
    <div class="staticHeroes">
      <v-img src="../assets/heroes_aboutus.png">
        <v-row class="pa-12 fill-height">
          <v-col cols="12" sm="6">
            <v-container>
              <div class="headline">
                <h2>MyPets</h2>
              </div>
              <div class="desc hidden-xs-only">
                <h3>
                  Website based application to help pet owner get to know their
                  pets better.
                </h3>
              </div>
              <div class="desc_resp d-sm-none">
                <h3>
                  Website based application to help pet owner get to know their
                  pets better.
                </h3>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <!-- My Team -->
    <v-row>
      <v-col v-for="value in 'b'" :key="value">
        <div :class="`rounded-b-xl`" class="pa-5">
          <v-container>
            <div class="konten">
              <h2>My Teams</h2>
            </div>
            <v-row>
              <v-col
                v-for="item in items"
                :key="item.id"
                class="d-flex child-flex"
                cols="12"
                sm="3"
              >
                <v-card flat tile color="#ede7e3" class="mx-auto">
                  <v-img
                    :src="item.src"
                    aspect-ratio="1"
                    max-width="350"
                    class="img_us"
                  >
                  </v-img>
                  <v-card-text class="text-center">
                    <div class="title">{{ item.name }}</div>
                    <h3>{{ item.title }}</h3>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
    <!-- Footer -->
    <!-- 1x1 -->
    <v-row class="footer pa-12">
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
              Website based application to help pet owner get to know their pets
              better.
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
            <v-btn to="/adoption" x-small text color="#515151"> Adopsi </v-btn>
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
            <v-btn to="/article" x-small text color="#515151"> Article </v-btn>
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
</template>

<script>
import navbarfull from "../layouts/navbarfull";
export default {
  name: "About",

  created() {
    this.$emit("update:layout", navbarfull);
  },
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/habib.png"),
          name: "M Ilham Habib",
          title: "#FrondEnd x UI/UX",
        },
        {
          id: 2,
          src: require("../assets/bowo.png"),
          name: "M Iqbal Alif",
          title: "#BackEnd",
        },
        {
          id: 3,
          src: require("../assets/doli.png"),
          name: "Ahmad Irfan F",
          title: "#FullStack",
        },
        {
          id: 4,
          src: require("../assets/bagus.png"),
          name: "Gede Bagus D",
          title: "#PM x Designer",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>
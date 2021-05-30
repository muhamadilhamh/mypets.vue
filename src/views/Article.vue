<template>
  <!-- Heroes static -->
  <div class="article_page">
    <v-img src="../assets/hero_article.png">
      <v-row class="pa-1">
        <v-col cols="12" sm="4" md offset="1">
          <h2 class="header_heroes1">Find Out More,</h2>
        </v-col>
      </v-row>
      <v-row class="pa-2">
        <v-col cols="12" sm="6" offset="1">
          <h2 class="header_heroes2">and Make Them Happy</h2>
        </v-col>
      </v-row>
    </v-img>

    <!-- Option Article -->
    <v-container class="option_article">
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2">
          <v-row>
            <v-col cols="12" sm="6">
              <v-row class="pa-12">
                <div></div>

                <!-- Dog -->
                <template v-if="selected == 'Dog'">
                  <v-btn
                    block
                    rounded-lg
                    x-large
                    elevation="5"
                    class="btn text-capitalize"
                    color="primary"
                    @click="selected = 'Dog'"
                  >
                    Dog
                  </v-btn>
                </template>
                <template v-if="selected != 'Dog'">
                  <v-btn
                    block
                    outlined
                    rounded-lg
                    x-large
                    elevation="5"
                    class="btn text-capitalize"
                    color="#515151"
                    @click="selected = 'Dog'"
                  >
                    Dog
                  </v-btn>
                </template>
              </v-row>
            </v-col>
            <!-- Option Article -->
            <v-col cols="12" sm="6">
              <v-row class="pa-12">
                <!-- Cat -->
                <template v-if="selected == 'Cat'">
                  <v-btn
                    block
                    rounded-lg
                    x-large
                    elevation="5"
                    class="btn text-capitalize"
                    color="primary"
                    @click="selected = 'Cat'"
                  >
                    Cat
                  </v-btn>
                </template>
                <template v-if="selected != 'Cat'">
                  <v-btn
                    block
                    outlined
                    rounded-lg
                    x-large
                    elevation="5"
                    class="btn text-capitalize"
                    color="#515151"
                    @click="selected = 'Cat'"
                  >
                    Cat
                  </v-btn>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Training Article -->
    <div :class="`rounded-t-xl`" class="bg_training">
      <v-row>
        <v-container>
          <v-row class="pa-2 training">
            <v-col cols="12" sm="3">
              <h2>Training</h2>
            </v-col>
          </v-row>
          <v-row class="pa-2 desc_training">
            <v-col lg="7" sm="5">
              <p v-if="selected == 'Dog'">
                To keep your dog healthy, Your dog needs regular exercise
              </p>
              <p v-if="selected == 'Cat'">
                To keep your dog healthy, Your cat needs regular exercise
              </p>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-slide-group>
            <v-slide-item
              v-for="(item, index) in filteredTraining"
              :key="index"
              class="ma-5"
            >
              <v-container>
                <v-card
                  class="rounded-xl"
                  color="#fff"
                  elevation="8"
                  max-width="250px"
                >
                  <v-img :src="item.picture" height="200px"></v-img>
                  <v-card-title>
                    <p class="">{{ item.title }}</p>
                  </v-card-title>
                  <v-card-subtitle>
                    <p class="desc">
                      {{ item.desc }}
                    </p>
                  </v-card-subtitle>
                  <v-btn
                    rounded
                    block
                    text
                    class="btn_training"
                    color="#515151"
                    :to="{
                      name: 'articledetail',
                      params: { id_article: item.id },
                    }"
                  >
                    Detail
                    <v-icon right> mdi-chevron-right </v-icon>
                  </v-btn>
                </v-card>
              </v-container>
            </v-slide-item>
          </v-slide-group>
        </v-container>
      </v-row>
    </div>

    <div :class="`rounded-t-xl`" class="bg_care">
      <v-row>
        <v-container>
          <v-row class="pa-2 training">
            <v-col cols="12" sm="3">
              <h2>Nutrition</h2>
            </v-col>
          </v-row>
          <v-row class="pa-2 desc_training">
            <v-col cols="12" sm="5">
              <p v-if="selected == 'Dog'">
                Dog Nutrition is really important because with proper diet, your
                dog will keep healthy and active
              </p>
              <p v-if="selected == 'Cat'">
                Cat Nutrition is really important because with proper diet, your
                cat will keep healthy and active
              </p>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-col cols="12">
            <v-slide-group>
              <v-slide-item
                v-for="(item, index) in filteredNutrition"
                :key="index"
                class="ma-5"
              >
                <v-container>
                  <v-card
                    class="rounded-xl"
                    color="#fff"
                    elevation="8"
                    max-width="250px"
                  >
                    <v-img :src="item.picture" height="200px"></v-img>
                    <v-card-title>
                      <p class="">{{ item.title }}</p>
                    </v-card-title>
                    <v-card-subtitle>
                      <p class="desc">
                        {{ item.desc }}
                      </p>
                    </v-card-subtitle>
                    <v-btn
                      rounded
                      block
                      text
                      class="btn_training"
                      color="#515151"
                      :to="{
                        name: 'articledetail',
                        params: { id_article: item.id },
                      }"
                    >
                      Detail
                      <v-icon right> mdi-chevron-right </v-icon>
                    </v-btn>
                  </v-card>
                </v-container>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-container>
      </v-row>
    </div>

    <div :class="`rounded-t-xl`" class="bg_training">
      <v-row>
        <v-container>
          <v-row class="pa-2 training">
            <v-col cols="12" sm="3">
              <h2>Care</h2>
            </v-col>
          </v-row>
          <v-row class="pa-2 desc_training">
            <v-col cols="12" sm="5">
              <p v-if="selected == 'Cat'">Give your dog plenty of love</p>

              <p v-if="selected == 'Dog'">Give your dog plenty of love</p>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-col cols="12">
            <v-slide-group>
              <v-slide-item
                v-for="(item, index) in filteredCare"
                :key="index"
                class="ma-5"
              >
                <v-container>
                  <v-card
                    class="rounded-xl"
                    color="#fff"
                    elevation="8"
                    max-width="250px"
                  >
                    <v-img :src="item.picture" height="200px"></v-img>
                    <v-card-title>
                      <p class="">{{ item.title }}</p>
                    </v-card-title>
                    <v-card-subtitle>
                      <p class="desc">
                        {{ item.desc }}
                      </p>
                    </v-card-subtitle>
                    <v-btn
                      rounded
                      block
                      text
                      class="btn_training"
                      color="#515151"
                      :to="{
                        name: 'articledetail',
                        params: { id_article: item.id },
                      }"
                    >
                      Detail
                      <v-icon right> mdi-chevron-right </v-icon>
                    </v-btn>
                  </v-card>
                </v-container>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-container>
      </v-row>
    </div>
  </div>
</template>
<script>
import navbarfull from "../layouts/navbarfull";
export default {
  name: "Article",
  created() {
    this.$emit("update:layout", navbarfull);
  },
  mounted() {},
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      let uri_training = process.env.VUE_APP_ROOT_API + "article/training";
      this.$http.get(uri_training).then((response) => {
        this.feed_training = response.data;
      });
      let uri_nutrition = process.env.VUE_APP_ROOT_API + "article/nutrition";
      this.$http.get(uri_nutrition).then((response) => {
        this.feed_nutrition = response.data;
      });
      let uri_care = process.env.VUE_APP_ROOT_API + "article/care";
      this.$http.get(uri_care).then((response) => {
        this.feed_care = response.data;
      });
    },
  },
  computed: {
    filteredTraining: function () {
      return this.feed_training.filter((post) => {
        return post.animal_type.includes(this.selected);
      });
    },
    filteredNutrition: function () {
      return this.feed_nutrition.filter((post) => {
        return post.animal_type.includes(this.selected);
      });
    },
    filteredCare: function () {
      return this.feed_care.filter((post) => {
        return post.animal_type.includes(this.selected);
      });
    },
  },
  data() {
    return {
      animal: "Dog",
      selected: "Dog",
      feed_training: [],
      feed_nutrition: [],
      feed_care: [],
      feed_training1: [
        {
          id: 1,
          title: "Pergi Keluar",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 2,
          title: "Pergi Kedalam",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 3,
          title: "Pergi Masuk",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 4,
          title: "Pergi Jalan",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],

      feed_training2: [
        {
          id: 1,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 3,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 4,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],
      feed_nutrision1: [
        {
          id: 1,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 3,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 4,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],
      feed_nutrision2: [
        {
          id: 1,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 3,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: 4,
          title: "Lorem Ipsum",
          desc: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.header_heroes1 {
  margin-top: 15%;
  font-size: 2.5rem;
  color: #ffa62b;
  letter-spacing: 2%;
}
.header_heroes2 {
  margin-bottom: 15%;
  margin-top: -5%;
  font-size: 2.5rem;
  color: #ffa62b;
  letter-spacing: 2%;
}
.option_article {
  margin-top: -70px;
}
.bg_training {
  background: #ede7e3;
}
.bg_care {
  background: #fff;
}
.training {
  font-size: 1.7rem;
  color: #ffa62b;
  letter-spacing: 2%;
  font-weight: 600;
  margin-top: 0.5%;
  margin-bottom: -4%;
}
.training_desc {
  color: #515151;
  letter-spacing: 2%;
}
.btn_training {
  text-transform: capitalize;
}
.title_training,
.desc,
.btn_training,
.desc_training {
  color: #515151;
}
.btn {
  background: #ffff;
}
.carousel {
  margin-top: -5%;
}
</style>

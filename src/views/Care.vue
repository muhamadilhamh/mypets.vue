<template>
  <div class="care_page">
    <v-app id="inspire">
      <v-row class="pa-12">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12"
              ><div class="headline_care">
                <h2>What’s in MyPets</h2>
              </div>
            </v-col>
            <v-col cols="6" sm="6"
              ><div class="search_care">
                <!-- chips = bakal di highlight, clearable = menghapus highlight, filled = melebarkan layout, rounded = sudut menjadi tidak kaku, solo = membuat menjadi berwarna -->
                <v-autocomplete
                  chips
                  clearable
                  rounded
                  solo
                  item-text="name"
                  item-value="name"
                  label="Search Care & Trainng..."
                  placeholder="Search Care & Trainng..."
                ></v-autocomplete>
              </div>
            </v-col>
            <!-- Button click -->
            <v-col cols="6" sm="6" @click="model = null">
              <div class="btn_search_care">
                <v-btn rounded color="primary" dark> Search </v-btn>
              </div>
            </v-col>
            <!--feed-->
            <v-col v-for="item in feed_care" :key="item.id" cols="12" sm="4">
              <div class="feed_artikel">
                <v-card flat tile class="mx-auto">
                  <v-img class="rounded" :src="item.src" aspect-ratio="1.5">
                  </v-img>
                  <v-card-text>
                    <div class="title">{{ item.title }}</div>
                    <div class="date">{{ item.date }}</div>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Care",

  data() {
    return {
      feed_care: [
        {
          id: 1,
          src: require("../assets/1x1.png"),
          title: "Berbahaya membawa Anjing di dalam mobil",
          date: "26 Maret 2021",
        },
        {
          id: 2,
          src: require("../assets/1x2.png"),
          title: "Ahmad Fadholi baru beli anjing",
          date: "26 Maret 2021",
        },
        {
          id: 3,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
        {
          id: 4,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
        {
          id: 5,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
        {
          id: 6,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
        {
          id: 7,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
        {
          id: 8,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
        {
          id: 9,
          src: require("../assets/1x3.png"),
          title: "Harga kucing melambung sangat tinggi",
          date: "26 Maret 2021",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.btn_search_care {
  margin-top: 3%;
}

.date {
  font-size: 1rem;
  padding-top: 5%;
  font-style: italic;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 2%;
}
.title {
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 2%;
}
.care_page {
  color: #515151;
}
.headline_care {
  color: #515151;
}
</style>

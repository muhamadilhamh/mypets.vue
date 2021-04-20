<template>
  <!--Hero Static -->
  <div class="adoption_page">
    <v-img src="../assets/heroes_adoption.png">
      <v-row class="pa-12">
        <v-col cols="12" sm="3" offset="1" class="hidden-xs-only">
          <v-img class="il_heroes" src="../assets/il_heroes_adp.svg"> </v-img>
        </v-col>
        <v-col cols="6" sm="8">
          <v-row class="pa-12">
            <v-container>
              <h3 class="header_heroes">Be My New Family!</h3>
              <p class="desc_heroes">
                Memberikan hewanmu, untuk kasih sayang yang diperlukan
              </p>
              <div class="btn_gotoregis">
                <v-btn to="" rounded small color="#489FB5" dark>
                  Register
                </v-btn>
              </div>
            </v-container>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
    <!--Searching-->
    <v-container>
      <v-row>
        <v-col md="6" offset-md="3">
          <div class="search_adop">
            <!-- chips = bakal di highlight, clearable = menghapus highlight, filled = melebarkan layout, rounded = sudut menjadi tidak kaku, solo = membuat menjadi berwarna -->
            <v-autocomplete
              chips
              clearable
              rounded
              item-text="name"
              item-value="name"
              label="Search Adoption"
              placeholder="Search Adoption"
              prepend-inner-icon="mdi-magnify"
              solo
            >
            </v-autocomplete>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!--Feed_adop-->
    <v-container>
      <v-row>
        <v-col v-for="item in feed_adop" :key="item.id" cols="12" sm="4">
          <v-list dense>
            <v-list-item-group color="primary">
              <v-hover v-slot="{ hover }">
                <v-card flat tile class="mx-auto">
                  <v-img class="rounded" :src="item.src" aspect-ratio="1.5">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out blue-grey darken-3 v-card--reveal display-5 white--text"
                        style="height: 25%"
                      >
                        <v-icon small left color="#fff"> mdi-dog</v-icon>
                        Lorem Ipsum
                        <v-icon small left color="#fff">
                          mdi-gender-male
                        </v-icon>
                      </div>
                    </v-expand-transition>
                  </v-img>

                  <v-card-actions>
                    <v-list-item-avatar>
                      <v-img class="elevation-6" :src="item.avatar_src">
                      </v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item class="name_user">
                        {{ item.name }}
                      </v-list-item>
                    </v-list-item-content>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Adoption",

  data() {
    return {
      selectedItem: 1,
      feed_adop: [
        {
          id: 1,
          src: require("../assets/1x1_ad.png"),
          avatar_src: require("../assets/ava_ad1x1.png"),
          name: "Royal Navy",
        },
        {
          id: 2,
          src: require("../assets/1x2_ad.png"),
          avatar_src: require("../assets/ava_ad1x2.png"),
          name: "Low Short",
        },
        {
          id: 3,
          src: require("../assets/1x3_ad.png"),
          avatar_src: require("../assets/ava_ad1x3.png"),
          name: "Attitude",
        },
        {
          id: 4,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 5,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 6,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 7,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 8,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
        {
          id: 9,
          src: require("../assets/1x3.png"),
          avatar_src: require("../assets/ava_adnxn.png"),
          name: "Lorem Ipsum",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.il_heroes {
  width: 100%;
}
.header_heroes {
  font-size: 2.5rem;
  color: #ffa62b;
  letter-spacing: 2%;
}
.desc_heroes {
  color: #515151;
  opacity: 70%;
  margin-top: -1%;
}
.btn_gotoregis {
  margin-top: 5%;
}
.search_adop {
  margin-top: -8%;
}
.name_user {
  font-weight: 600;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

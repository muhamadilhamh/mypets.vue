<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">{{ breeds_info.name }}</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/breeds/dog">
            <v-icon left> mdi-chevron-left </v-icon>
            All Breeds
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="11" md="5" offset="1">
          <v-card elevation="5">
            <div v-if="loading_detail == true">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <v-card-title> {{ breeds_info[0].name }} </v-card-title>
            <v-card-text>
              {{ breeds_info[0].description }}
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="1" md="1">
                  <template v-if="!likeStatus">
                    <button @click="addLike(user.id)">
                      <v-rating
                        hover
                        background-color="grey darken-1"
                        color="#787878"
                        large
                        :empty-icon="emptyIcon"
                        :full-icon="fullIcon"
                        length="1"
                      >
                      </v-rating>
                    </button>
                  </template>
                  <template v-if="likeStatus">
                    <button @click="addLike(user.id)">
                      <v-rating
                        hover
                        background-color="grey darken-1"
                        color="#EF5350"
                        large
                        :empty-icon="emptyIcon"
                        :full-icon="fullIcon"
                        length="1"
                        :value="1"
                      >
                      </v-rating>
                    </button>
                  </template>
                </v-col>
                <v-col cols="3" md="3">
                  <p class="rate">{{ breeds_info[0].user.length }}</p>
                </v-col>

                <v-col cols="4" md="4" class="family">
                  <p>
                    <span class="bold">Family:</span> {{ dog_detail[0].family }}
                  </p>
                </v-col>
                <v-col cols="4" md="4" class="type">
                  <p><span class="bold">Type:</span> Dog</p>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <div v-if="loading_detail == true">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="70"
            ></v-progress-circular>
          </div>
          <v-img :src="breeds_info[0].picture"> </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-tabs>
        <v-tab class="title_fact">Key Fact</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key fact -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Key Fact</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->
              <v-col cols="12" md="3" offset-md="1">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Profile</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <span class="bold">Lifespan:</span
                        >{{ breeds_info[0].lifespan }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Weight: </span
                        >{{ breeds_info[0].weight }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Size:</span>
                        {{ breeds_info[0].size }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Origin:</span>
                        {{ breeds_info[0].origin }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Health</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Major Concerns : {{ dog_detail[0].major_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Minor Concerns : {{ dog_detail[0].minor_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Occasionally Seen :
                        {{ dog_detail[0].occasionally_seen }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Suggested Tests : {{ dog_detail[0].suggested_test }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>
              </v-col>

              <v-col cols="12" md="7">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Temperament</h3>
                    </v-card-title>
                    <v-card-text>
                      <div v-if="loading_detail == true">
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </div>
                      {{ dog_detail[0].temperament }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in upkeep" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                      <div v-if="loading_detail == true">
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </div>
                      {{ dog_detail[0].upkeep }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Grooming</h3>
                    </v-card-title>
                    <v-card-text>
                      <div v-if="loading_breeds == true">
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </div>
                      {{ breeds_info[0].grooming }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title>
                      <h3>Nutrition</h3>
                    </v-card-title>
                    <v-card-text>
                      <div v-if="loading_breeds == true">
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </div>
                      {{ breeds_info[0].nutrition }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab class="tit">History</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key History -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">History</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->
              <v-col cols="12" md="3" offset-md="1">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Profile</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <span class="bold">Lifespan:</span
                        >{{ breeds_info[0].lifespan }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Weight: </span
                        >{{ breeds_info[0].weight }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Size:</span>
                        {{ breeds_info[0].size }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Origin:</span>
                        {{ breeds_info[0].origin }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Health</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Major Concerns : {{ dog_detail[0].major_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Minor Concerns : {{ dog_detail[0].minor_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Occasionally Seen :
                        {{ dog_detail[0].occasionally_seen }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Suggested Tests : {{ dog_detail[0].suggested_test }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>
              </v-col>

              <v-col cols="12" md="7">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-text>
                      {{ breeds_info[0].history }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab class="tit">Personality</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key Personality -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Personality</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->
              <v-col cols="12" md="3" offset-md="1">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Profile</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <span class="bold">Lifespan:</span
                        >{{ breeds_info[0].lifespan }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Weight: </span
                        >{{ breeds_info[0].weight }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Size:</span>
                        {{ breeds_info[0].size }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Origin:</span>
                        {{ breeds_info[0].origin }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Health</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Major Concerns : {{ dog_detail[0].major_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Minor Concerns : {{ dog_detail[0].minor_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Occasionally Seen :
                        {{ dog_detail[0].occasionally_seen }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Suggested Tests : {{ dog_detail[0].suggested_test }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>
              </v-col>

              <v-col cols="12" md="7">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-text>
                      {{ breeds_info[0].personality }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab class="tit">Characteristics</v-tab>
        <v-tab-item class="konten_fact">
          <!--tab key Characteristics -->
          <v-row>
            <v-col cols="12">
              <h3 class="desc_fact">Characteristics</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->
              <v-col cols="12" md="3" offset-md="1">
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Profile</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <span class="bold">Lifespan:</span
                        >{{ breeds_info[0].lifespan }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Weight: </span
                        >{{ breeds_info[0].weight }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Size:</span>
                        {{ breeds_info[0].size }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <span class="bold">Origin:</span>
                        {{ breeds_info[0].origin }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container>
                    <v-card-title class="justify-center">
                      <h3>Health</h3>
                    </v-card-title>
                    <v-container>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Major Concerns : {{ dog_detail[0].major_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Minor Concerns : {{ dog_detail[0].minor_concerns }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Occasionally Seen :
                        {{ dog_detail[0].occasionally_seen }}
                      </v-card-text>
                      <v-card-text class="text_desc">
                        <v-icon left> mdi-circle-small </v-icon>
                        Suggested Tests : {{ dog_detail[0].suggested_test }}
                      </v-card-text>
                    </v-container>
                  </v-container>
                </v-card>
              </v-col>

              <v-col cols="12" md="7">
                <v-card outlined class="rounded-xl">
                  <div class="pa-5">
                    <v-container>
                      <v-row>
                        <v-col cols="7" md="6">
                          <h5>Energy</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].energy"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Affection</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].affection"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Exercise</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].exercise"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Watchfulness</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].watchfulness"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Playfulness</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].playfulness"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Training</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].training"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Friendliness To Dogs</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].friend_dog"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Grooming</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].grooming"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Friendliness To Other Pets</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].friend_pet"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Heat</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].heat"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Friendliness To Strangers</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].friend_strangers"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                        <v-col cols="7" md="6">
                          <h5>Vocality</h5>
                          <v-rating
                            hover
                            v-model="dog_detail[0].vocality"
                            background-color="grey darken-1"
                            color="#FFA62B"
                            large
                            :empty-icon="emptyIcon"
                            :full-icon="fullIcon"
                            readonly
                          >
                          </v-rating>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab class="tit"> Moment {{ moments.length }}</v-tab>
        <v-tab-item class="konten_fact">
          <v-row>
            <v-col cols="12" v-for="item in moments" :key="item.id">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-icon left> mdi-dog </v-icon>
                    <v-card-title> {{ item.title }}</v-card-title>

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
                    <h4>Location</h4>
                    <v-card-text
                      >{{item.location}}</v-card-text
                    >
                    
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-tab-item>
         <v-tab class="tit"> Comments</v-tab>
        <v-tab-item>  <section class='comments' aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus shortname='mypets-1' />
  </section></v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Disqus } from 'vue-disqus'
export default {
  nama: "DogDetail",
   components: {
    Disqus
  },
  created() {
    this.$emit("update:layout", "div");
    let uri_dog =
      process.env.VUE_APP_ROOT_API +
      "animal/dog/details/" +
      this.$route.params.slug;
    this.$http.get(uri_dog).then((response) => {
      this.dog_detail = response.data;
      this.loading_detail = false;
    });
    let uri =
      process.env.VUE_APP_ROOT_API + "animal/dog/" + this.$route.params.slug;
    this.$http.get(uri).then((response) => {
      this.breeds_info = response.data;
      this.loading_breeds = false;
    });

    let uri_moment =
      process.env.VUE_APP_ROOT_API + "moment/" + this.$route.params.slug;
    this.$http.get(uri_moment).then((response) => {
      this.moments = response.data;
    }),
      this.getLikeStatus();
  },
  mounted() {},
  data: () => ({
    loading_detail: true,
    loading_breeds: true,
    breeds_info: [{}],
    dog_detail: [{}],
    likeStatus: false,
    moments: [],
    energy: 4,
    affection: 4,
    exercise: 3,
    watchfulness: 1,
    playfulness: 4,
    training: 3,
    friendlinessDog: 3,
    groom: 4,
    friendlinessOther: 3,
    heat: 4,
    friendlinessStrangers: 3,
    vocality: 5,
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart ",
    profil: [
      {
        id: 1,
        title: "Profile",
        lifespan: "12 – 14 years",
        weight: " 3 – 4kg",
        size: "Small",
        origin: "Germany",
      },
    ],
    health: [
      {
        id: 1,
        title: "Health",
        list1: "Major concerns: none",
        list2: "Minor concerns: patellar luxation, corneal ulcers",
        list3:
          "Occasionally seen: PDA, open fontanel, respiratory difficulties, Legg-Perthes",
        list4: "Suggested tests: knee, eye",
        list5: "Life span: 12–14 years",
      },
    ],
    temprament: [
      {
        id: 1,
        title: "Temprament",
        desc:
          "The Affenpinscher lives up to its name monkey terrier in both looks and actions. They are terriers at heart, busy, inquisitive, bold, and stubborn, but also love to monkey around, being playful and mischievous. This breed tends to bark and even climb. Unlike most terriers, they are fairly good with other dogs and pets. This little dog is best with a family that likes entertainment and has a very good sense of humor.",
      },
    ],
    upkeep: [
      {
        id: 1,
        title: "Upkeep",
        desc:
          "Although an energetic and active dog, the exercise needs of the Affenpinscher can be met with vigorous indoor games or romps in the yard, or with short walks on leash. The harsh coat needs combing two or three times weekly, plus shaping every three months. Shaping should be handled by a professional groomer.",
      },
    ],
    grooming: [
      {
        id: 1,
        title: "Grooming:",
        desc:
          "The Abyssinian cat's coat is easy to care for. It will enjoy brushing or combing and if you really want a 'professional' shine you can 'polish' it by stroking gently with a damp chamois leather to bring out the gleam in the coat. As with all cats, this breed needs regular vaccinations, parasite control and annual health checks.",
      },
    ],
    nutrition: [
      {
        id: 1,
        title: "Nutrition:",
        desc:
          "Every cat is unique and each has their own particular likes, dislikes, and needs when it comes to food. However, cats are carnivores and every cat must obtain 41 different and specific nutrients from their food. The proportion of these nutrients will vary depending on age, lifestyle and overall health, so it's not surprising that a growing, energetic kitten needs a different balance of nutrients in her diet than a less active senior cat. Other considerations to bear in mind are feeding the right quantity of food to maintain 'ideal body condition' in accordance with feeding guidelines and catering to individual preference regarding wet or dry food recipes.",
      },
    ],
    history: [
      {
        id: 1,
        desc:
          "Every cat is unique and each has their own particular likes, dislikes, and needs when it comes to food. However, cats are carnivores and every cat must obtain 41 different and specific nutrients from their food. The proportion of these nutrients will vary depending on age, lifestyle and overall health, so it's not surprising that a growing, energetic kitten needs a different balance of nutrients in her diet than a less active senior cat. Other considerations to bear in mind are feeding the right quantity of food to maintain 'ideal body condition' in accordance with feeding guidelines and catering to individual preference regarding wet or dry food recipes.",
      },
    ],
    personality: [
      {
        id: 1,
        desc:
          "Lively, self-confident, strong willed and fearless, yet charming and comical, it is easy to see why instead of vanishing into the melting pot of working breeds, the Affenpinscher was promoted to cherished pet! Their sparkling eyes and monkey-whiskered face are irresistible and they are very affectionate with their owners, though often a little wary of strangers. Despite their diminutive stature, the Affenpinscher still believes he is a working terrier at times, so does require some training!",
      },
    ],
  }),
  methods: {
    getLikeStatus() {
      if (this.isLoggedIn) {
        let uri =
          process.env.VUE_APP_ROOT_API +
          "animal/like/" +
          this.$route.params.slug +
          "/" +
          this.user.id;
        this.$http.get(uri).then((response) => {
          this.likeStatus = response.data.message;
        });
      } else {
        this.likeStatus = false;
      }
    },
    addLike(id) {
      if (this.isLoggedIn) {
        let uri =
          process.env.VUE_APP_ROOT_API +
          "animal/like/" +
          this.$route.params.slug +
          "/" +
          this.user.id;
        this.$http
          .post(uri, id)
          .then((response) => {
            let uri_pet =
              process.env.VUE_APP_ROOT_API +
              "animal/dog/" +
              this.$route.params.slug;
            this.getLikeStatus();
            this.$http.get(uri_pet).then((response) => {
              this.breeds_info = response.data;
            });
          })
          .catch((error) => (this.errors = error.response.data.message));
      } else {
        this.$swal({
          icon: "error",
          confirmButtonColor: "#3085d6",
          text: "You need to login first before doing this action",
          confirmButtonText: "Confirm",
        });
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      user: "user",
    }),
  },
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

.family,
.type {
  padding-top: 24px;
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

.bg {
  background: red;
}
</style>
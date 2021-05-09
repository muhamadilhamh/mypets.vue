<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">Abyssinian</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/breedsCat">
            <v-icon left> mdi-chevron-left </v-icon>
            All Breeds
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="7" md="5" offset="1">
          <v-card elevation="5">
            <v-card-title> Abyssinian</v-card-title>
            <v-card-text>
              Abyssinian are elegant medium-sized cats with strong, lithe bodies
              and long, slender legs. They have round, wedge-shaped heads with
              distinctive small tufts on the tips of ears and large
              almond-shaped eyes. The short, close-lying coat of an Abyssinian
              cat, has a distinctive 'ticked' look caused by bands of colour on
              each hair. The most well know colour is 'ruddy' but there are
              several others.
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="1" md="1">
                  <v-rating
                    hover
                    background-color="grey darken-1"
                    color="#EF5350"
                    large
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    length="1"
                  >
                  </v-rating>
                </v-col>
                <v-col cols="3" md="3">
                  <p class="rate">256</p>
                </v-col>

                <v-col cols="4" md="4" class="type">
                  <p><span class="bold">Type:</span> Cat</p>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-img src="../assets/dua.png"> </v-img>
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
              <h3 class="desc_fact">Physical Attributes</h3>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <!--left side -->
              <v-col cols="5" md="5" offset-md="1">
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in body" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in head" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in legs" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>

                <br />
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in color" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>

                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>

              <v-col cols="6" md="6">
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in ears" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in eyes" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in tail" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
                <br />

                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in coat" :key="item.id">
                    <v-card-title>
                      <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- first -->
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

              <v-col cols="8" md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in history" :key="item.id">
                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- Second -->
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

              <v-col cols="8" md="8" offset="2">
                <v-card outlined class="rounded-xl">
                  <v-container v-for="item in personality" :key="item.id">
                    <v-card-text>
                      {{ item.desc }}
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!--Third -->
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
              <v-col cols="8" md="8" offset-md="2">
                <v-card outlined class="rounded-xl">
                  <div class="pa-5">
                    <v-container>
                      <v-row>
                        <v-col cols="7" md="6">
                          <h5>Activity</h5>
                          <v-rating
                            hover
                            v-model="actifity"
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
                          <h5>Attention</h5>
                          <v-rating
                            hover
                            v-model="attention"
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
                          <h5>Hardiness</h5>
                          <v-rating
                            hover
                            v-model="Hardiness"
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
                          <h5>Affection to Owners</h5>
                          <v-rating
                            hover
                            v-model="Affection"
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
                            v-model="playfulness"
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
                            v-model="groom"
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
                          <h5>Friendliness To Children</h5>
                          <v-rating
                            hover
                            v-model="friendlinessChild"
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
                          <h5>Independence</h5>
                          <v-rating
                            hover
                            v-model="independence"
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
                            v-model="friendlinessOther"
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
                          <h5>Docility</h5>
                          <v-rating
                            hover
                            v-model="docility"
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
                          <h5>Intelligence</h5>
                          <v-rating
                            hover
                            v-model="intelligence"
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
                            v-model="vocality"
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

        <!--Fourth-->
        <v-tab class="tit"> Comment</v-tab>
        <v-tab-item class="konten_fact"> </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
export default {
  nama: "CatDetail",
  created() {
    this.$emit("update:layout", "div");
  },
  data: () => ({
    breeds_info: [],
    actifity: 5,
    attention: 4,
    Hardiness: 2,
    Affection: 4,
    playfulness: 5,
    groom: 2,
    independence: 3,
    friendlinessChild: 2,
    friendlinessOther: 3,
    docility: 1,
    intelligence: 4,
    vocality: 1,
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart ",
    body: [
      {
        id: 1,
        title: "Body",
        desc:
          "Medium long, lithe, and graceful. They tend to show well developed muscular strength and they often strike a medium between a stocky and svelte body type.",
      },
    ],
    head: [
      {
        id: 1,
        title: "Head",
        desc:
          "Modified, slightly rounded wedge without flat planes; brow, cheek, and profilelines usually show a gentle contour. Slight rise from the bridge of their nose to their forehead, with width between their ears and flowing into their arched neck. Their muzzle tends not to be sharply pointed or square; their chin neither receding nor protruding.",
      },
    ],
    legs: [
      {
        id: 1,
        title: "Legs & Paws",
        desc:
          "Their legs and feet proportionately slim, fine boned, giving impression of being on tip toe. Their paws are small, oval, and compact. Then have five toes in front and four behind.",
      },
    ],
    color: [
      {
        id: 1,
        title: "Color",
        desc:
          "Ruddy, red (cinnamon gene; also called sorrel), blue, and fawn. In England, Australia, and New Zealand, a fifth color, silver, has been accepted.",
      },
    ],
    ears: [
      {
        id: 1,
        title: "Ears",
        desc:
          "Alert, large, and moderately pointed; broad and cupped at base, set as though listening. Hair on their ears tends to be very short and close lying.",
      },
    ],
    eyes: [
      {
        id: 1,
        title: "Eyes",
        desc:
          "Their eyes are often almond-shaped, large, brilliant, and expressive. Neither round nor Oriental. Their eyes are often accentuated by a fine dark line, encircled by light colored area. Their eye color can be gold or green, often with a beautiful richness and depth of color.",
      },
    ],
    tail: [
      {
        id: 1,
        title: "Tail",
        desc: "Thick at base, fairly long and tapering.",
      },
    ],
    coat: [
      {
        id: 1,
        title: "Coat",
        desc:
          "Soft, silky, fine in texture, dense and resilient to the touch with lustrous sheen; medium in length but long enough to accommodate two or three dark bands of ticking.",
      },
    ],
    history: [
      {
        id: 1,
        desc:
          "The Abyssinian is unquestionably one of the oldest known breeds, but no one knows exactly when or where they originated. Some think the Abyssinians’s ancestors came from Abyssinia (now Ethiopia), and that they were named for that country. Others think the breed originated on the coast of the Indian Ocean and in parts of Southeast Asia; recent genetic studies indicate today’s Abyssinian may have descended from a type of cat found in those areas.The best known tale is that today’s Abyssinians is a descendant of the sacred cats worshiped as the physical manifestations of the gods in the temples and palaces of the ancient Egyptians some 4,000 to 6,000 years ago. Abyssinians do look like the cats depicted in Egyptian murals and sculptures, but so does the African wildcat (Felis silvestris lybica), the species known to have been mummified by the ancient Egyptians and from which feline experts believe all domestic cats arose. Abyssinians are often known for their lively temperaments.A cat named Zula was transported from Abyssinia to England at the end of the Abyssinian War in 1868, but whether Zula was an Abyssinian is subject to debate. The illustration of Zula shows a cat with very small ears and a head type unlike a typical Abyssinian. Since there’s no written evidence linking Zula with today’s breed, some maintain that the original lines died out, and the Abyssinian was recreated by the British from existing British Bunny cats that have Abyssinian-like ticking.Without question, the breed was promoted and refined by the British until World War II decimated the breed, forcing the British to start over from scratch. Two Abyssinians arrived in America from England in the early 1900s. However, the Abyssinians who began  today’s North American breed were imported from Britain in the 1930s. Since then. the breed has gained popularity for their beauty and acrobatic antics. Today, the Abyssinian one of the most popular shorthairs.",
      },
    ],
    personality: [
      {
        id: 1,
        desc:
          "Abyssinians aren’t for those who want a cat that enjoys being picked up and cuddled. Because they can often be courageous, curious, and high-spirited, when they feel restrained Abyssinians tend to attempt to struggle free.That’s not to say Abyssinians are aloof or standoffish; they’re typically affectionate, devoted, and loving companions. While typically not lap cats, they may prefer to sit next to you rather than on you. Nevertheless, they’ll follow you from room to room to keep an eye on what you’re doing.While Abyssinians will cheerfully entertain themselves, they are most happy when they’re very involved member of the household. They are particularly involved at dinnertime. Abyssinians regularly perform antics for your-and their-amusement, earning them the reputation of the clowns of the cat kingdom. They may perch on shoulders, crawl under covers, and sit beside you purring madly before racing off to bat imaginary butterflies and make flying leaps at the tallest bookcases.Natural athletes, no closed room or cupboard is safe from their agile paws and inquiring minds. Vocally they tend to be quiet. They purr with great enthusiasm, however, particularly around dinner time. If you’ll be away all day, you may want to consider providing a cat companion to keep your Abyssinians entertained or she will become bored and may act out.  If you work all day and have an active social life at night, an Abyssinian may not be the cat for you.",
      },
    ],
  }),
  mounted() {
    let uri = "http://localhost:8000/api/animal/dog/" + this.$route.params.slug;
    this.$http.get(uri).then((response) => {
      this.breeds_info = response.data;
    });
  },
  methods: {
    loadData() {
      let uri =
        "http://localhost:8000/api/animal/dog/" + this.$route.params.slug;
      this.$http.get(uri).then((response) => {
        this.breeds_info = response.data;
      });
    },
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
</style>


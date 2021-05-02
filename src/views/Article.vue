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
                <v-btn
                  block
                  outlined
                  rounded-lg
                  x-large
                  elevation="5"
                  class="btn text-capitalize"
                  color="#515151"
                >
                  Dog
                </v-btn>
              </v-row>
            </v-col>
            <!-- Option Article -->
            <v-col cols="12" sm="6">
              <v-row class="pa-12">
                <!-- Cat -->
                <v-btn
                  block
                  outlined
                  rounded-lg
                  x-large
                  elevation="5"
                  class="btn text-capitalize"
                  color="#515151"
                >
                  Cat
                </v-btn>
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
            <v-col cols="12" sm="5">
              <p>Agar tetap bugar Anjing pun perlu dilatih</p>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="carousel hidden-xs-only">
          <v-carousel
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <!-- Carousel-slide 1 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_training1"
                  :key="item.id"
                  cols="12"
                  sm="3"
                >
                  <v-container>
                    <v-card class="rounded-xl" color="#fff" elevation="8">
                      <v-card-title>
                        <p class="title_training">{{ item.title }}</p>
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
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>

            <!-- Carousel-slide 2 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_training2"
                  :key="item.id"
                  cols="12"
                  sm="3"
                >
                  <v-container>
                    <v-card
                      class="rounded-xl"
                      color="#fff"
                      elevation="8"
                      aspect-ratio="1.5"
                    >
                      <v-card-title>
                        <p class="title_training">{{ item.title }}</p>
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
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-container>

        <div class="hidden-sm-and-up">
          <v-container class="carousel">
            <v-carousel
              height="900"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <!-- Carousel-slide 1 -->
              <v-carousel-item>
                <v-row class="pa-5">
                  <v-col
                    v-for="item in feed_training1"
                    :key="item.id"
                    cols="12"
                    sm="3"
                  >
                    <v-container>
                      <v-card class="rounded-xl" color="#fff" elevation="8">
                        <v-card-title>
                          <p class="title_training">{{ item.title }}</p>
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
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-carousel-item>

              <!-- Carousel-slide 2 -->
              <v-carousel-item>
                <v-row class="pa-5">
                  <v-col
                    v-for="item in feed_training2"
                    :key="item.id"
                    cols="12"
                    sm="3"
                  >
                    <v-container>
                      <v-card
                        class="rounded-xl"
                        color="#fff"
                        elevation="8"
                        aspect-ratio="1.5"
                      >
                        <v-card-title>
                          <p class="title_training">{{ item.title }}</p>
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
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
      </v-row>
    </div>

    <div :class="`rounded-t-xl`" class="bg_care">
      <v-row>
        <v-container>
          <v-row class="pa-2 training">
            <v-col cols="12" sm="3">
              <h2>Nutirision</h2>
            </v-col>
          </v-row>
          <v-row class="pa-2 desc_training">
            <v-col cols="12" sm="5">
              <p>Nutrisi Anjing sangat diperlukan agar tetap terjaga</p>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="carousel hidden-xs-only">
          <v-carousel
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <!-- Carousel-slide 1 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_nutrision1"
                  :key="item.id"
                  cols="12"
                  sm="3"
                >
                  <v-container>
                    <v-card class="rounded-xl" color="#fff" elevation="8">
                      <v-card-title>
                        <p class="title_training">{{ item.title }}</p>
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
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>

            <!-- Carousel-slide 2 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_nutrision2"
                  :key="item.id"
                  cols="12"
                  sm="3"
                >
                  <v-container>
                    <v-card
                      class="rounded-xl"
                      color="#fff"
                      elevation="8"
                      aspect-ratio="1.5"
                    >
                      <v-card-title>
                        <p class="title_training">{{ item.title }}</p>
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
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-container>

        <div class="hidden-sm-and-up">
          <v-container class="carousel">
            <v-carousel
              height="900"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <!-- Carousel-slide 1 -->
              <v-carousel-item>
                <v-row class="pa-5">
                  <v-col
                    v-for="item in feed_nutrision1"
                    :key="item.id"
                    cols="12"
                    sm="3"
                  >
                    <v-container>
                      <v-card class="rounded-xl" color="#fff" elevation="8">
                        <v-card-title>
                          <p class="title_training">{{ item.title }}</p>
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
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-carousel-item>

              <!-- Carousel-slide 2 -->
              <v-carousel-item>
                <v-row class="pa-5">
                  <v-col
                    v-for="item in feed_nutrision2"
                    :key="item.id"
                    cols="12"
                    sm="3"
                  >
                    <v-container>
                      <v-card
                        class="rounded-xl"
                        color="#fff"
                        elevation="8"
                        aspect-ratio="1.5"
                      >
                        <v-card-title>
                          <p class="title_training">{{ item.title }}</p>
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
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
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
              <p>Agar tetap bugar Anjing pun perlu dilatih</p>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="carousel hidden-xs-only">
          <v-carousel
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <!-- Carousel-slide 1 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_training1"
                  :key="item.id"
                  cols="12"
                  sm="3"
                >
                  <v-container>
                    <v-card class="rounded-xl" color="#fff" elevation="8">
                      <v-card-title>
                        <p class="title_training">{{ item.title }}</p>
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
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>

            <!-- Carousel-slide 2 -->
            <v-carousel-item>
              <v-row class="pa-5">
                <v-col
                  v-for="item in feed_training2"
                  :key="item.id"
                  cols="12"
                  sm="3"
                >
                  <v-container>
                    <v-card
                      class="rounded-xl"
                      color="#fff"
                      elevation="8"
                      aspect-ratio="1.5"
                    >
                      <v-card-title>
                        <p class="title_training">{{ item.title }}</p>
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
                      >
                        Detail
                        <v-icon right> mdi-chevron-right </v-icon>
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-container>

        <div class="hidden-sm-and-up">
          <v-container class="carousel">
            <v-carousel
              height="900"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <!-- Carousel-slide 1 -->
              <v-carousel-item>
                <v-row class="pa-5">
                  <v-col
                    v-for="item in feed_training1"
                    :key="item.id"
                    cols="12"
                    sm="3"
                  >
                    <v-container>
                      <v-card class="rounded-xl" color="#fff" elevation="8">
                        <v-card-title>
                          <p class="title_training">{{ item.title }}</p>
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
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-carousel-item>

              <!-- Carousel-slide 2 -->
              <v-carousel-item>
                <v-row class="pa-5">
                  <v-col
                    v-for="item in feed_training2"
                    :key="item.id"
                    cols="12"
                    sm="3"
                  >
                    <v-container>
                      <v-card
                        class="rounded-xl"
                        color="#fff"
                        elevation="8"
                        aspect-ratio="1.5"
                      >
                        <v-card-title>
                          <p class="title_training">{{ item.title }}</p>
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
                        >
                          Detail
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",

  data() {
    return {
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

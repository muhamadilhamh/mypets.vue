<template>
  <div class="page_age">
    <!-- Heroes -->
    <v-container>
      <v-row class="pa-3">
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/dogconversion">
            <v-icon left> mdi-dog </v-icon>
            Go to Dog
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="heroes_age">
      <v-row class="pa-12">
        <v-col cols="12" md="4">
          <v-img class="il_anjing" src="../assets/Kucing&Jongkok.svg"> </v-img>
        </v-col>
        <v-col cols="12" md="8">
          <div class="title_age">
            <h2>'Cat' Calculator</h2>
            <p>How to calculate the human age of a cat?</p>
          </div>
          <div class="tombol hidden-xs-only">
            <v-row class="mx-auto">
              <v-btn
                class="btn_minus minus"
                fab
                dark
                small
                @click="decreaseYear()"
              >
                <v-icon color="#ffff" dark> mdi-minus </v-icon>
              </v-btn>
              <p class="list_year">{{ yearCount }} Years Old</p>
              <v-btn class="btn_minus" fab small @click="increaseYear()">
                <v-icon color="#489FB5"> mdi-plus </v-icon>
              </v-btn>
            </v-row>
          </div>

          <!-- RESPONSIF -->
          <div class="tombol_respn d-sm-none">
            <v-row class="mx-auto">
              <v-btn
                class="btn_minus minus"
                fab
                dark
                small
                @click="decreaseYear()"
              >
                <v-icon color="#ffff" dark> mdi-minus </v-icon>
              </v-btn>
              <p class="list_year">{{ yearCount }} Years Old</p>
              <v-btn class="btn_minus" fab small @click="increaseYear()">
                <v-icon color="#489FB5"> mdi-plus </v-icon>
              </v-btn>
            </v-row>
          </div>

          <p class="output_year_cat">
            Your {{ yearCount }} year(s) old cat would have
            {{ humanYear }} year(s) if it is a human
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="detail_calculate">
      <v-row class="ofset-1">
        <v-col cols="12" md="9">
          <div class="title_age_option">
            <p>Methodology to calculate the age of a Cat</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="ofset-1">
        <v-col cols="12" sm="7">
          <div class="desc_age_option">
            <p>
              Practically, there is no mathematical formula (well at least, not
              a simple one) because the age of a cat does not follow a linear
              curve compared with the human age. Like many animals, "childhood"
              and "adolescence" occur much faster than humans.
            </p>
          </div>
          <div class="desc_age_option">
            <p>
              So it's rather from observations of the ages of cats that
              veterinarians have established a correlation table (age chart) to
              see an equivalence in human age:
            </p>
          </div>
        </v-col>

        <v-simple-table class="table_cat">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Cat real age</th>
                <th class="text-left">1</th>
                <th class="text-left">2</th>
                <th class="text-left">3</th>
                <th class="text-left">4</th>
                <th class="text-left">5</th>
                <th class="text-left">6</th>
                <th class="text-left">7</th>
                <th class="text-left">8</th>
                <th class="text-left">9</th>
                <th class="text-left">10</th>
                <th class="text-left">11</th>
                <th class="text-left">12</th>
                <th class="text-left">13</th>
                <th class="text-left">14</th>
                <th class="text-left">15</th>
                <th class="text-left">16</th>
                <th class="text-left">17</th>
                <th class="text-left">18</th>
                <th class="text-left">19</th>
                <th class="text-left">20</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-left">Human Age</th>
                <th class="text-left">19</th>
                <th class="text-left">24</th>
                <th class="text-left">28</th>
                <th class="text-left">32</th>
                <th class="text-left">36</th>
                <th class="text-left">40</th>
                <th class="text-left">44</th>
                <th class="text-left">48</th>
                <th class="text-left">52</th>
                <th class="text-left">56</th>
                <th class="text-left">60</th>
                <th class="text-left">64</th>
                <th class="text-left">68</th>
                <th class="text-left">72</th>
                <th class="text-left">76</th>
                <th class="text-left">80</th>
                <th class="text-left">84</th>
                <th class="text-left">88</th>
                <th class="text-left">94</th>
                <th class="text-left">100</th>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
      yearCount: 0,
      size: null,
      humanYear: 0,

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
  methods: {
    increaseYear() {
      this.yearCount += 1;
      this.ageCalculation();
    },
    decreaseYear() {
      this.yearCount -= 1;
      if (this.yearCount <= 0) this.yearCount = 0;
      this.ageCalculation();
    },
    ageCalculation() {
      if (this.yearCount == 1) {
        this.humanYear = 15;
      } else if (this.yearCount < 6 && this.yearCount > 1) {
        this.humanYear = 24 + 4 * (this.yearCount - 2);
      } else if (this.yearCount > 5) {
        this.humanYear = 24 + (this.yearCount - 2) * 4;
      } else if (this.yearCount == 0) {
        this.humanYear = 0;
      }
    },
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
.tombol {
  background: #489fb5;
  width: 40%;
  border-radius: 30px;
  box-shadow: 5px 10px 20px #515151;
}
.tombol_respn {
  background: #489fb5;
  width: 80%;
  text-align: center;
  border-radius: 30px;
  box-shadow: 5px 10px 20px #515151;
}
.list_year {
  padding-top: 15px;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 500;
}
.output_year_cat {
  margin-top: 40px;
  padding-top: 15px;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #dbd1c9;
  border-radius: 30px;
  text-align: center;
  padding-bottom: 10px;
}
.btn_minus {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 10px;
}
.radio_tipe {
  margin-top: 30px;
}
.table {
  width: 100%;
}
.table_cat {
  margin-bottom: 20px;
}
</style>

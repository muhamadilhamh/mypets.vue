<template>
  <div class="page_age">
    <!-- Heroes -->
    <v-container>
      <v-row class="pa-3">
        <v-col cols="2" md="2">
          <v-btn rounded depressed class="btn_back" to="/catconversion">
            <v-icon left> mdi-cat </v-icon>
            Go to Cat
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="heroes_age">
      <v-row class="pa-12">
        <v-col cols="12" md="4">
          <v-img class="il_anjing" src="../assets/Anjing&Berdiri.svg"> </v-img>
        </v-col>
        <v-col cols="12" md="8">
          <div class="title_age">
            <h2>'Dog' Calculator</h2>
            <p>How to calculate the human age of a dog?</p>
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
          <v-radio-group
            class="radio_tipe"
            v-model="size"
            row
            @change="ageCalculation"
          >
            <v-radio
              on-icon="mdi-dog"
              label="Small Dog"
              class="small_dog"
              value="small"
              @click="showOutput = true"
            ></v-radio>
            <v-radio
              on-icon="mdi-dog"
              label="Medium Dog"
              class="small_dog"
              value="medium"
              @click="showOutput = true"
            ></v-radio>
            <v-radio
              on-icon="mdi-dog"
              label="Big Dog"
              class="small_dog"
              value="big"
              @click="showOutput = true"
            ></v-radio>
          </v-radio-group>

          <p class="output_year" v-if="showOutput">
            Your {{ yearCount }} year(s) old dog would have
            {{ humanYear }} year(s) if it is a human
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="detail_calculate">
      <v-row class="ofset-1">
        <v-col cols="12" md="9">
          <div class="title_age_option">
            <p>Methodology to calculate the age of a Dog</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="ofset-1">
        <v-col cols="12" sm="7">
          <div class="desc_age_option">
            <p>
              Alot people think that to know the "human" age of a dog, you just
              have to multiply its age by 7, well ... that's just wrong!
              Practically, there is no mathematical formula (well at least, not
              a simple one) because the age of a dog does not follow a linear
              curve compared with the human age. Like many animals, "childhood"
              and "adolescence" occur much faster than humans. Indeed, the first
              year the dog grows five times faster than humans!
            </p>
          </div>
          <div class="desc_age_option">
            <p>
              So it's rather from observations of the ages of dogs that
              veterinarians have established a correlation table (age chart) to
              see an equivalence in human age:
            </p>
          </div>
        </v-col>

        <v-simple-table class="table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Age Of Dog</th>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-left">Small dog age to human</th>
                <th class="text-left">15</th>
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
              </tr>
              <tr>
                <th class="text-left">Medium dog age to human</th>
                <th class="text-left">15</th>
                <th class="text-left">24</th>
                <th class="text-left">28</th>
                <th class="text-left">32</th>
                <th class="text-left">36</th>
                <th class="text-left">42</th>
                <th class="text-left">47</th>
                <th class="text-left">51</th>
                <th class="text-left">56</th>
                <th class="text-left">60</th>
                <th class="text-left">65</th>
                <th class="text-left">69</th>
                <th class="text-left">74</th>
                <th class="text-left">78</th>
                <th class="text-left">83</th>
                <th class="text-left">87</th>
              </tr>
              <tr>
                <th class="text-left">Large dog age to human</th>
                <th class="text-left">15</th>
                <th class="text-left">24</th>
                <th class="text-left">28</th>
                <th class="text-left">32</th>
                <th class="text-left">36</th>
                <th class="text-left">45</th>
                <th class="text-left">50</th>
                <th class="text-left">55</th>
                <th class="text-left">61</th>
                <th class="text-left">66</th>
                <th class="text-left">72</th>
                <th class="text-left">77</th>
                <th class="text-left">82</th>
                <th class="text-left">88</th>
                <th class="text-left">93</th>
                <th class="text-left">120</th>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-col cols="12" md="8">
          <div class="desc_age_option">
            <h5>Note:</h5>
            <p>
              Small dog = dog under 15kg, Average dog = dog from 15 to 45 kg,
              Big dog = dog over 45 kg
            </p>
          </div>
          <div class="desc_age_option">
            <p>
              Finally, the more a dog is big (from is breed), the more its youth
              will be slow, but it would then get old more quickly, and its life
              would be shorter.
            </p>
          </div>
          <div class="desc_age_option">
            <p>
              <b> Life expectancy </b> of the dog:a dog can live 10 to 15 years
              depending on his size (and his breed).
            </p>
          </div>
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
      yearCount: 0,
      size: null,
      humanYear: 0,

      radio: "",
      radioRules: [(value) => !!value || "Username required"],
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
      if (this.yearCount > 0) this.yearCount -= 1;
      this.ageCalculation();
    },
    ageCalculation() {
      if (this.yearCount <= 1) {
        this.humanYear = 15;
      } else if (
        this.yearCount < 6 ||
        (this.size == "small" && this.yearCount > 1)
      ) {
        this.humanYear = 24 + 4 * (this.yearCount - 2);
      } else if (this.yearCount > 5 && this.size == "medium") {
        if (this.yearCount % 2 == 1) {
          this.humanYear = parseInt(
            24 + 4 * (this.yearCount - 2) + this.yearCount / 2
          );
        } else {
          this.humanYear = parseInt(
            24 + 4 * (this.yearCount - 2) + (this.yearCount - 1) / 2
          );
        }
      } else if (this.yearCount > 5 && this.size == "big") {
        if (this.yearCount < 9) {
          if (this.yearCount % 2 == 1) {
            this.humanYear = parseInt(
              24 + 4 * (this.yearCount - 1) + this.yearCount - 5
            );
          } else {
            this.humanYear = parseInt(
              24 + 4 * (this.yearCount - 1) + (this.yearCount - 5)
            );
          }
        } else {
          if (this.yearCount == 9) return (this.humanYear = 61);
          if (this.yearCount == 10) return (this.humanYear = 66);
          if (this.yearCount == 11) return (this.humanYear = 72);
          if (this.yearCount == 12) return (this.humanYear = 77);
          if (this.yearCount == 13) return (this.humanYear = 82);
          if (this.yearCount == 14) return (this.humanYear = 88);
          if (this.yearCount == 15) return (this.humanYear = 93);
          if (this.yearCount == 16) return (this.humanYear = 120);
          if (this.yearCount > 16) {
            this.humanYear = 7 * this.yearCount + this.yearCount - 3;
          }
        }
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
  width: 70%;
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
.output_year {
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
.small_dog {
  font-weight: 700;
}
</style>

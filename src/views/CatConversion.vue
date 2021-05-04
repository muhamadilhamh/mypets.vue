<template>
  <div class="page_age">
    <!-- Heroes -->
    <v-container class="heroes_age">
      <v-row class="pa-12">
        <v-col cols="12" sm="4">
          <v-img class="il_anjing" src="../assets/Kucing&Jongkok.svg"> </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="title_age">
            <h2>'Cat' Calculator</h2>
            <p>How to calculate the human age of a dog?</p>
          </div>
           <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click ="decreaseYear()"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
        <v-btn
      class="ma-2"
      outlined
      color="indigo"
    >
      {{yearCount}} Years Old
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click ="increaseYear()"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
   
<p>Your {{yearCount}} year(s) old cat would have {{humanYear}} year(s) if it is a human </p>
</v-col>
      </v-row>
    </v-container>
 

  </div>
</template>
<script>
export default {
  name: "Ageconversion",

  data() {
    return {
      yearCount : 0 ,
      size : null,
      humanYear : 0,
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
  methods : {
    increaseYear(){
        this.yearCount +=1;  
        this.ageCalculation();
    },
    decreaseYear(){
        this.yearCount -=1;  
        if(this.yearCount <= 0)
        this.yearCount = 0;
        this.ageCalculation();
    },
    ageCalculation(){
        if(this.yearCount == 1){
            this.humanYear = 15;
        }else if( this.yearCount < 6 && this.yearCount > 1){
            this.humanYear = 24 + 4*(this.yearCount-2)
        }
        else if(this.yearCount > 5){
           this.humanYear = 24 + (this.yearCount-2)*4
        }else if(this.yearCount == 0 ){
            this.humanYear = 0;
        }
    }
    }
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
</style>

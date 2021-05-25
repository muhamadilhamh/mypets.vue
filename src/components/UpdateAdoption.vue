<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">Upload Adoption</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="12" md="4" sm="4" offset-md="1">
         <v-carousel height = "800px">         <v-carousel-item
      v-for="(item,i) in adoption_image"
      :key="i"
    >
    
      <v-img class="rounded-lg" :src="url + item.img"> </v-img></v-carousel-item>
      </v-carousel>
               
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-row class="pa-12">
          <v-container>
            <v-col cols="12">
              <v-form ref="form" class="login">
                <h5>Name</h5>
                <v-text-field
                  v-model="adoption_info.name"
                  :rules="nameRules"
                  placeholder="Input Name"
                  required
                  outlined
                  rounded
                  dense
                  color="#489FB5"
                ></v-text-field>

                <div>
                  <h5>Description</h5>
                  <v-textarea
                    v-model="adoption_info.description"
                    :rules="descRules"
                    placeholder="Input Description"
                    outlined
                    rounded
                    dense
                    color="#489FB5"
                  ></v-textarea>
                </div>

                <v-row>
                  <v-col>
                    <div v-if="showform">
                      <h5>Pet</h5>

                      <v-radio-group v-model="adoption_info.animal_name" row
                      @change="subSpecies(animal_name)">
                        <v-radio
                          color="#489FB5"
                          label="Cat"
                          on-icon="mdi-cat"
                          value="Cat"
                        >
                        </v-radio>
                        <v-radio
                          color="#489FB5"
                          label="Dog"
                          on-icon="mdi-dog"
                          value="Dog"
                        ></v-radio>
                      </v-radio-group>
                    </div>
                  </v-col>

                  <v-col>
                    <div v-if="showform">
                      <h5>Gender</h5>
                      <v-radio-group v-model="adoption_info.gender" row>
                        <v-radio
                          label="Male"
                          on-icon="mdi-gender-male"
                          value="Male"
                        ></v-radio>
                        <v-radio
                          label="Female"
                          value="Female"
                          on-icon="mdi-gender-female"
                        ></v-radio>
                      </v-radio-group>
                    </div>
                  </v-col>
                </v-row>
                <v-row v-if="showform">
                <v-col cols="12" sm="12" md="12">
                <h5>Type</h5>
                <v-autocomplete
              clearable
              rounded
              item-text="name"
              :items="animal_list"
              item-value="name"
              label="Search Adoption"
              v-model="adoption_info.animal_type"
              placeholder="Search Adoption"
              prepend-inner-icon="mdi-magnify"
              solo
            >
              <template slot="selection" slot-scope="{ item }">
                {{ item.type }} - {{ item.name }}
              </template>
              <template slot="item" slot-scope="{ item }">
                {{ item.type }} - {{ item.name }}
              </template>
            </v-autocomplete>
          </v-col>
</v-row>
<h5>Location</h5>
                <v-autocomplete
              clearable
              rounded
              :rules="locRules"
              item-text="name"
              :items="location_data"
              item-value="name"
              label="Select Location"
              v-model="adoption_info.location"
              placeholder="Select Location"
              prepend-inner-icon="mdi-magnify"
              solo
            >
            
            </v-autocomplete>
                <v-row v-if="showform">
                  <v-col cols="6">
                    <h5>Age (Months)</h5><br>
                    <v-slider
      v-model="adoption_info.age"
      :rules="ageRules"
      :min="0"
      :max="60"
      step="1"
      
      thumb-label="always"
    ></v-slider>
                  </v-col>
                  <v-col cols="6">
                    <h5>Color</h5>
                    <v-text-field
                      v-model="adoption_info.color"
                      :rules="ageRules"
                      label="Color"
                      required
                      outlined
                      rounded
                      dense
                      color="#489FB5"
                    ></v-text-field>
                    
                  </v-col>
                </v-row>
                <v-row v-if="showform">
                  <v-col cols="6">
                    <h5>Health</h5>
                     <v-autocomplete
              clearable
              rounded
             v-model="adoption_info.health"
            :items="health_value"
            dense
            filled
            label="Health"
              solo
            >
            
            </v-autocomplete>
                  </v-col>
                  <v-col cols="6">
                    <h5>Body</h5>
                    <v-autocomplete
              clearable
              rounded
             v-model="adoption_info.body"
            :items="body_value"
            dense
            filled
            label="Body"
              solo
            >
            
            </v-autocomplete>
                    
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="4" offset-md="1">
                    <v-btn
                      :to="{ name: 'profile', params: { username : user.username } }"
                      rounded
                      class="btn_login"
                      outlined
                      block
                    >
                      Back To Profile
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      rounded
                      class="btn_login"
                      color="#489FB5"
                      dark
                      elevation="7"
                      block
                      @click = "upload"
                    >
                      Publish Adoption
                    </v-btn>
                    
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
           
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  nama: "UploadAdoption",
  created() {
    this.$emit("update:layout", "div");
  },
  data: () => ({
    showform: true,
     url : process.env.VUE_APP_IMAGE_URL,
    isDragging: false,
    adoption_image : [],
    dragCount: 0,
     animal_list: [],
     adoption_info : [],
    health_value : ['Bad Condition','Good Condition'],
    files: [],
    images: [],
    animal_name : "",
    type : "",
    gender : "",
    name: "",
    body: "",
    health: "",
    body_value : ['Small','Medium','Big'],
    nameRules: [(value) => !!value || "Name required"],
    desc: "",
    descRules: [(value) => !!value || "Description is required"],
    loc: "",
    locRules: [(value) => !!value || "Location is required"],
    submitStatus: null,
    location_data : [],
    age: "",
    ageRules: [(value) => !!value || "Age is required"],
    color: "",
    colorRules: [(value) => !!value || "Type is required"],
  }),
  validations: {
    name : {
      required,
    },
    images: {
      required
    },
    desc :{
      required
    },

  },
  computed : {
    ...mapGetters({ 
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
  },
  mounted(){
    let uri = process.env.VUE_APP_ROOT_API + "adoption/detail/" + this.$route.params.id_adoption;
    this.$http.get(uri).then((response) => {
      this.adoption_info = response.data;
    });
    
    let uri_animal = process.env.VUE_APP_ROOT_API + "animal";
    this.$http.get(uri_animal).then((response) => {
      this.animal_list = response.data;
    });
    let uri_loc = process.env.VUE_APP_ROOT_API + "location/cities";
    this.$http.get(uri_loc).then((response) => {
      this.location_data = response.data;
    });
    let uri_img = process.env.VUE_APP_ROOT_API + "adoption/detail/" + this.$route.params.id_adoption + "/images";
    this.$http.get(uri_img).then((response) => {
        this.adoption_image = response.data;
     
    }); 
  },
  methods: {
    deleteImage(){
       this.images.splice(0,this.images.length);
    },
     subSpecies(value) {
      if (value != null) {
        let uri_cat = process.env.VUE_APP_ROOT_API + "animal/" + value;
        this.$http.get(uri_cat).then((response) => {
          this.animal_list = response.data;
        });
      } else {
        let uri_cat = process.env.VUE_APP_ROOT_API + "animal/";
        this.$http.get(uri_cat).then((response) => {
          this.animal_list = response.data;
        });
      }
    },
    submit(){
      this.$v.$touch()
        if(this.$v.$invalid){
          this.submitStatus = 'Error'
        }else {
          console.log("sss"),
          this.submitStatus = 'Pending'
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
    },
        OnDragEnter(e) {
            e.preventDefault();
            
            this.dragCount++;
            this.isDragging = true;
            return false;
        },
        OnDragLeave(e) {
            e.preventDefault();
            this.dragCount--;
            if (this.dragCount <= 0)
                this.isDragging = false;
        },
        onInputChange(e) {
            const files = e.target.files;
            for(let i=0 ; i<4; i++){
            this.addImage(files[i])
            }
        },
        onDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;
            const files = e.dataTransfer.files;
            for(let i=0 ; i<4; i++){
            this.addImage(files[i])
            }
        },
        addImage(file) {
            if (!file.type.match('image.*')) {
                this.$toastr.e(`${file.name} is not an image`);
                return;
            }
            this.files.push(file);
            const img = new Image(),
            reader = new FileReader();
            reader.onload = (e) => this.images.push(e.target.result);
            reader.readAsDataURL(file);
        },
        getFileSize(size) {
            const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
            let i = 0;
            
            while(size > 900) {
                size /= 1024;
                i++;
            }
            return `${(Math.round(size * 100) / 100)} ${fSExt[i]}`;
        },
        upload() {
          let self = this;
            const formData = new FormData();
            const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
           
            formData.append('user_id',this.user.id) 
            formData.append('animal_name',this.adoption_info.animal_name) 
            formData.append('name',this.adoption_info.name) 
            formData.append('desc',this.adoption_info.description) 
            formData.append('type',this.adoption_info.animal_type)
            formData.append('gender',this.adoption_info.gender)       
            formData.append('color',this.adoption_info.color)  
            formData.append('loc',this.adoption_info.location)
             formData.append('age',this.adoption_info.age)
            formData.append('body',this.adoption_info.body)
            formData.append('health',this.adoption_info.health)
        /*$.each(this.images, function (key, image) {
        formData.append(`images[${key}]`, image)
        })*/
          this.files.forEach(file => {
                formData.append('images[]', file, file.name);
            });
           axios.post(
                        process.env.VUE_APP_ROOT_API + 'profile/' + this.user.id + '/adoption/' + this.$route.params.id ,formData,config
                    )
                .then((response) => {
                  this.$swal({
              icon : 'success',
               confirmButtonColor: '#3085d6',
                text: "Adoption has been successfully uploaded",
            confirmButtonText: 'Confirm',
            closeOnCancel: true
            });
                    self.$router.push('/adoption');
                }).catch(function (error) {
    console.log(error);
});
        }
    }
};
</script>

<style lang="scss" scoped>
/* Upload Adoption */
.uploader {
    width: 100%;
    background: #2196F3;
    color: #fff;
    padding: 40px 15px;
    text-align: center;
    border-radius: 10px;
    border: 3px dashed #fff;
    font-size: 20px;
    position: relative;
    &.dragging {
        background: #fff;
        color: #2196F3;
        border: 3px dashed #2196F3;
        .file-input label {
            background: #2196F3;
            color: #fff;
        }
    }
    i {
        font-size: 85px;
    }
    .file-input {
        width: 200px;
        margin: auto;
        height: 68px;
        position: relative;
        label,
        input {
            background: #fff;
            color: #2196F3;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 10px;
            border-radius: 4px;
            margin-top: 7px;
            cursor: pointer;
        }
        input {
            opacity: 0;
            z-index: -2;
        }
    }
    .images-preview {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .img-wrapper {
            width: 160px;
            display: flex;
            flex-direction: column;
            margin: 10px;
            height: 150px;
            justify-content: space-between;
            img {
                max-height: 105px;
            }
        }
        .details {
            font-size: 12px;
            background: #fff;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: self-start;
            padding: 3px 6px;
            .name {
                overflow: hidden;
                height: 18px;
            }
        }
    }
    .upload-control {
        position: absolute;
        width: 100%;
        background: #fff;
        top: 0;
        left: 0;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        padding: 10px;
        padding-bottom: 4px;
        text-align: right;
        button, label {
            background: #2196F3;
            border: 2px solid #03A9F4;
            border-radius: 3px;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
        }
        label {
            padding: 2px 5px;
            margin-right: 10px;
        }
    }
}
</style>
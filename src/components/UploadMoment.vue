<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <v-card-actions>
          <h5 class="title_cat">Upload Moment</h5>
        </v-card-actions>
      </v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="12" md="4" sm="4" offset-md="1">
        <div
          class="uploader"
          @dragenter="OnDragEnter"
          @dragleave="OnDragLeave"
          @dragover.prevent
          @drop="onDrop"
          :class="{ dragging: isDragging }"
        >
          <v-icon size="100">mdi-cloud-upload-outline</v-icon>
          <p>Drag your images here</p>
          <div>OR</div>
          <div class="file-input">
            <label class="file" for="file">Select a file</label>
            <input type="file" id="file" @change="onInputChange" multiple />
          </div>
           <div class="images-preview" v-show="images.length">
            <div class="img-wrapper" v-for="(image, index) in images" :key="index">
                <img :src="image" :alt="`Image Uplaoder ${index}`" height = "500px" width = "500px">
                <div class="details">
                    <span class="name" v-text="files[index].name"></span>
                    <span class="size" v-text="getFileSize(files[index].size)"></span>
                </div>
            </div>
        </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-row class="pa-12">
          <v-container>
            <v-col cols="12">
              <v-form ref="form" class="login">
                <h5>Moment Title</h5>
                <v-text-field
                  v-model="title"
                  :rules="nameRules"
                  placeholder="Input Title"
                  required
                  outlined
                  rounded
                  dense
                  color="#489FB5"
                ></v-text-field>
            

                <div>
                  <h5>Description</h5>
                  <v-textarea
                    v-model="desc"
                    :rules="descRules"
                    placeholder="Input Description"
                    outlined
                    rounded
                    dense
                    color="#489FB5"
                  ></v-textarea>
                </div>

                <h5>Location</h5>
                <v-text-field
                  v-model="loc"
                  :rules="locRules"
                  placeholder="Input Location"
                  outlined
                  rounded
                  dense
                  color="#489FB5"
                  @click="showform = !showform"
                ></v-text-field>

                <v-row>
                  <v-col>
                    <div>
                      <h5>Pet</h5>

                      <v-radio-group v-model="animal_name" row
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
                    <div>
                      <h5>Gender</h5>
                      <v-radio-group v-model="gender" row>
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
                <v-row >
                <v-col cols="12" sm="12" md="12">
                <h5>Type</h5>
                <v-autocomplete
              clearable
              rounded
              item-text="name"
              :items="animal_list"
              item-value="slug"
              label="Search Adoption"
              v-model="type"
              placeholder="Select Pet Type"
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
                
                
                <v-row>
                  <v-col cols="4" offset-md="1">
                    <v-btn
                      to="/profile"
                      rounded
                      class="btn_login"
                      outlined
                      block
                    >
                      Back
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
    showform: false,
    isDragging: false,
    dragCount: 0,
     animal_list: [],
    files: [],
    images: [],
    animal_name : "",
    type : "",
    gender : "",
    name: "",
    title: "",
    body: "",
    health: "",
    nameRules: [(value) => !!value || "Name required"],
    desc: "",
    descRules: [(value) => !!value || "Description is required"],
    loc: "",
    locRules: [(value) => !!value || "Location is required"],
    submitStatus: null,
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
    let uri_animal = "http://localhost:8000/api/animal/";
    this.$http.get(uri_animal).then((response) => {
      this.animal_list = response.data;
    });
  },
  methods: {
     subSpecies(value) {
      if (value != null) {
        let uri_cat = "http://localhost:8000/api/animal/" + value;
        this.$http.get(uri_cat).then((response) => {
          this.animal_list = response.data;
        });
      } else {
        let uri_cat = "http://localhost:8000/api/animal/";
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
            Array.from(files).forEach(file => this.addImage(file));
        },
        onDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;
            const files = e.dataTransfer.files;
            Array.from(files).forEach(file => this.addImage(file));
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
            formData.append('animal_name',this.animal_name) 
            formData.append('title',this.title) 
            formData.append('desc',this.desc) 
            formData.append('type',this.type)
            formData.append('gender',this.gender)       
            formData.append('loc',this.loc)
        /*$.each(this.images, function (key, image) {
        formData.append(`images[${key}]`, image)
        })*/
          this.files.forEach(file => {
                formData.append('images[]', file, file.name);
            });
           axios.post(
                        'http://localhost:8000/api/upload/moment',formData,config
                    )
                .then(function (response) {
                    self.$router.push('/adoption');
                }).catch(function (error) {
    console.log(error);
});
        }
    }
};
</script>

<style>
/* Upload Adoption */
.uploader {
  top: 20%;
  width: 100%;
  background: #489fb5;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed #fff;
  font-size: 20px;
  position: relative;
  left: auto;
  right: auto;
}

.file-input {
  width: 200px;
  margin: auto;
  height: 68px;
  position: relative;
}

.file-input .file {
  background: #fff;
  color: #489fb5;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
  border-radius: 4px;
  margin-top: 7px;
  cursor: pointer;
}
.file-input label {
  background: #489fb5;
  color: #fff;
}
.file-input input {
  background: #fff;
  color: #489fb5;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
  border-radius: 4px;
  margin-top: 7px;
  cursor: pointer;
}

.file-input input {
  opacity: 0;
  z-index: -2;
}
.dragging {
  background: #fff;
  color: #489fb5;
  border: 3px dashed #489fb5;
}
</style>
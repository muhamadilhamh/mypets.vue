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
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-row class="pa-12">
          <v-container>
            <v-col cols="12">
              <v-form ref="form" class="login">
                <h5>Name</h5>
                <v-text-field
                  v-model="name"
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
                    v-model="desc"
                    :rules="descRules"
                    :counter="163"
                    placeholder="Input Description"
                    outlined
                    rounded
                    dense
                    color="#489FB5"
                  ></v-textarea>
                </div>

                <v-row>
                  <v-col>
                    <div>
                      <h5>Pet</h5>

                      <v-radio-group v-model="row" row>
                        <v-radio
                          color="#489FB5"
                          label="Cat"
                          on-icon="mdi-cat"
                          value="radio-1"
                        >
                        </v-radio>
                        <v-radio
                          color="#489FB5"
                          label="Dog"
                          on-icon="mdi-dog"
                          value="radio-2"
                        ></v-radio>
                      </v-radio-group>
                    </div>
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
                    >
                      Publish Moment
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
export default {
  nama: "UploadMoment",
  created() {
    this.$emit("update:layout", "div");
  },
  data: () => ({
    isDragging: false,
    dragCount: 0,
    files: [],
    images: [],
    name: "",
    nameRules: [(value) => !!value || "Name required"],
    desc: "",
    descRules: [
      (value) => !!value || "Description is required",
      (value) =>
        value.length <= 163 || "Description must be less than 163 characters",
    ],
    loc: "",
    locRules: [(value) => !!value || "Location is required"],
    body: "",
    bodyRules: [(value) => !!value || "Body is required"],
    age: "",
    ageRules: [(value) => !!value || "Age is required"],
    color: "",
    colorRules: [(value) => !!value || "Color is required"],
    health: "",
    healthRules: [(value) => !!value || "Health is required"],
  }),
  methods: {
    OnDragEnter(e) {
      e.preventDefault();

      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange(e) {
      console.log(e);
    },
    onDrop(e) {
      console.log(e);
    },
  },
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
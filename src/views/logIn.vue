<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" class="left">
        <!-- <div class="leftContents">asdf</div> -->
      </v-col>

      <v-col class="right">
        <!-- 타이틀 -->
        <v-row>
          <v-col class="test1" offset-md="2" md="6" sm="12">
            <h2 class="pageTitle">Welcom to This Service</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <router-link to="/treeView"> -> Go TreeView</router-link>
          </v-col>
          <v-col>
            <router-link to="/gridView"> -> Go girdView</router-link>
          </v-col>
        </v-row>
        <!-- 라벨 -->
        <v-row>
          <v-col offset-md="2" md="6" sm="12">
            <h3 class="formTitle">Log in</h3>
          </v-col>
        </v-row>
        <!-- 입력 -->
        <v-row>
          <v-col offset-md="2" md="6" sm="12">
            <v-text-field
              label="ID"
              single-line
              filled
              type="text"
              v-model="id"
            />
            <v-text-field
              label="PW"
              single-line
              filled
              type="password"
              v-model="pw"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col offset-md="2" md="6" sm="12">
            <!-- <button class="loginBtn">Login</button> -->
            <v-btn class="loginBtn" x-large @click="login" color="#2c7a99" dark
              >Login</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pw: "",
    };
  },

  methods: {
    login() {
      console.log("Pressed");
    },
  },
};
</script>

<style scoped>
.left {
  background-color: #e6e6e6;
  height: 100vh;
}

.formTitle {
  margin-top: 11.76vh;
  font-size: 59px;
  font-weight: 700;
}

.pageTitle {
  font-size: 35px;
  font-weight: 500;
  margin-top: 9.8vh;
}

.loginBtn {
  color: #fff;
  width: 100%;
  height: 70px;
}
</style>
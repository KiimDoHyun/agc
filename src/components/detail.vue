<template>
  <v-container>
    <v-row>
      <v-col> hello {{ this.$route.params.name }} </v-col>
    </v-row>
    <v-row v-for="(item, index) in arrr" :key="index">
      <v-col cols="4">
        {{ item.friend_name }}
      </v-col>
      <v-col cols="4">
        {{ item.friend_alias }}
      </v-col>
      <v-col cols="4">
        {{ item.friend_age }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      arrr: [],
    };
  },
  props: {
    name: String,
  },
  beforeMount() {},
  mounted() {
    console.log(this.$route.params.name);
    console.log(this.name);
    this.call();
  },
  methods: {
    call() {
      this.axios
        // .get(
        //   `http://192.168.0.101:8017/api/values?P_RTN=S1&P_FRIEND_NAME=${this.$route.params.name}&P_FRIEND_ALIAS=&P_FRIEND_AGE=32`
        // )
        .get(`http://192.168.0.13:8000/logIn`, {
          email: "abc",
          password: "123123",
        })
        .then((res) => {
          // this.arrr = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
</style>
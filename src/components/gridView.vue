<template>
  <v-container>
    <v-row>
      <v-col class="loader"> Hi </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"> Name </v-col>
      <v-col cols="4"> Alies </v-col>
      <v-col cols="4"> Age </v-col>
    </v-row>

    <v-row v-for="(item, index) in arr" :key="index">
      <v-col cols="4">
        <router-link :to="`/detail/${item.friend_name}`">
          {{ item.friend_name }}
        </router-link>
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
import Detail from "@/components/detail.vue";

export default {
  component: {
    Detail,
  },
  mounted() {
    this.getApi();
  },
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    getApi() {
      this.axios
        .get(
          "http://192.168.0.101:8017/api/values?P_RTN=S1&P_FRIEND_NAME=&P_FRIEND_ALIAS=&P_FRIEND_AGE=32"
        )
        .then((res) => {
          this.arr = res.data;
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
.loader {
  text-align: center;
  font-weight: 600;
  /* margin-top: 40vh; */
}

.col {
  border: 1px solid black;
}
</style>
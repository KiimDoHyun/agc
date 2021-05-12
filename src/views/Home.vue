<template>
  <div>
    <logIn />
  </div>
</template>

<script>
// @ is an alias to /src
import logIn from "@/views/logIn.vue";

export default {
  components: {
    logIn,
  },

  // created() {
  //   this.getApi();
  // },

  // methods: {
  //   getApi() {
  //     this.axios
  //       .post(`http://192.168.0.13:8000/logIn`, {
  //         email: "abc",
  //         password: "123123",
  //       })
  //       .then((res) => {
  //         // this.arrr = res.data;
  //         this.$router.go("/treeView");
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // },
};
</script>

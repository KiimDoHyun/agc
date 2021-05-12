<template>
  <v-container fluid class="container">
    <v-row class="row">
      <!-- 트리뷰 -->
      <!-- load-children : 처음 열때? -->
      <v-col cols="2" class="treeCol">
        <v-treeview
          :active.sync="tree"
          :open="initiallyOpen"
          :items="items"
          activatable
          item-key="id"
          open-on-click
          class="treeView"
          return-object
        >
          <template v-slot:prepend="{ item, open }">
            <v-icon v-if="!item.file">
              {{ open ? "mdi-folder-open" : "mdi-folder" }}
            </v-icon>
            <v-icon v-else>
              {{ files[item.file] }}
            </v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider class="divider" vertical></v-divider>

      <!-- 각 트리의 데이터가 보여질 화면 -->

      <v-col class="pageCol">
        <router-link to="/treePage"></router-link>
        <div v-if="this.tree[0]">
          <v-card>
            <v-card-title>
              {{ this.tree[0].name }}
            </v-card-title>
            <v-card-subtitle>
              {{ this.tree[0].id }}
            </v-card-subtitle>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import treePage from "@/components/treePage.vue";
export default {
  components: {
    // treePage,
  },

  beforeMount() {
    //getItems();
  },

  updated() {},

  computed: {},

  watch: {
    // tree(currentData) {
    //   this.selected = this.items[0].children.find(
    //     (item) => item.id === currentData[0]
    //   );
    // },
  },

  created() {
    this.getApi();
  },

  data: () => ({
    initiallyOpen: ["public"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },

    //각 tree를 누르때 마다 해당 정보가 이곳에 들어온다.(이때 값은 쌓이지 않고 매번 최신화)
    //return-object 요소가 없으면 id만, 있으면 모든 정보가 이곳에 담긴다.
    tree: [],

    //테스트용
    items: [
      {
        name: "root",
        id: 1,
        children: [
          {
            name: "item1",
            id: 2,
          },
          {
            name: "item2",
            id: 3,
            children: [
              {
                name: "item2-1",
                id: 7,
              },
            ],
          },
          {
            name: "item3",
            id: 4,
          },
          {
            name: "item4",
            id: 5,
          },
          {
            name: "item5",
            id: 6,
          },
        ],
      },
    ],
  }),

  methods: {
    //트리 데이터 가져올 함수
    //아직 api 없음
    // async getItems() {
    //   await this.axios.get("//").then((res) => {
    //     this.testItems = res.items;
    //     console.log(res);
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // }

    getApi() {
      this.axios
        .post(`http://122.39.178.152/login`, {
          email: "AAA",
          password: "123123",
        })
        .then((res) => {
          // this.arrr = res.data;
          console.log(res);
          // console.log(res.cookie);
          // setTimeout(() => {
          //   location.href = "/";
          // }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });

      // this.axios
      //   .post(`http://192.168.0.82:8000/signup`, {
      //     email: "AAA",
      //     password: "123123",
      //     name: "가나다",
      //   })
      //   .then((res) => {
      //     // this.arrr = res.data;
      //     console.log(res);
      //     // setTimeout(() => {
      //     //   location.href = "/";
      //     // }, 2000);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>

<style scoped>
.treeView {
  display: inline-block;
  max-height: 100vh;
  width: initial;
  min-width: 100px;
}

.treeCol {
  overflow-y: scroll;
  overflow-x: scroll;

  white-space: nowrap;

  /* max-height: 90vh; */
  min-width: 100px;
}

.pageView {
  display: inline-block;
}

.pageCol {
  /* background-color: blue; */
  /* max-height: 90vh; */
  overflow: scroll;
  white-space: nowrap;
}

.divider {
  height: 100vh;
}
</style>
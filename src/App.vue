<template>
  <AppHeader />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

import { productStore } from "./store/store";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    AppHeader,
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(productStore, ["fetchProducts"]),
  },
  computed: {
    ...mapState(productStore, ["products", "filteredProducts"]),
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
body {
  font-family: "Roboto", sans-serif;
}

.container {
  padding-left: 2.2rem;
  padding-right: 2.2rem;
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
  <Header />
  <router-link to="/"> Home </router-link>
  <router-view></router-view>
  <div class="container">
    <Banner @click="onClose" />

    <Card
      v-for="product in filteredProducts || products"
      :key="product.id"
      :_product="product"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Card from "./components/card.vue";
import { productStore } from "../store/store";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    Header,
    Banner,
    Card,
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

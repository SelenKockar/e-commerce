<template>
  <Header />

  <div class="container">
    <Banner @click="onClose" />

    <Card v-for="product in products" :key="product.id" :_product="product" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/banner.vue";
import Card from "./components/card.vue";

export default {
  components: {
    Header,
    Banner,
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        this.products = data;
        console.log(this.products);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchProducts();
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

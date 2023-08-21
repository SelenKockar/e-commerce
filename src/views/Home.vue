<template>
  <Banner @click="onClose" />

  <Card v-for="product in productList" :key="product.id" :_product="product" />
</template>

<script>
import Banner from "../components/Banner.vue";
import Card from "../components/card.vue";
import { productStore } from "../../store/store";
import { mapState, mapActions } from "pinia";

export default {
  components: {
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
    ...mapState(productStore, ["products", "productList"]),
  },
};
</script>

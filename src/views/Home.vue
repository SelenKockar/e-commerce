<template>
  <Banner />

  <Card
    v-for="product in productList"
    :key="product.id"
    :_product="product"
    @product:detail="onRedirectDetail"
  />
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
    onRedirectDetail(product) {
      this.$router.push({
        name: "Product",
        params: { id: product.id },
      });
    },
  },
  computed: {
    ...mapState(productStore, ["products", "productList"]),
  },
};
</script>

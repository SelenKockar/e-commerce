<template><Card :_product="product" minimal /></template>
<script>
import Card from "../components/card.vue";
import { productStore } from "../../store/store";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    Card,
  },
  data() {
    return {
      product: {},
      id: this.$route.query.id,
    };
  },

  methods: {
    async getSingleProduct(id) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        this.product = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    ...mapState(productStore, ["products"]),
  },
  mounted() {
    this.getSingleProduct(this.id);
  },
};
</script>

<style></style>

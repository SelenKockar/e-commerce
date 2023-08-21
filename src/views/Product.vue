<template><Card :_product="getSingleProduct(2)" minimal /></template>
<script>
import Card from "../components/card.vue";
import { productStore } from "../../store/store";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    Card,
  },
  methods: {
    async getSingleProduct(id) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    ...mapState(productStore, ["products"]),
  },
};
</script>

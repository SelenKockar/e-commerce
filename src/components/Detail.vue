<template>
  <div class="custom-card">
    <img class="image" :src="_product?.image" />
    <p class="product-title2">{{ _product?.title }}</p>
    <p class="product-description">{{ _product?.description }}</p>
    <div class="purchase-box">
      <p class="price-info">{{ _product?.price }} $</p>
      <button v-if="minimal" class="product-detail" @click="increment">
        Add to Cart
      </button>
    </div>
  </div>
</template>
<script>
import { productStore } from "../../store/store";
import { mapState, mapActions } from "pinia";

export default {
  props: {
    _product: {
      type: Object,
      default: () => {},
    },
    minimal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(productStore, ["increment"]),
    goProductDetail(id) {
      this.$router.push({
        name: "Product",
        query: { id },
      });
    },
  },
};
</script>
<style>
.custom-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.product-title2 {
  border: solid rgba(167, 33, 97, 0.7);
  border-radius: 10px;
  padding: 2px;
}
.product-description {
  border: solid rgba(167, 33, 97, 0.7);
  border-radius: 10px;
  padding: 2px;
  width: 300px;
}
.purchase-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: baseline;
}
</style>

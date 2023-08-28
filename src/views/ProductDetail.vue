<template>
  <div>
    <div class="big-box2">
      <div class="custom-card">
        <img class="image" :src="product?.image" />
        <p class="product-title2">{{ product?.title }}</p>
        <p class="product-description">{{ product?.description }}</p>
        <div class="purchase-box">
          <p class="price-info">{{ product?.price }} $</p>
          <button class="product-detail" @click="incrementCartState">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { productStore } from "../store/store";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      cartState: 0,
    };
  },

  methods: {
    ...mapActions(productStore, ["getSingleProduct"]),
    ...mapActions(productStore, ["incrementCartState"]),
  },

  mounted() {
    this.product = this.getSingleProduct(this.id);
    this.cartState = this.incrementCartState;
  },
};
</script>

<template>
  <div class="big-box">
    <img class="image" :src="product?.image" />
    <div class="detail-container">
      <p class="product-title">{{ product?.title }}</p>
      <p class="product-description">{{ product?.description }}</p>
      <p class="price-info">{{ product?.price }} $</p>
      <button class="product-detail" @click="incrementCartState">
        Add to Cart
      </button>
    </div>
  </div>
  <div class="big-box-mobile">
    <img class="image" :src="product?.image" />
    <div class="detail-container">
      <p class="product-title">{{ product?.title }}</p>
      <p class="product-description">{{ product?.description }}</p>
      <p class="price-info">{{ product?.price }} $</p>
      <button class="product-detail" @click="incrementCartState">
        Add to Cart
      </button>
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
<style scoped>
.big-box {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 76px;
}
.detail-container {
  display: flex;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 350px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.product-description {
  padding: 2px;
  width: 300px;
  flex: 1 0 0;
  align-self: stretch;
}

.image {
  display: inline-block;
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 400px;
}
.product-title {
  flex: 1 0 0;
  align-self: stretch;
}
.price-info {
  flex: 1 0 0;
  align-self: stretch;
}
.product-detail {
  display: flex;
  width: 169px;
  height: 39px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.big-box-mobile {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 76px;
}
@media screen and (max-width: 750px) {
  .big-box {
    display: none;
  }
}
@media screen and (min-width: 750px) {
  .big-box-mobile {
    display: none;
  }
}
</style>

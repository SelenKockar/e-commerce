<template>
  <div class="big-box2">
    <div class="custom-card">
      <img class="image" :src="_product?.image" />
      <p class="product-title2">{{ _product?.title }}</p>
      <p class="product-description">{{ _product?.description }}</p>
      <div class="purchase-box">
        <p class="price-info">{{ _product?.price }} $</p>
        <button class="product-detail" @click="incrementCartState">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      cartState: 0,
    };
  },

  mounted() {
    this.cartState = this.incrementCartState;
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

<template>
  <div class="big-box">
    <div class="product-container">
      <img class="image" :src="_product?.image" />
      <div class="bottom-section">
        <p class="product-title">{{ _product?.title }}</p>
        <p class="price-info">{{ _product?.price }}</p>
        <button class="product-detail">View</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    _product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style>
.big-box {
  display: flex;
  flex-wrap: wrap;
  margin-left: 17px;
}
.product-container {
  display: flex;
  width: 200px;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  border: solid rgba(167, 33, 97, 0.37);
  border-radius: 1rem;
  margin-top: 1rem;
  align-items: center;
}
.product-title {
  gap: 5px;
}
.image {
  width: 180px;
  height: 180px;
  border-radius: 5px;
}
.product-detail {
  margin-bottom: 10px;
  margin-left: 10px;
}
.bottom-section {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
}
</style>

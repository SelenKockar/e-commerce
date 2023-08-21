<template>
  <div class="big-box">
    <div class="product-container">
      <img class="image" :src="_product?.image" />
      <div class="bottom-section">
        <p class="product-title">{{ _product?.title }}</p>
        <p class="price-info">{{ _product?.price }} $</p>
      </div>
      <router-link to="/product">
        <button class="product-detail">View</button>
      </router-link>
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

const productTitleElements = document.querySelectorAll(".product-title");

productTitleElements.forEach((element) => {
  const text = element.textContent;
  const maxLength = 50;
  if (text.length > maxLength) {
    element.textContent = text.slice(0, maxLength) + "...";
  }
});
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
}
.product-title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.image {
  width: 180px;
  height: 180px;
  border-radius: 15px;
  margin-left: 10px;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.product-detail {
  border-radius: 0.7rem;
  background-color: rgba(167, 33, 97, 0.7);
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 10px;
  width: auto;
}
.product-detail:hover {
  text-decoration: underline;
  transition: text-decoration 0.3s ease-in-out;
}
.price-info {
  color: rgba(167, 33, 97, 0.7);
}
</style>

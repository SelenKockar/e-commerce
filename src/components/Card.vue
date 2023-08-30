<template>
  <div class="big-box">
    <div class="product-container">
      <img class="image" :src="_product?.image" />
      <div class="bottom-section">
        <p class="product-title">{{ _product?.title }}</p>
        <p class="price-info">{{ _product?.price }} $</p>
      </div>
      <div class="button-section">
        <button class="product-detail" @click="onClick()">View</button>
        <button class="product-detail" @click="incrementCartState">
          Add to Cart
        </button>
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
  props: {
    _product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions(productStore, ["incrementCartState"]),

    onClick() {
      this.$emit("product:detail", this._product);
    },
  },
  mounted() {
    this.cartState = this.incrementCartState;
  },
};
</script>
<style>
.big-box {
  display: flex;
  flex-wrap: wrap;
  margin-left: 17px;
  align-items: center;
}
.product-container {
  display: flex;
  width: 200px;
  align-items: center;
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
  display: inline-block;
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
.button-section {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>

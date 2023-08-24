<template>
  <div class="cart-bar">
    <i :class="icon"></i>
    <h3 class="cart">{{ text }}</h3>
    <h4 class="cart-badge">{{ cartState }}</h4>
  </div>
</template>

<script>
import { productStore } from "../store/store";
import { mapState, mapActions } from "pinia";

export default {
  props: {
    _product: {
      type: Object,
      default: () => {},
    },
    icon: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },

  computed: {
    ...mapState(productStore, ["cartState"]),
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
.cart-bar {
  display: flex;
  align-items: center;
  gap: 5px;
}
.pi-user {
  font-size: 15px;
  border: solid 0.5px;
  border-radius: 15px;
  padding: 2px;
  margin-left: 10px;
  margin-right: 4.95px;
}
.pi-shopping-cart {
  margin-right: 6.23px;
  font-size: 20px;
}
.cart-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
  background-color: rgba(167, 33, 97, 0.7);
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
}
</style>

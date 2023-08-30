<template>
  <div class="cart-bar">
    <div class="carticon-group">
      <i class="icon-bar" :class="icon"></i>
      <span v-if="showBadge" class="cart-badge">{{ cartState }}</span>
    </div>

    <h3 class="cart">{{ text }}</h3>
  </div>
</template>

<script>
import { productStore } from "../store/store";
import { mapState } from "pinia";

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
    showBadge: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    ...mapState(productStore, ["cartState"]),
  },
};
</script>
<style>
.cart-bar {
  display: flex;
  align-items: center;
  gap: 3px;
}

.cart-badge {
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  padding: 0.2rem;
  background-color: rgba(167, 33, 97, 1);
  border-radius: 50%;
  width: 0.4rem;
  height: 0.3rem;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
}
.carticon-group {
  position: relative;
}

@media screen and (max-width: 750px) {
  .cart {
    display: none;
  }
}
.cart {
  font-weight: 400;
}
</style>

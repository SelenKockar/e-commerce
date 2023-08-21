<template>
  <div class="header">
    <div class="header-left">
      <div class="hero-brand">
        <h3 class="brand">BRAND</h3>
      </div>

      <div class="hero-group">
        <h3 class="women">Women</h3>
        <h3 class="men">Men</h3>
        <h3 class="kids">Kids</h3>
        <h3 class="sale">Sale</h3>
      </div>
    </div>
    <Search />
    <div class="icon-bar">
      <div class="profile-bar">
        <i class="pi pi-user user-icon"></i>
        <h3 class="profile">Profile</h3>
      </div>
      <div class="cart-bar">
        <i class="pi pi-shopping-cart cart-icon"></i>
        <h3 class="cart">Cart</h3>
        <h4 class="cart-badge">{{ cartState }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { productStore } from "../../store/store";
import { mapState } from "pinia";
import Search from "../components/Search.vue";

export default {
  components: {
    Search,
  },
  computed: {
    ...mapState(productStore, ["cartState"]),
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.2rem;
  margin: 2rem 0 2rem 0;
  border: solid rgba(167, 33, 97, 0.37);
  border-radius: 50px;
}

.header-left {
  display: flex;
}

.icon-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  margin: 5px;
  gap: 5px;
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

.search-icon {
  margin-right: 10px;
  margin-left: 5px;
  font-size: 1.5rem;
}
.user-icon {
  font-size: 15px;
  border: solid 0.5px;
  border-radius: 15px;
  padding: 2px;
  margin-left: 10px;
  margin-right: 4.95px;
}
.cart-icon {
  margin-right: 6.23px;
  font-size: 20px;
}

.hero-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 0 2rem;
}
.profile-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
.cart-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

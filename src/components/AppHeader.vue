<template>
  <div class="header">
    <div class="header-left">
      <div class="hero-brand">
        <router-link to="/" class="link">
          <h3 class="brand">BRAND</h3>
        </router-link>
      </div>

      <ul class="header-group">
        <li class="women">Women</li>
        <li class="men">Men</li>
        <li class="kids">Kids</li>
        <li class="sale">Sale</li>
      </ul>
    </div>
    <Search />
    <div class="icon-group">
      <IconHeader
        class="profile-bar"
        icon="pi pi-user"
        text="Profile"
        :showBadge="false"
      ></IconHeader>
      <IconHeader
        class="cart-bar"
        icon="pi pi-shopping-cart"
        text="Card"
        :showBadge="true"
      ></IconHeader>
    </div>
  </div>
</template>

<script>
import { productStore } from "../store/store";
import { mapState } from "pinia";
import Search from "../components/Search.vue";
import IconHeader from "./IconHeader.vue";

export default {
  components: {
    Search,
    IconHeader,
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

.link {
  text-decoration: none;
  color: black;
}

.search-icon {
  margin-right: 10px;
  margin-left: 5px;
  font-size: 1.5rem;
}

.header-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 0 2rem;
  list-style: none;
  font-weight: bold;
}

.cart-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}
.profile-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
.icon-group {
  display: flex;
  align-items: center;
}
</style>

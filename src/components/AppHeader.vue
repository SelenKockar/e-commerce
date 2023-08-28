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
    <div class="topbar-menu">
      <button
        @click="togglePanel"
        type="button"
        class="pi pi-ellipsis-v"
      ></button>
      <div class="panel-container">
        <div type="menu" v-if="isPanelOpen" class="panel">
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>Sale</span>
        </div>
      </div>
    </div>

    <Search />
    <div class="icon-group">
      <MenuTextButton
        class="profile-bar"
        icon="pi pi-user"
        text="Profile"
        :showBadge="false"
      ></MenuTextButton>
      <MenuTextButton
        class="cart-bar"
        icon="pi pi-shopping-cart"
        text="Card"
        :showBadge="true"
      ></MenuTextButton>
    </div>
  </div>
</template>

<script>
import { productStore } from "../store/store";
import { mapState } from "pinia";
import Search from "../components/Search.vue";
import MenuTextButton from "./MenuTextButton.vue";

export default {
  data() {
    return {
      isPanelOpen: false,
      isMobile: false,
    };
  },
  created: {},
  methods: {
    togglePanel() {
      this.isPanelOpen = !this.isPanelOpen;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  components: {
    Search,
    MenuTextButton,
  },
  computed: {
    ...mapState(productStore, ["cartState"]),
  },
  created() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkMobile);
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
.pi {
  border: none;
  background-color: white;
  color: black;
  font-size: 1.2rem;
}

.panel {
  transform-origin: top;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.panel.active {
  max-height: 100px;
}
@media (max-width: 100%) {
  .topbar-menu button {
    display: block;
  }

  .panel-container {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
  }
}
</style>

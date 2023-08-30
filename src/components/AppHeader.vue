<template>
  <header class="header">
    <router-link to="/" class="link">
      <svg
        class="brand-logo"
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="59"
        viewBox="0 0 58 59"
        fill="none"
      >
        <mask
          id="mask0_71_125"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="58"
          height="59"
        >
          <circle cx="28.5918" cy="29.5" r="28.5918" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_71_125)">
          <circle
            cx="14.9897"
            cy="-4.16938"
            r="23.7214"
            transform="rotate(-22 14.9897 -4.16938)"
            fill="#A72161"
            fill-opacity="0.7"
          />
          <circle
            cx="42.1967"
            cy="63.1685"
            r="23.7214"
            transform="rotate(-22 42.1967 63.1685)"
            fill="#A72161"
            fill-opacity="0.7"
          />
          <circle
            cx="-5.07577"
            cy="43.1031"
            r="23.7214"
            transform="rotate(-22 -5.07577 43.1031)"
            fill="#A72161"
            fill-opacity="0.37"
          />
          <circle
            cx="61.6381"
            cy="14.3545"
            r="23.7214"
            transform="rotate(-22 61.6381 14.3545)"
            fill="#A72161"
            fill-opacity="0.37"
          />
        </g>
      </svg>
    </router-link>

    <ul class="header-group">
      <li class="women">Women</li>
      <li class="men">Men</li>
      <li class="kids">Kids</li>
      <li class="sale">Sale</li>
    </ul>
    <div class="dropdown-menu">
      <i @click="toggleMobilePanel" class="pi pi-ellipsis-v"></i>
      <ul v-show="isPanelOpen" class="dropdown-panel">
        <li class="women">Women</li>
        <li class="men">Men</li>
        <li class="kids">Kids</li>
        <li class="sale">Sale</li>
      </ul>
    </div>
    <router-link to="/" class="link2">
      <svg
        class="mobile-brand-logo"
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="59"
        viewBox="0 0 58 59"
        fill="none"
      >
        <mask
          id="mask0_71_125"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="58"
          height="59"
        >
          <circle cx="28.5918" cy="29.5" r="28.5918" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_71_125)">
          <circle
            cx="14.9897"
            cy="-4.16938"
            r="23.7214"
            transform="rotate(-22 14.9897 -4.16938)"
            fill="#A72161"
            fill-opacity="0.7"
          />
          <circle
            cx="42.1967"
            cy="63.1685"
            r="23.7214"
            transform="rotate(-22 42.1967 63.1685)"
            fill="#A72161"
            fill-opacity="0.7"
          />
          <circle
            cx="-5.07577"
            cy="43.1031"
            r="23.7214"
            transform="rotate(-22 -5.07577 43.1031)"
            fill="#A72161"
            fill-opacity="0.37"
          />
          <circle
            cx="61.6381"
            cy="14.3545"
            r="23.7214"
            transform="rotate(-22 61.6381 14.3545)"
            fill="#A72161"
            fill-opacity="0.37"
          />
        </g>
      </svg>
    </router-link>

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
  </header>
</template>

<script>
import { productStore } from "../store/store";
import { mapState } from "pinia";
import Search from "../components/Search.vue";
import MenuTextButton from "./MenuTextButton.vue";

export default {
  components: {
    Search,
    MenuTextButton,
  },
  data() {
    return {
      isPanelOpen: false,
    };
  },
  computed: {
    ...mapState(productStore, ["cartState"]),
  },

  methods: {
    toggleMobilePanel() {
      this.isPanelOpen = !this.isPanelOpen;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 2rem 0;
  border: solid rgba(167, 33, 97, 0.37);
  border-radius: 50px;
  transition: 0.5s ease all;
  padding: 0 2rem;
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
  gap: 70px;
  padding: 0 2rem;
  list-style: none;
  font-weight: 500;
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

.panel-item {
  list-style-type: none;
}
.brand-logo {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  margin-top: 3px;
  margin-bottom: 3px;
}
.mobile-brand-logo {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  margin-top: 3px;
  margin-bottom: 3px;
  border-radius: 50px;
}
@media screen and (max-width: 750px) {
  .header-group {
    display: none;
  }
  .brand-logo {
    display: none;
  }
  .link {
    display: none;
  }
}

.dropdown-panel {
  float: left;
  position: absolute;
  z-index: 1;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  list-style: none;
}
@media screen and (max-width: 750px) {
  .dropdown-panel {
    float: none;
    width: 100%;
  }
}
@media screen and (min-width: 750px) {
  .mobile-brand-logo {
    display: none;
  }
  .dropdown-menu {
    display: none;
  }
}

.dropdown-menu {
  position: relative;
}
</style>

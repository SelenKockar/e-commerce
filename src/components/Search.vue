// Search.vue
<template>
  <div class="search-container">
    <input
      v-model="searchTerm"
      @input="updateSearchTerm(searchTerm)"
      type="text"
      class="search-box"
      placeholder="Search..."
    />
    <i class="pi pi-search search-icon"></i>
  </div>
</template>

<script>
import { productStore } from "../store/store";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    ...mapActions(productStore, ["updateSearchTerm"]),
  },
  computed: {
    ...mapState(productStore, ["products"]),
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
}
@media screen and (max-width: 750px) {
  .search-container {
    display: none;
  }
}

.search-box {
  border: none;
  outline: none;
  padding: 8px;
  width: 200px;
  border-radius: 4px 0 0 4px;
}

.pi {
  font-size: 18px;
  color: #333;
  margin-left: 50px;
  cursor: pointer;
}
</style>

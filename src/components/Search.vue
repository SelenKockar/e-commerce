<template>
  <div class="icon-container">
    <input
      v-model="searchTerm"
      type="text"
      class="search-box"
      placeholder="Search..."
    />
    <i class="pi pi-search search-icon"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
};
</script>

<style scoped>
.icon-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
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

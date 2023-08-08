<template>
  <div class="search-bar">
    <div class="search-input">
      <input class="search" placeholder="Search..." />
      <i class="pi pi-search search-icon"></i>
    </div>
  </div>
</template>

<script></script>
<style>
.search {
  width: 300px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #000;
  background: #fff;
  margin-left: 10px;
  height: 25px;
  position: relative;
}
.search-bar {
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  margin: 5px;
  padding: 0 2rem;
}
.search-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
</style>

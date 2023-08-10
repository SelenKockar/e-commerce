<template>
  <div class="big-box">
    <div class="product-container">
      <p>Product information</p>
      <p class="price-info">Price</p>
      <button>View</button>
    </div>
  </div>
</template>

<script></script>
<style>
.big-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-container {
  display: flex;
  width: 200px;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
  background-color: rgba(167, 33, 97, 0.03);
  margin-top: 1rem;
}
</style>

<template>
  <div class="banner">
    <div class="hero-box">
      <h3 class="hero-text">
        Build your style with new trendy outfits that adapt to summer chic
      </h3>
      <button class="shop-button">Shop Now</button>
    </div>

    <img class="banner-image" src="@/assets/banner-photo.jpg" />
  </div>
</template>

<script></script>

<style>
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  background: rgba(167, 33, 97, 0.37);
  flex-shrink: 10;
  width: 100%;
  border-radius: 1.4rem;
}

.hero-box {
  padding-left: 2.7rem;
  padding-right: 2.7rem;
  padding-bottom: 1.5rem;
}
.hero-text {
  color: #000;
  font-feature-settings: "liga" off;
  font-size: 2rem;
  font-style: italic;
  line-height: medium;
  width: 100%;
  max-width: 27rem;
}

.shop-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  border-color: transparent;
  background: rgba(167, 33, 97, 0.7);
  margin-top: 0.35rem;
  padding: 0.5rem 1.7rem 0.4rem 1.6rem;
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.shop-button:hover {
  text-decoration: underline;
  transition: text-decoration 0.3s ease-in-out;
}

.image-container {
  position: absolute;
  right: 0;
  width: 16rem;
  height: 14rem;
  display: flex;
}

.banner-image {
  width: 28rem;
  height: 100%;
  border-radius: 0 1.4rem 1.5rem 9.7rem;
}

@media screen and (max-width: 750px) {
  .banner-image {
    display: none;
  }
}
</style>

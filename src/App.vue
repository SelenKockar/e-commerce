<template>
  <Header />

  <div class="container">
    <Banner @click="onClose" />

    <Card />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Card from "./components/card.vue";

export default {
  components: {
    Header,
    Banner,
    Card,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
body {
  font-family: "Roboto", sans-serif;
}

.container {
  padding-left: 2.2rem;
  padding-right: 2.2rem;
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
  <div class="home-page">
    <NavBar />
    <div class="content">
      <div class="quote">
        <p class="quote-text">A SINGLE SOURCE SOLUTION</p>
        <p class="quote-text">TO YOUR HEALTH NEEDS</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // Import the NavBar component

export default {
  name: "Home",
  components: {
    NavBar, // Register the NavBar component
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
}

.content {
  flex: 1;
  background: url(@/assets/HOME.png) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.quote {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  font-family: Kanit;
  font-size: 60px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  padding: 20px;
}

.quote-text {
  margin: 0;
}
</style>

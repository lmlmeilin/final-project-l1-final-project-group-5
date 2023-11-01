<template>
  <div class="home-page">
    <img src="@/assets/HOME.png" alt="Home Image" />
    <div class="quote">
      <p class="quote-text">
        A SINGLE SOURCE SOLUTION
      </p>
      <p class="quote-text">
        TO YOUR HEALTH NEEDS
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  min-height: 100vh;
  color: #FFF;
}

.quote {
  text-align: left;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.quote-text {
  margin: 0;
}

.quote-text:first-child {
  color: #3CB26D;
}
</style>
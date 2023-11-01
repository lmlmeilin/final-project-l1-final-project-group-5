<template>
  <nav class="nav-bar">
    <div class="nav-logo">
      <img src="@/assets/Logo.png" alt="PillPal Logo" />
    </div>
    <div class="nav-menu">
      <button class="nav-button">Home</button>
      <button class="nav-button">Reminder</button>
      <button class="nav-button">Locator</button>
      <button class="nav-button">Profile</button>
      <button class="nav-button">LogOut</button>
    </div>
    <div class="nav-about">
      <button class="nav-button" @click="goToAbout">About Us</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      // Add your route navigation logic to About page here
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background: #3cb26d;
  display: flex;
  flex-direction: column;
  align-items: left;
}

.nav-logo img {
  width: 70px;
  height: 70px;
  background-color: #fff;
}

.nav-menu {
  display: flex;
  flex-direction: column; /* Arrange the buttons vertically */
  align-items: left;
}

.nav-button {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 0px 4px 4px 0px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #3cb26d;
  font-family: Kanit;
  font-size: 6px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 4px 0; /* Add vertical margin between buttons */
}

.nav-about .nav-button {
  width: 60px;
  height: 10px;
  border-radius: 0px;
  text-decoration: underline;
  font-size: 6px;
}

.nav-button:hover {
  background: #3cb26d;
  color: #fff;
}
</style>

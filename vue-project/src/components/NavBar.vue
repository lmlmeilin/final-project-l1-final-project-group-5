<template>
  <nav class="nav-bar">
    <div class="nav-logo">
      <img src="@/assets/Logo.png" alt="PillPal Logo" />
    </div>
    <div class="nav-menu">
      <router-link to="/home" class="nav-button">
        <img src="@/assets/HomeIcon.png" alt="Home Icon" class="but-img" />
      </router-link>
      <router-link to="/addReminderView" class="nav-button">
        <img
          src="@/assets/ReminderIcon.png"
          alt="Reminder Icon"
          class="but-img"
        />
      </router-link>
      <router-link to="/locator" class="nav-button">
        <img
          src="@/assets/LocatorIcon.png"
          alt="Locator Icon"
          class="but-img"
        />
      </router-link>
      <router-link to="/addReminder" class="nav-button">
        <img
          src="@/assets/ProfileIcon.png"
          alt="Profile Icon"
          class="but-img"
        />
      </router-link>
      <router-link to="/logout" class="nav-button" @click="logout">
        <img src="@/assets/LogoutIcon.png" alt="Logout Icon" class="but-img" />
      </router-link>
    </div>
    <div class="nav-about">
      <router-link to="about" class="nav-button"><b>About Us</b></router-link>
    </div>
  </nav>
</template>

<script>
import Logout from "@/components/Logout.vue";

export default {
  components: {
    Logout,
  },
};
</script>

<style scoped>
.nav-bar {
  background: #3cb26d;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: min-content;
}

.nav-logo img {
  height: 70px;
  background-color: #fff;
  outline: lightgray;
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
  margin: 15px 0; /* Add vertical margin between buttons */
}

.but-img {
  height: 40px;
}
.nav-about .nav-button {
  width: 70px;
  height: 20px;
  border-radius: 0px;
  text-decoration: underline;
  font-size: 11px;
  position: absolute;
  bottom: 0;
}

.nav-button:hover {
  background: lightgray;
  color: #fff;
}
</style>

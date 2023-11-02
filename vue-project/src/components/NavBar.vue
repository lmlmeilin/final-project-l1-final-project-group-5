<template>
  <nav class="nav-bar">
    <div class="nav-logo">
      <img src="@/assets/Logo.png" alt="PillPal Logo" />
    </div>
    <div class="nav-menu">
      <router-link to="/" class="nav-button">
        <img src="@/assets/HomeIcon.png" alt="Home Icon" height="40px" />
      </router-link>

      <router-link to="/notfound" class="nav-button">
        <img
          src="@/assets/ReminderIcon.png"
          alt="Reminder Icon"
          height="40px"
        />
      </router-link>

      <router-link to="/notfound" class="nav-button">
        <img src="@/assets/LocatorIcon.png" alt="Locator Icon" height="40px" />
      </router-link>

      <router-link to="/notfound" class="nav-button">
        <img src="@/assets/ProfileIcon.png" alt="Profile Icon" height="40px" />
      </router-link>

      <router-link to="/notfound" class="nav-button">
        <img src="@/assets/LogoutIcon.png" alt="Logout Icon" height="40px" />
      </router-link>
    </div>
    <div class="nav-about">
      <router-link to="about" class="nav-button"
        ><strong>About Us</strong></router-link
      >
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "NavBar",

  data() {
    return {
      user: null,
    };
  },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },

  methods: {
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.$router.push({ name: "Login" }); // Replace "Login" with the actual name of your sign-in route
      } catch (error) {
        console.error("Sign out error", error);
      }
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
  height: 70px;
  background-color: #fff;
  outline: lightgray;
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
  margin: 4px 0;
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

<template>
  <router-link to="/logout" class="nav-button" @click="logout">
    <img src="@/assets/LogoutIcon.png" alt="Logout Icon" class="but-img" />
  </router-link>
</template>

<script>
import { signOut } from "firebase/auth";

export default {
  methods: {
    logout() {
      signOut(this.$root.auth)
        .then(() => {
          this.$router.push("/login"); // Redirect to the Login page after logout (Home for now)
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    },
  },
};
</script>

<style scoped>
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
  margin: 15px 0;
}

.but-img {
  height: 40px;
}

.nav-button:hover {
  background: lightgray;
  color: #fff;
}
</style>

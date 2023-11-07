<template>
  <div class="reset-password-container">
    <div class="reset-password-card">
      <h1 class="reset-password-title">Reset Your Password</h1>
      <form @submit.prevent="resetPassword">
        <div class="reset-password-input">
          <label for="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            v-model="newPassword"
            required
          />
        </div>
        <div class="reset-password-input">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
          />
        </div>
        <button type="submit" class="reset-password-button">Reset</button>
      </form>
      <p class="reset-password-signup-prompt">
        Don’t have an account?
        <router-link to="/signup" class="reset-password-signup-link"
          >Sign up now!</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { confirmPasswordReset } from "firebase/auth";

export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      actionCode: "", // You need to get this from the URL query parameter
    };
  },
  methods: {
    resetPassword() {
      if (this.newPassword === this.confirmPassword) {
        confirmPasswordReset(this.$root.auth, this.actionCode, this.newPassword)
          .then(() => {
            // Password reset successful
            alert(
              "Password reset successful. You can now sign in with your new password."
            );
            // Redirect the user to the login page or a success page.
            // You can use Vue Router for navigation.
          })
          .catch((error) => {
            // Handle errors, e.g., invalid code or other issues
            alert("Error: " + error.message);
          });
      } else {
        // Passwords do not match, show an error message
        alert(
          "Passwords do not match. Please make sure they match and try again."
        );
      }
    },
  },
  created() {
    // Get the action code from the URL query parameter (You need to implement this part)
    // For example, you can use a function to extract it from the URL and set this.actionCode
  },
};
</script>

<style scoped>
.reset-password-container {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.reset-password-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.reset-password-title {
  color: #3cb26d;
  font-size: 24px;
  text-align: left;
}

.reset-password-input {
  margin: 10px 0;
}

.reset-password-button {
  background-color: #3cb26d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.reset-password-button:hover {
  background-color: #2a8e59;
}

.reset-password-signup-prompt {
  font-size: 14px;
  color: #666;
  text-align: left;
}

.reset-password-signup-link {
  color: #0080dd;
  text-decoration: underline;
  cursor: pointer;
}
</style>

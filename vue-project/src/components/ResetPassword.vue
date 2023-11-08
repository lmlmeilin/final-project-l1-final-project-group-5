<template>
  <div class="reset-password-container">
    <div class="reset-password-card">
      <h1 class="reset-password-title">Reset your password</h1>
      <form @submit.prevent="resetPassword">
        <div class="reset-password-input">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="reset-password-description">
          Please enter the email address associated with your account, and we
          will send you an email to reset the password.
        </div>
        <button type="submit" class="reset-password-button">Continue</button>
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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    resetPassword() {
      const auth = getAuth();

      // Send a password reset email to the provided email address
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          // Password reset email sent successfully
          alert("Password reset email sent. Check your inbox.");
        })
        .catch((error) => {
          // Handle errors, e.g., email not found or other issues
          alert("Error: " + error.message);
        });
    },
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
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.reset-password-title {
  color: #3cb26d;
}

.reset-password-input {
  width: 100%;
}
.reset-password-input label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

.reset-password-description {
  color: gray;
  margin: 15px 0;
}

.reset-password-button {
  background-color: #3cb26d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.reset-password-button:hover {
  background-color: #308e57;
}

.reset-password-signup-prompt {
  margin-top: 15px;
}

.reset-password-signup-link {
  color: #0080dd;
  text-decoration: underline;
}
</style>

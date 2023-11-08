<template>
  <div class="container">
    <div class="card">
      <div class="header">
        <h2>Sign Up</h2>
        <p>
          Already have an account?
          <router-link to="/" class="signup-link">Log in</router-link>
        </p>
      </div>

      <div class="form">
        <div class="input-group">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
          />
        </div>

        <div class="input-group">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter a strong password (at least 6 characters with numbers and letters)"
          />
        </div>

        <div class="input-group">
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Re-enter your password"
          />
        </div>
      </div>

      <button @click="registerUser">Sign Up</button>

      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import "firebaseui/dist/firebaseui.css";
import app from "@/uifire.js";
import router from "@/router/index.js";

export default {
  name: "Signup",

  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: null,
    };
  },

  methods: {
    registerUser() {
      // Reset any previous error messages
      this.errorMessage = null;

      // Check if the provided email and passwords meet required conditions
      if (this.validateForm()) {
        // Attempt to create a new user
        app
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Redirect to the Home.vue page after successful registration
            router.push("/home");
          })
          .catch((error) => {
            this.errorMessage = error.message;
          });
      }
    },

    validateForm() {
      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = "All fields are required.";
        return false;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match.";
        return false;
      }

      // Check if the password meets the criteria (at least 6 characters and a mix of numbers and letters)
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
      if (!passwordRegex.test(this.password)) {
        this.errorMessage =
          "Password must be at least 6 characters and contain a mix of numbers and letters.";
        return false;
      }

      // Check if the email is in a valid format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errorMessage = "Invalid email format.";
        return false;
      }

      return true;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #808080; /* Grey background color */
}

.card {
  width: 550px;
  height: 350px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); /* Add a box shadow */
  padding: 30px;
}

.header {
  color: #3cb26d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  display: flex; /* Add this */
  justify-content: space-between; /* Add this */
  align-items: center; /* Add this */
}

.header h2 {
  margin: 0px;
}

.header p {
  font-size: 20px;
  margin-right: 0px;
  text-align: right;
  margin-bottom: 0px;
}

.signup-link {
  width: 107px;
  color: #0080dd;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
}

.signup-link a {
  font-weight: 500;
  text-decoration: underline;
}

#firebaseui-auth-container {
  margin: 60px;
  text-align: center;
}
.form {
  margin: 20px 0;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 8px;
  border: 2px solid #3cb26d;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
}

button {
  background-color: #3cb26d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center; /* Align text boxes to the center */
  margin: 10px; /* Add 10px margin around the text boxes */
}

.input-group label {
  font-weight: 600;
  margin-bottom: 5px; /* Adjust margin for better spacing */
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 2px solid #3cb26d;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px 0; /* Add margin around each input field */
}
</style>

<template>
  <div class="container">
    <div class="card">
      <div class="header">
        <h2>Sign Up</h2>
        <p>
          Already have an account?
          <router-link to="/login" class="signup-link">Log in</router-link>
        </p>
      </div>
      <div id="firebaseui-auth-container"></div>
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

      // check if the email is in a valid format
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
</style>

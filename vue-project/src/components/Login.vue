<template>
  <div class="container">
    <div class="card">
      <div class="header">
        <h2>Login</h2>
        <p>
          Don't have an account?
          <router-link to="/signup" class="signup-link">Sign up</router-link>
        </p>
      </div>
      <div class="email-password">
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <button @click="loginWithEmailPassword" class="login-button">
        Login
      </button>
      <div class="or-divider">
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div id="firebaseui-auth-container" style="margin: 10px"></div>
      <div class="reset">
        <p>
          Forget your password?
          <router-link to="/reset" class="reset-link"
            >Reset Password</router-link
          >
        </p>
      </div>
      <div v-if="showEmailNotFoundError" class="error-message">
        Email not found. Please sign up.
      </div>
      <div v-if="showError" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Import Firestore
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",

  data() {
    return {
      showError: false,
      errorMessage: "",
      showEmailNotFoundError: false, // Added for email not found error
      email: "",
      password: "",
    };
  },

  methods: {
    async loginWithEmailPassword() {
      try {
        const auth = firebase.auth();
        const response = await auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );

        // Successful login
        console.log("Login successful", response);

        this.$router.push("/home");
      } catch (error) {
        console.error("Login error:", error);

        if (error.code === "auth/wrong-password") {
          this.showError = true;
          this.errorMessage = "Incorrect password. Please check again.";
        } else if (error.code === "auth/invalid-login-credentials") {
          this.showEmailNotFoundError = true;
          this.showError = false;
        } else {
          this.showEmailNotFoundError = false;
          this.showError = true;
          this.errorMessage = "An error occurred. Please try again later.";
        }
      }
    },
  },

  mounted() {
    var ui = firebaseui.auth.AuthUI.getInstance();

    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
      signInSuccessUrl: "/home",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #808080; /* Grey background color */
}

.card {
  width: 550px;
  height: 450px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); /* Add a box shadow */
  padding: 30px;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
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

.email-password {
  margin: 10px 0; /* Add margin to separate text boxes */
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center text boxes */
}

.email-password input {
  margin: 10px 0; /* Add margin around each input field */
}

.login-button {
  text-align: center;
  margin: 10px 0; /* Add margin to center the button */
}

.reset {
  text-align: center;
}

.error-message {
  color: red;
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
}

.or-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.or-divider hr {
  flex-grow: 1;
  background-color: #ccc;
  height: 1px;
  border: none;
  margin: 0 10px;
}

.or-divider span {
  color: #aaa;
  font-weight: bold;
  font-size: 16px;
}
</style>

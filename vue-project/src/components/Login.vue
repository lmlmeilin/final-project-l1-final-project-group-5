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
      <div id="firebaseui-auth-container"></div>
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
    </div>
  </div>
</template>

<script>
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",

  data() {
    return {
      showEmailNotFoundError: false,
    };
  },

  mounted() {
    var ui = firebaseui.auth.AuthUI.getInstance();

    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
      signInSuccessUrl: "/home",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInFailure: (error) => {
          if (error.code === "auth/user-not-found") {
            this.showEmailNotFoundError = true;
          }
        },
      },
    };
    ui.start("#firebaseui-auth-container", uiConfig);
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

.error-message {
  color: red;
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
}
</style>

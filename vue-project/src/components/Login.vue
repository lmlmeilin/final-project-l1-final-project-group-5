<template>
    <div class="container">
      <div class="card">
        <div class="header">
          <h2>Login</h2>
          <p>
            Don't have an account? <router-link to="/signup" class="signup-link">Sign up</router-link>
          </p>
        </div>
  
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { AuthUI } from 'firebaseui';
  import 'firebaseui/dist/firebaseui.css';
  import app from '@/uifire.js'; 
  import router from '@/router/index.js'; 
  
  export default {
    name: 'Login',
  
    mounted() {
      const uiConfig = {
        signInSuccessUrl: '/home',
        signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult(authResult) {
            // Redirect the user to the Home.vue page
            router.push(authResult.authResult?.signInSuccessUrl || '/home');
            return false;
          },
        },
      };
      const ui = new AuthUI(app.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
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
  width: 256px;
  height: 169px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); /* Add a box shadow */
}

.header {
  color: #3CB26D;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
}

.signup-link {
  width: 107px;
  color: #000;
  font-family: 'Inter', sans-serif;
  font-size: 6px;
  font-weight: 400;
  line-height: normal;
}

.signup-link a {
  color: #0080DD;
  font-weight: 500;
  text-decoration: underline;
}

</style>
<template>
    <nav class="nav-bar">
      <div class="nav-logo">
        <img src="@/assets/Logo.png" alt="PillPal Logo" />
      </div>
      <div class="nav-menu">
        <button class="nav-button">
          Home
        </button>
        <button class="nav-button">
          Reminder
        </button>
        <button class="nav-button">
          Locator
        </button>
        <button class="nav-button">
          Profile
        </button>
      </div>
      <div class="nav-about">
        <button class="nav-button" @click="goToAbout">
          About Us
        </button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      goToAbout() {
        // Add your route navigation logic to About page here
      },
    },
  };
  </script>
  
  <style scoped>
  .nav-bar {
    width: 35px;
    height: 324px;
    flex-shrink: 0;
    background: #3CB26D;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  
  .nav-logo img {
    width: 27.327px;
    height: 28.086px;
  }
  
  .nav-button {
    width: 30.364px;
    height: 29.09px;
    flex-shrink: 0;
    border-radius: 0px 4px 4px 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #3CB26D;
    font-family: Kanit;
    font-size: 6px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .nav-about .nav-button {
    width: 26.315px;
    height: 4.012px;
    border-radius: 0px;
    text-decoration: underline;
    font-size: 6px;
  }
  
  .nav-button:hover {
    background: #3CB26D;
    color: #FFF;
  }
  </style>
  
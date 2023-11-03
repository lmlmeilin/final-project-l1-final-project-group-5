<template>
  <div class="about-page">
    <NavBar />
    <div class="content">
      <div class="background">
        <h3>About Us</h3>
      </div>
      <div class="what-we-do">
        <div class="section-title">
          <h4 class="w-w-d">What We Do</h4>
        </div>
        <div class="text-box">
          <p>
            Struggling to keep track of your medications, especially when you
            have multiple doses throughout the day? Don't worry! PillPal is here
            to assist you.
          </p>
          <p>
            PillPal helps you effortlessly manage your medications. Our
            application allows you to track your medication usage, find nearby
            clinics, and set timely reminders.
          </p>
        </div>
      </div>
      <div class="our-team"></div>
      <div class="FAQs"></div>
      <div class="foot"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // Import the NavBar component

export default {
  name: "About",
  components: {
    NavBar, // Register the NavBar component
  },
};
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  overflow: hidden;
}

.w-w-d {
  color: #3cb26d;
}

.background {
  background-image: url("@/assets/AboutBG.png");
  background-position: top;
  background-size: cover;
  height: 250px;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0; /* Remove margin for body or other elements */
  padding: 30px;
}

.background h3 {
  font-size: 90px;
  margin: 0; /* Remove margin for the h3 element */
  color: #fff;
  outline: gray;
  text-shadow: gray;
}

.what-we-do {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
  margin-top: 20px;
  border: 4px solid #3cb26d;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  max-width: 80%;
  flex-direction: column; /* Add this line */
}

.section-title {
  font-size: 25px;
  background-color: #3cb26d;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 180px;
  margin: 0;
}

.section-title h4 {
  color: #fff;
}

.content .what-we-do {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.text-box {
  color: #000;
  font-size: 20px;
}
</style>

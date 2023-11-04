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
      <div class="our-team">
        <div class="section-title">
          <h4 class="w-w-d">Our Team</h4>
        </div>
        <div class="team-members">
          <div class="team-member">
            <img src="@/assets/TeamProfile.png" alt="CAO CHUHAO" />
            <p><strong>CAO CHUHAO</strong></p>
          </div>
          <div class="team-member">
            <img src="@/assets/TeamProfile.png" alt="DANG XUEHAN" />
            <p><strong>DANG XUEHAN</strong></p>
          </div>
          <div class="team-member">
            <img src="@/assets/TeamProfile.png" alt="HAN YUNXI" />
            <p><strong>HAN YUNXI</strong></p>
          </div>
          <div class="team-member">
            <img src="@/assets/TeamProfile.png" alt="LOW MEI LIN" />
            <p><strong>LOW MEI LIN</strong></p>
          </div>
        </div>
        <div class="contactUs">
          <img src="@/assets/ContactUs.png" alt="ContactUs" />
        </div>
      </div>

      <div class="FAQs">
        <div class="section-title">
          <h4 class="w-w-d">FAQs</h4>
        </div>
        <div class="faq-list">
          <!-- FAQ item 1 -->
          <div class="faq-item">
            <div class="question">
              <span>Frequently Asked Question 1?</span>
              <button @click="toggleAnswer(1)">Toggle Answer</button>
            </div>
            <div class="answer" v-if="showAnswer[1]">
              <p>Answer to Frequently Asked Question 1.</p>
            </div>
          </div>

          <!-- FAQ item 2 -->
          <div class="faq-item">
            <div class="question">
              <span>Frequently Asked Question 2?</span>
              <button @click="toggleAnswer(2)">Toggle Answer</button>
            </div>
            <div class="answer" v-if="showAnswer[2]">
              <p>Answer to Frequently Asked Question 2.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <img src="@/assets/Foot.png" alt="Foot" />
      </div>
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
  data() {
    return {
      showAnswer: {}, // Use an object to track which answers are shown
    };
  },
  methods: {
    toggleAnswer(index) {
      // Toggle the answer for the FAQ at the given index
      this.showAnswer[index] = !this.showAnswer[index];
    },
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
  margin: 0;
  padding: 30px;
}

.background h3 {
  font-size: 90px;
  margin: 0;
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
  flex-direction: column;
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

.our-team {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-right: 155px;
}

.team-members {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.team-member {
  text-align: center;
  margin: 20px;
}

.team-member img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
}

.team-member p {
  font-weight: bold;
  margin-top: 10px;
}

.contactUs img {
  max-width: 300px;
  max-height: 300px;
}

.FAQs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  border: 4px solid #3cb26d;
  border-radius: 5px;
  max-width: 80%;
  flex-direction: column;
  margin-left: 95px;
}

.faq-list {
  width: 100%;
}

.faq-item {
  border: 2px solid #3cb26d;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.answer {
  display: none;
  padding: 10px;
}

.answer p {
  margin: 0;
}

.faq-item.active .answer {
  display: block;
}

.foot img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin-left: 628px;

  max-height: 40px;
}
</style>

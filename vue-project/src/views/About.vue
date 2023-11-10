<template>
  <div class="about-page">
    <NavBar class="navbar" />
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
            <img src="@/assets/CaoChuhao.jpg" alt="CAO CHUHAO" />
            <p><strong>CAO CHUHAO</strong></p>
          </div>
          <div class="team-member">
            <img src="@/assets/DangXuehan.jpg" alt="DANG XUEHAN" />
            <p><strong>DANG XUEHAN</strong></p>
          </div>
          <div class="team-member">
            <img src="@/assets/HanYunxi.jpg" alt="HAN YUNXI" />
            <p><strong>HAN YUNXI</strong></p>
          </div>
          <div class="team-member">
            <img src="@/assets/LowMeilin.jpg" alt="LOW MEI LIN" />
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
          <div
            class="faq-item"
            v-for="(faqItem, index) in faq"
            :key="index"
            :class="{ active: showAnswer[index] }"
          >
            <div class="question" @click="toggleAnswer(index)">
              <span>{{ faqItem.question }}</span>
              <button>{{ showAnswer[index] ? "▲" : "▼" }}</button>
            </div>
            <div class="answer">
              <p>{{ faqItem.answer }}</p>
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
import { ref } from "vue"; // Import ref from Vue 3

export default {
  name: "About",
  components: {
    NavBar, // Register the NavBar component
  },
  setup() {
    const showAnswer = ref({}); // Create a reactive ref for showAnswer
    const faq = [
      {
        question: "What is PillPal, and how does it work?",
        answer:
          "PillPal is an innovative website application designed to enhance medication adherence among patients. It provides three key features: medication reminders, usage tracking, and a healthcare facility locator. Users receive timely reminders for their medications, gain access to their medication regimen overview, and can locate the nearest medical facility to refill their prescriptions.",
      },
      {
        question: "Why is medication adherence so important?",
        answer:
          "Medication adherence is crucial because it ensures that patients take their prescribed medications as recommended by healthcare providers. Failing to adhere to medication plans can lead to suboptimal disease control, adverse health outcomes, and increased healthcare costs.",
      },
      {
        question: "How can PillPal help improve medication adherence?",
        answer:
          "PillPal helps improve medication adherence by sending timely reminders to users, providing a comprehensive overview of their medication regimen, and assisting in locating the nearest medical facility for prescription refills. These features empower users to stay on track with their medication plans.",
      },
      {
        question: "Are there any costs associated with using PillPal?",
        answer:
          "PillPal is currently a free application available for use by patients and caregivers. There are no subscription fees or hidden costs associated with using the app.",
      },
    ];

    const toggleAnswer = (index) => {
      // Toggle the answer for the FAQ at the given index
      showAnswer.value[index] = !showAnswer.value[index];
    };

    return {
      showAnswer,
      faq,
      toggleAnswer,
    };
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

.navbar {
  position: fixed;
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
  margin-left: 0px;
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
  color: #000;
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

<template>
  <div
    class="profile-page"
    :style="{ background: isDataAvailable ? 'white' : '#808080' }"
  >
    <NavBar />
    <div class="content">
      <div v-if="isDataAvailable" class="profile-container">
        <div class="title-container">
          <h1 class="user-email">{{ userEmail }}</h1>
        </div>
        <!-- Display user information -->
        <div class="info-container">
          <p v-if="profile.role">Role: {{ profile.role }}</p>
          <p v-if="profile.medicationHistory">
            Medication History: {{ profile.medicationHistory }}
          </p>
          <p v-if="profile.drugAllergies">
            Drug Allergies: {{ profile.drugAllergies }}
          </p>
          <p v-if="profile.medicalFacilities">
            Frequently Visited Medical Facilities:
            {{ profile.medicalFacilities }}
          </p>
          <p v-if="profile.doctor">
            Frequently Visited Doctor: {{ profile.doctor }}
          </p>
        </div>
      </div>
      <div v-else>
        <div class="profile-container">
          <h1 class="user-email">{{ username }}</h1>
          <form @submit.prevent="submitForm" class="profile-form">
            <!-- Form inputs for user information -->
            <label for="role"
              >Are you the role of patient or caregiver? *</label
            >
            <select id="role" v-model="profile.role" required>
              <option disabled value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="caregiver">Caregiver</option>
            </select>

            <label for="medication-history"
              >Any long-term medication history? If yes, please specify.
              *</label
            >
            <input
              type="text"
              id="medication-history"
              v-model="profile.medicationHistory"
              required
              placeholder="Enter medication history"
            />

            <label for="drug-allergies">Drug Allergies *</label>
            <input
              type="text"
              id="drug-allergies"
              v-model="profile.drugAllergies"
              required
              placeholder="Enter drug allergies"
            />

            <label for="medical-facilities"
              >Frequently visited medical facilities (if any)?</label
            >
            <input
              type="text"
              id="medical-facilities"
              v-model="profile.medicalFacilities"
              placeholder="Enter medical facilities"
            />

            <label for="doctor">Frequently visited doctor (if any)?</label>
            <input
              type="text"
              id="doctor"
              v-model="profile.doctor"
              placeholder="Enter visited doctor"
            />

            <button type="submit" class="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase"; // Ensure you're importing the 'auth' module properly
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "ProfilePage",
  components: {
    NavBar,
  },
  data() {
    return {
      username: "",
      userEmail: "",
      profile: {
        role: "",
        medicationHistory: "",
        drugAllergies: "",
        medicalFacilities: "",
        doctor: "",
      },
      isDataAvailable: true,
    };
  },
  methods: {
    async submitForm() {
      const user = auth.currentUser;
      const userDocRef = doc(db, "users", user.uid);

      await setDoc(userDocRef, this.profile, { merge: true });
      this.isDataAvailable = true;
    },
    async fetchUserProfile() {
      const user = auth.currentUser;
      const userDocRef = doc(db, "users", user.uid);

      try {
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          this.profile = userDoc.data();
        } else {
          this.isDataAvailable = false;
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userEmail = user.email;
        this.fetchUserProfile();
      }
    });
  },
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  overflow: hidden;
  background: #808080;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.profile-container {
  flex-grow: 1;
  background: white;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  max-width: 100%; /* Adjust the maximum width to your preference */
}

.user-email {
  font-size: 24px;
}

.profile-form {
  text-align: left;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
}

input,
select {
  display: block;
  margin: 10px 0; /* Add vertical margin between questions */
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 380px;
}

.submit-button {
  background: #3cb26d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px 0; /* Add vertical margin to separate the button and other elements */
}

.submit-button:hover {
  background: #2a8648;
}

.title-container {
  background: #3cb26d;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 30px;
  width: 80vw;
}

.user-email {
  font-size: 30px;
  font-weight: bold;
  color: white;
}

.info-container {
  border: 2px solid #3cb26d;
  border-radius: 10px;
  padding: 20px;

  font-size: 20px;
}
</style>

<template>
  <div
    class="container"
    :style="{ background: isDataAvailable ? 'white' : '#808080' }"
  >
    <NavBar />
    <div v-if="isDataAvailable" class="profile-container">
      <h1>{{ username }}</h1>
      <p>{{ userEmail }}</p>
      <!-- Display user information -->
      <div>
        <p v-if="profile.role">Role: {{ profile.role }}</p>
        <p v-if="profile.medicationHistory">
          Medication History: {{ profile.medicationHistory }}
        </p>
        <p v-if="profile.drugAllergies">
          Drug Allergies: {{ profile.drugAllergies }}
        </p>
        <p v-if="profile.medicalFacilities">
          Frequently Visited Medical Facilities: {{ profile.medicalFacilities }}
        </p>
        <p v-if="profile.doctor">
          Frequently Visited Doctor: {{ profile.doctor }}
        </p>
      </div>
    </div>
    <div v-else>
      <div class="profile-container">
        <h1>{{ username }}</h1>
        <p>{{ userEmail }}</p>
        <form @submit.prevent="submitForm">
          <!-- Form inputs for user information -->
          <label for="role">Are you the role of patient or caregiver? *</label>
          <select id="role" v-model="profile.role" required>
            <option disabled value="">Select your role</option>
            <option value="patient">Patient</option>
            <option value="caregiver">Caregiver</option>
          </select>

          <label for="medication-history"
            >Any long-term medication history? If yes, please specify. *</label
          >
          <input
            type="text"
            id="medication-history"
            v-model="profile.medicationHistory"
            required
          />

          <label for="drug-allergies">Drug Allergies *</label>
          <input
            type="text"
            id="drug-allergies"
            v-model="profile.drugAllergies"
            required
          />

          <label for="medical-facilities"
            >Frequently visited medical facilities (if any)?</label
          >
          <input
            type="text"
            id="medical-facilities"
            v-model="profile.medicalFacilities"
          />

          <label for="doctor">Frequently visited doctor (if any)?</label>
          <input type="text" id="doctor" v-model="profile.doctor" />

          <button type="submit">Submit</button>
        </form>
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
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.profile-container {
  flex-grow: 1;
  padding: 20px;
}

nav-bar {
  flex-basis: 100px;
}
</style>

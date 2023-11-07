<template>
  <div class="container">
    <NavBar /> 
    <div class="profile-container">
      <h1>{{ username }}</h1>
      <p>{{ userEmail }}</p>
      <form @submit.prevent="submitForm">
        <label for="role">Are you the role of patient or caregiver? *</label>
        <select id="role" v-model="profile.role" required>
          <option disabled value="">Select your role</option>
          <option value="patient">Patient</option>
          <option value="caregiver">Caregiver</option>
        </select>

        <label for="medication-history">Any long-term medication history? If yes please specify. *</label>
        <input type="text" id="medication-history" v-model="profile.medicationHistory" required>

        <label for="drug-allergies">Drug Allergies *</label>
        <input type="text" id="drug-allergies" v-model="profile.drugAllergies" required>

        <label for="medical-facilities">Frequently visited medical facilities (if any)?</label>
        <input type="text" id="medical-facilities" v-model="profile.medicalFacilities">

        <label for="doctor">Frequently visited doctor (if any)?</label>
        <input type="text" id="doctor" v-model="profile.doctor">

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'; 

export default {
  name: 'ProfilePage',
  components: {
    NavBar
  },
  data() {
    return {
      username: 'User123',
      userEmail: 'user1234@gmail.com',
      profile: {
        role: '',
        medicationHistory: '',
        drugAllergies: '',
        medicalFacilities: '',
        doctor: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.profile);

    }
  }
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


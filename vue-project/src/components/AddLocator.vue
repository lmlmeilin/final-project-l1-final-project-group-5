<template>
  <div>
    <div>
      <input id="searchInput" v-model="searchQuery" placeholder="Search clinics" @input="updateClinicList" />
      <select id="medicineFilter" v-model="selectedMedicine" @change="updateClinicList">
        <option value="">All Medicines</option>
        <option value="Diureticsd">Diureticsd</option>
        <option value="Vasodilators">Vasodilators</option>
        <option value="Sulphonylureas">Sulphonylureas</option>
        <option value="Digoxin">Digoxin</option>
        <option value="Trimetazidine">Trimetazidine</option>
      </select>

      <select id="holidayFilter" v-model="selectedHolidayFilter" @change="updateClinicList">
        <option value="">All Clinics</option>
        <option value="Open on Holidays">Open on Holidays</option>
        <option value="Open on Sunday">Open on Sunday</option>
        <option value="Open 24 Hours">Open 24 Hours</option>
        <!-- Add more filter options as needed -->
      </select>
    </div>
    <div id="clinic-list">
      <div v-for="clinic in filteredClinics" :key="clinic.name">
        <h2>{{ clinic.name }}</h2>
        <p>Location: {{ clinic.location }}</p>
        <p>Medicine: {{ Array.isArray(clinic.medicine) ? clinic.medicine.join(', ') : clinic.medicine }}</p>
        <p>Open on Holidays: {{ clinic.openOnHolidays ? 'Yes' : 'No' }}</p>
        <p>Open on Sunday: {{ clinic.openOnSunday ? 'Yes' : 'No' }}</p>
        <p>Open 24 Hours: {{ clinic.openAllday ? 'Yes' : 'No' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddLocator',
  data() {
    return {
      searchQuery: '',
      selectedMedicine: '',
      selectedHolidayFilter: '',
      clinics: [
  {
    name: "University Health Centre",
    location: "20 lower Kent Ridge Rd",
    medicine: ["Diureticsd", "Digoxin"],
    openOnHolidays: false,
    openOnSunday: false,
    openAllday: false,
  },

  {
    name: "Orchard Clinic (Orchard)",
    location: "302 Orchard Rd",
    medicine: ["Diureticsd", "Vasodilators", "Trimetazidine"],
    openOnHolidays: true,
    openOnSunday: false,
    openAllday: false,
  },

  {
    name: "Central 24-Hr Clinic (Clementi)",
    location: "450 Clementi Ave 3",
    medicine: ["Diureticsd", "Vasodilators"],
    openOnHolidays: true,
    openOnSunday: true,
    openAllday: true,
  },

  {
    name: "Orchard Clinic (Parkway Parade)",
    location: "80 Marine Parade Road",
    medicine: ["Digoxin", "Sulphonylureas"],
    openOnHolidays: true,
    openOnSunday: true,
    openAllday: false,
  },

  {
    name: "Pandan Clinic",
    location: "415 Pandan Gardens",
    medicine: ["Diureticsd"],
    openOnHolidays: false,
    openOnSunday: false,
    openAllday: false,
  },

  {
    name: "OneCare Clinic Bedok MRT",
    location: "315 New Upper Changi Rd",
    medicine: ["Diureticsd", "Digoxin"],
    openOnHolidays: false,
    openOnSunday: false,
    openAllday: false,
  },

],

      filteredClinics: [],
    };
  },
  methods: {
    updateClinicList() {
      this.filteredClinics = this.clinics.filter((clinic) => {
        const medicineCondition = this.selectedMedicine === "" || clinic.medicine.includes(this.selectedMedicine);
        const holidayCondition = this.selectedHolidayFilter === "" || 
          (this.selectedHolidayFilter === "Open on Holidays" && clinic.openOnHolidays) ||
          (this.selectedHolidayFilter === "Open on Sunday" && clinic.openOnSunday) ||
          (this.selectedHolidayFilter === "Open 24 Hours" && clinic.openAllday);

        return (
          clinic.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
          medicineCondition &&
          holidayCondition
        );
      });
    },
  },
  mounted() {
    this.updateClinicList();
  },
}
</script>

<style scoped>
#search-and-filter {
  display: flex;
  justify-content: space-between; 
  padding: 10px 0;
}

#searchInput, #medicineFilter, #holidayFilter {
  flex: 1; 
  margin: 0 10px; 
}


#clinic-list {
  overflow-y: auto; 
  max-height: 300px; 
}


#clinic-list > div {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

#clinic-list h2 {
  margin: 0;
  padding: 0;
  color: #333; 
}

#clinic-list p {
  margin: 0;
  padding: 0;
  font-size: 0.9em; 
}

</style>

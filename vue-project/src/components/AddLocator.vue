<template>
  <div>
    <div>
      <input id="searchInput" v-model="searchQuery" placeholder="Search clinics" @input="updateClinicList" />
      <select id="medicineFilter" v-model="selectedMedicine" @change="updateClinicList">
        <option value="">All Medicines</option>
        <option value="Medicine A">Medicine A</option>
        <option value="Medicine B">Medicine B</option>
        <option value="Medicine C">Medicine C</option>
        <!-- Add more filter options as needed -->
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
    name: "Greenview Medical Center",
    location: "123 Greenway Drive",
    medicine: ["Medicine A", "Medicine B"],
    openOnHolidays: true,
    openOnSunday: true,
    openAllday: false
  },
  {
    name: "City Health Clinic",
    location: "456 Urban Street",
    medicine: ["Medicine A", "Medicine C"],
    openOnHolidays: false,
    openOnSunday: false,
    openAllday: true
  },
  {
    name: "Lakeside Family Clinic",
    location: "789 Lakeshore Blvd",
    medicine: ["Medicine B", "Medicine C"],
    openOnHolidays: true,
    openOnSunday: true,
    openAllday: false
  },
  {
    name: "Central Pediatric Clinic",
    location: "321 Central Ave",
    medicine: ["Medicine A", "Medicine B", "Medicine C"],
    openOnHolidays: false,
    openOnSunday: true,
    openAllday: false
  },
  {
    name: "24/7 Immediate Care",
    location: "654 Main Street",
    medicine: ["Medicine C"],
    openOnHolidays: true,
    openOnSunday: true,
    openAllday: true
  },
  // ... add more clinics as needed ...
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

    // Initialization code for the map should go here.
    // You may need to convert your vanilla JS map initialization code
    // to Vue's approach, possibly using Vue's lifecycle hooks.
  },
}
</script>

<style scoped>
#map {
  height: 300px;
  width: 100%;
  margin: auto;
}

h3 {
  background-color: #4CAF50; 
  color: white; 
  padding: 10px; 
}
</style>

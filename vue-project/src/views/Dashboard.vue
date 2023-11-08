<template>
  <div class="dashboard">
    <NavBar />
    <div class="content">
      <div class="calendarComponent">
        <FullCalendar ref="calendar" :options="calendarOptions" />
        <br />
        <button v-on:click="logSelectedDate">Add Reminder</button>
      </div>
      <div class="currentReminders">
        <!-- Add content for "Current Reminders" section here -->
        <div class="header1">
          <h2>Current Reminders</h2>
        </div>
        <div class="reminders"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
    NavBar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        weekends: true,
        select: this.handleDateSelect,
        headerToolbar: {
          left: "",
          center: "title",
          right: "prev,next",
        },
        selectable: true,
      },
      selectedDate: null,
    };
  },
  methods: {
    handleDateSelect(info) {
      let dateSelected = info.startStr;
      this.selectedDate = dateSelected;
    },
    logSelectedDate() {
      this.date = this.selectedDate;
      if (this.date && this.selectedDate) {
        let x = this.date.split("-");
        const selectedDate = x[2] + "-" + x[1] + "-" + x[0];
        this.$router.push({
          path: "/addReminderView",
          query: { updatedDate: selectedDate },
        });
      }
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  overflow: hidden;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: row;

  text-align: center;
  padding: 20px;
}

.calendarComponent {
  height: 700px;
  width: 700px;
  margin: 10px;
  text-align: left;
}

.currentReminders {
  text-align: center;
  margin-left: 300px;
}

.header1 {
  background-color: #3cb26d;
  text-align: center;
}
</style>

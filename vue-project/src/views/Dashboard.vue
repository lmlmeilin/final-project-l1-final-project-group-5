<template>
  <div class="dashboard">
    <NavBar />
    <div class="content">
      <div class="calendarComponent">
        <FullCalendar ref="calendar" :options="calendarOptions" />
        <br />
        <button @click="openAddReminder">Add Reminder</button>
        <my-view v-if="showAddReminder"></my-view>
      </div>
      <div class="currentReminders">
        <!-- Add content for "Current Reminders" section here -->
        <div class="header1">
          <h2>Current Reminders</h2>
        </div>
        <div class="reminders"></div>
          <TableFormat :reminders="reminders" @edited="handleReminderEdited" />
      </div>
    </div>
  </div>
</template>

<script>
import AddReminderView from '@/views/AddReminderView.vue'
import NavBar from "@/components/NavBar.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    'my-view': AddReminderView,
    AddReminderView,
    FullCalendar,
    NavBar,
  },
  data() {
    return {
      showAddReminder: false,
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
      reminders: [],
    };
  },
  methods: {
    handleDateSelect(info) {
      let dateSelected = info.startStr;
      this.selectedDate = dateSelected;
    },

    openAddReminder() {
      this.showAddReminder = true;
    },
    handleReminderAdded(reminder) {
      this.reminders.push(reminder);
    },
    // Listen to the "edited" event and update the reminders array
    handleReminderEdited(updatedReminder) {
      const index = this.reminders.findIndex(
        (reminder) => reminder.Med === updatedReminder.Med
      );
      if (index !== -1) {
        this.$set(this.reminders, index, updatedReminder);
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
  max-height: 100vh;
  overflow-y: auto;
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

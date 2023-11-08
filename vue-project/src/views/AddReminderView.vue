<template>
  <div class="container">
    <NavBar class="nav-bar" />
    <div class="content">
      <div class="title">
        <h1 class="header">Create New Reminder</h1>
      </div>
      <div class="add-reminder-box">
        <AddReminder @added="change" />
      </div>
      <TableFormat :key="refreshComp" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddReminder from "@/components/AddReminder.vue";
import TableFormat from "@/components/TableFormat.vue";

export default {
  name: "addReminderView",
  components: {
    NavBar,
    AddReminder,
    TableFormat,
  },
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      this.refreshComp += 1;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  background: white;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
  padding: 20px;
  overflow-y: auto;
  height: max-content;
}
.header {
  font-size: 30px;
  font-weight: bold;
  background: #3cb26d;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  margin-left: 0;
}
.add-reminder-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #3cb26d;
  flex-grow: 1;
  height: max-content;
}
</style>

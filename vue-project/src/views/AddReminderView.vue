<template>
  <div style="text-align:center;" v-if="user" class ="AddReminderView">
      <NavBar class="nav-bar" />
      <div class="content">
      <TableFormat :key="refreshComp"/> 
      <button @click="openAddReminder" class= "addRemButton">Add Reminder</button>
        <div v-if="showAddReminder">
          <AddReminder @added="change"/>
        </div>
      </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddReminder from '@/components/AddReminder.vue'
import  TableFormat from '@/components/TableFormat.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  mounted() {
  const auth = getAuth();
    onAuthStateChanged(auth, user => {
    this.user = user;
    })
  },
  name: 'addReminderView',
  components:{
      AddReminder,
      NavBar,
      TableFormat,
  },
  data(){
    return{
      refreshComp: 0,
      user: false,
      showAddReminder: false,
    }
  },
  methods:{
    change(){  
      this.refreshComp += 1;
    },
    openAddReminder() {
      this.showAddReminder = !this.showAddReminder; 
    },
  }
}

</script>

<style>

.nav-bar {
  width: 100%;
  position: fixed;
  background-color: #ffffff; 
}

.content {
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
}

.addRemButton {
  width: 150px;
  
}
</style>

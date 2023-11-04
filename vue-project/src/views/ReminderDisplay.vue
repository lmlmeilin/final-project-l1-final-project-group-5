<template>

  <div style="text-align:center;" v-if="user">
  
    <NavBar/>
    <h3>This is Reminder Page</h3>
    <ReminderDisplay/>
    <LogOut/>
  
  </div>
  </template>
  
  <script>
  import ReminderDisplay from '@/components/ReminderDisplay.vue'
  import NavBar from '@/components/NavBar.vue'
  import LogOut from '@/components/LogOut.vue'
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default {
    name: 'Reminder',
  
    components:{
      ReminderDisplay,
      NavBar,
      LogOut
    },
  
    data() {
      return {
        user:false,        
          }
      },
  
      mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;      
        }
    })
      },
  
  
    }
  
  </script>
  
  
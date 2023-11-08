<template>
    <div class = "container">
        <NavBar class="nav-bar" />
        <div class="content">
        <AddReminder @added="change"/>
        <TableFormat :key="refreshComp"/>  
        </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import AddReminder from '@/components/AddReminder.vue'
  import  TableFormat from '@/components/TableFormat.vue'
  
  export default {
    name: 'addReminderView',
    components:{
        NavBar, 
        AddReminder,
        TableFormat,
    },
    data(){
      return{
        refreshComp: 0
      }
    },
    methods:{
      change(){  
        this.refreshComp += 1
      }
    },  
  }
  </script>
  
  <style>
.nav-bar {
  width: 100%;
  height: 100%;
  /* Add other styling for the NavBar as needed */
}


  </style>
  
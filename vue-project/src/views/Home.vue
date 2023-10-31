<template>
  <WelcomeCpp/>
  <AddCoin @added="change" />
  <ReminderDisplay :key="refreshComp"/>  
</template>

<script>
import Home from '@/components/Home.vue'
import AddReminder from '@/components/AddReminder.vue'
import ReminderDisplay from '@/components/ReminderDisplay.vue'

export default {
  name: 'App',
  components:{
    WelcomeCpp,
    AddCoin,
    ProfitDisplay
  },
  data(){
    return{
      refreshComp:0
    }
   },
  methods:{
    change(){  
      this.refreshComp += 1
      }
     }  
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;

}

#bg { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
</style>

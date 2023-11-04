<template>
 <div class ="container">
        <form id="myform">
            <h1>Create New Reminder</h1>
            <h2>Add New Reminder, Reminder #X</h2>
  
            <div class = "formli" >            
                <label for="med">Medicine Name</label>
                <input type="text" id = "med" required ="" placeholder="Enter medicine name"> <br><br>              
                <label for="dosage">Dosage</label>
                <input type="number" id = "dosage" required =""  placeholder="Enter dosage"><br><br>               
                <label for="freq">How many times do you take this medicine per day? </label>
                <input type="number" id = "freq" required =""  placeholder="Enter number of times" ><br><br>
                <label for="baFood">Before/After Food </label>
                <input type="text" id = "baFood" required =""  placeholder="Select before/after food" ><br><br>
                <label for="setRem">Set reminder notification to ring/silent</label>
                <input type="text" id = "setRem" required =""  placeholder="Select ring/silent" ><br><br>
                <label for="chooseFreq">Choose frequency of intake</label>
                <input type="text" id = "chooseFreq" required =""  placeholder="Daily/Weekly/Monthly" ><br><br>
                <label for="first">1st Intake</label>
                <input type="number" id = "first" required =""  placeholder="Enter time" ><br><br>
                <label for="second">2nd Intake</label>
                <input type="number" id = "second" required =""  placeholder="Enter time" ><br><br>
                <label for="third">3rd Intake</label>
                <input type="number" id = "third" required =""  placeholder="Enter time" ><br><br>
                <label for="totalDuration">Total duration required to complete the medication</label>
                <input type="number" id = "totalDuration" required =""  placeholder="Enter duration" ><br><br>
                
                <div class ="createReminder" >
                    <button  id = "createReminderButton"  type="button"  v-on:click="savetofs"> Create Reminder </button>
               </div>
            </div>
        </form> 
    </div>
</template>


<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
import { getAuth} from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  data(){
    return{
      med:"", dosage:"", freq:"", baFood:""
    }
  },

methods: {
  async savetofs(){   
   console.log("IN AC") 

  let med  = document.getElementById("med").value
  let dosage  = document.getElementById("dosage").value
  let freq  = document.getElementById("freq").value
  let baFood =  document.getElementById("baFood").value

  alert(" Saving your data for Med : " + med) 
  
  try{
    const docRef = await setDoc(doc(db, "Portfolio", med),{
    Med: med , Dosage : dosage, Freq: freq, BaFood : baFood
    })
    console.log(docRef)
    document.getElementById('myform').reset();
    this.$emit("added")
    }
  catch(error) {
      console.error("Error adding document: ", error);
  }
    }
}
}
</script>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

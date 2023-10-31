<template>
    <div class ="container">
        <form id="myform">
            <h2>Edit reminder, #Reminder X</h2>
  
            <div class = "formlii" >            
                <label for="med">Medicine Name:</label>  
                <h6 id = "medName">MedName</h6>  <br><br>
             
                <label for="dosage">Dosage: </label>
                <input type="number" id = "dosage" required =""  placeholder="Edit dosage"><br><br>               
                <label for="freq">How many times do you take this medicine per day? </label>
                <input type="number" id = "freq" required = ""  placeholder="Edit number" ><br><br>
                <label for="baFood">Before/After Food </label>
                <input type="text" id = "baFood" required =""  placeholder="Edit before/after food" ><br><br>
                <label for="setRem">Set reminder notification to ring/silent</label>
                <input type="text" id = "setRem" required =""  placeholder="Edit ring/silent" ><br><br>
                <label for="chooseFreq">Choose frequency of intake</label>
                <input type="text" id = "chooseFreq" required =""  placeholder="Edit Daily/WeekLy/Monthly" ><br><br>
                <label for="first">1st Intake</label>
                <input type="number" id = "first" required = ""  placeholder="Edit time" ><br><br>
                <label for="second">2nd Intake</label>
                <input type="number" id = "second" required =""  placeholder="Edit time" ><br><br>
                <label for="third">3rd Intake</label>
                <input type="number" id = "third" required = ""  placeholder="Enter time" ><br><br>
                <label for="totalDuration">Total duration required to complete the medication</label>
                <input type="number" id = "totalDuration" required = ""  placeholder="Edit duration" ><br><br>
                
                <div class = "editReminder" >
                    <button  id = "editReminderButton"  type="button"  v-on:click="savetofs"> Edit Reminder </button>
               </div>
            </div>
        </form> 
    </div>
  </template>
  
<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
methods: {
  async savetofs(){   
   console.log("IN AC") 

  let med  = document.getElementById("med").value
  let dosage  = document.getElementById("dosage").value
  let freq  = document.getElementById("freq").value
  let baFood =  document.getElementById("baFood").value

  alert(" Saving your data for Coin : " + med) 
  // last class-- > firebase 8 --> await db.collection("Portfolio").doc(coin).set(...
  // We change to firebase 9     
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

  
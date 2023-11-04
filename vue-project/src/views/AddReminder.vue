<template>
 <div class ="addRem">
        <NavBar />
        <form id="myform">
            <h1 class = "h1">Create New Reminder</h1>
            <h2 class = "h2">Add New Reminder, Reminder #X</h2>
  
            <div class = "formi" >            
                <label for="med">Medicine Name</label> <br> 
                <input type="text" id = "med" required ="" placeholder="Enter medicine name"> <br><br>    

                <label for="dosage">Dosage</label> <br> 
                <input type="number" id = "dosage" required =""  placeholder="Enter dosage"><br><br>   

                <label for="freq">How many times do you take this medicine per day? </label> <br> 
                <input type="number" id = "freq" required =""  placeholder="Enter number of times" ><br><br>

                <label for="baFood">Before/After Food (Select Before/After food)</label> <br>
                <select id="baFood" name = "Select before/after food"> 
                  <option value = "Before Food">Before Food</option>
                  <option value = "Before Food">After Food</option>
                </select> <br><br>

                <label for="setRem">Set reminder notification to ring/silent (Select ring/silent)</label> <br>
                <select id="setRem" name = "Select ring/silent"> 
                  <option value = "Ring">Ring</option>
                  <option value = "Silent">Silent</option>
                </select> <br><br>

                <label for="chooseFreq">Choose frequency of intake (Select Daily/Weekly/Monthly)</label> <br>
                <select id="chooseFreq" name = "Select Daily/Weekly/Monthly">
                  <option value = "Daily">Daily</option>
                  <option value = "Weekly">Weekly</option>
                  <option value = "Monthly">Monthly</option>
                </select> <br><br>

                <label for="first">1st Intake</label> <br>
                <input type="time" id="first" required = ""><br><br>
                
                <label for="second">2nd Intake</label> <br>
                <input type="time" id="second" required = ""><br><br>

                <label for="third">3rd Intake</label> <br>
                <input type="time" id="third" required = ""><br><br>

                <label for="totalDuration">Total days required to complete the medication</label> <br>
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
import NavBar from "@/components/NavBar.vue"; // Import the NavBar component
const db = getFirestore(firebaseApp);

export default {
  name: "addReminder",
  components: {
    NavBar, // Register the NavBar component
  },
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
    const docRef = await setDoc(doc(db, "reminder", med),{
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
};
</script>

<style scoped>
.addRem {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
}

.h1 {
  text-align: left;
}

.h2 {
  text-align: left;
}

#myform {
  max-width: 953px; 
  width: 100%;
  padding: 20px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.formi {
  margin: 1;
  text-align: left;
  width: 80%;
}

.createReminder {
  text-align: center;
}
</style>


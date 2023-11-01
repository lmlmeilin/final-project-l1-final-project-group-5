<template>
    <div class ="reminderNotif">
        <h2>Reminder Notification</h2>
        <h2 id = "notif">Time to take your medication, UserX</h2> <br>

        <h2>Dosage</h2>
        <h2 id = "dose">num1</h2> <br>

        <h2>How many times do you take this medicine per day</h2>
        <h2 id = "times">num2</h2> <br>

        <h2>Before/After food</h2>
        <h2 id = "befaft">text1</h2> <br>

        <button type="resolve">Resolve</button>
        <button type="snooze">Snooze</button>
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
  
<template>
    <div class ="delReminder">
        <h2 id="heading">Reminder #X</h2>
        <h2 id="heading2">Reminder #X</h2>

        <h2>Medicine Name</h2>
        <h2 id="medsname">meds name</h2>

        <h2>Dosage</h2>
        <h2 id = "dosage">dosage</h2> <br>

        <h2>How many times do you take this medicine per day?</h2>
        <h2 id = "numTimes">numTimes</h2> <br>

        <h2>Before/After food</h2>
        <h2 id= beforeAfter>After Food</h2> <br>

        <h2>Set reminder notification to ring/silent</h2>
        <h2 id= sound>sound</h2> <br>

        <button type="Edit">Edit Reminder</button>
        <button type="Delete">Delete Reminder</button>
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
  
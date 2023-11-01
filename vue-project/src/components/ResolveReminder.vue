<template>
    <div class ="resolveReminder">
        <h2 id="heading">Resolve Reminder #X</h2>
        <h2 id="heading2">Resolve Reminder #X</h2>

        <h2>Medicine Name</h2>
        <h2 id="medsname">meds name</h2>

        <h2>Dosage Taken</h2>
        <h2 id = "dosage">dosage</h2> <br>

        <button type="Resolve">Resolve Reminder</button>
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
  
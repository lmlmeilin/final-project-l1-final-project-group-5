<template>
    <h1 id = "Current">Medicines</h1>    
    
    <table id = "table" class = "auto-index">
        <tr>  
        <th>Reminder ID</th>       
        <th>Med</th>
        <th>Dosage</th>
        <th>Frequency</th>
        <th>Before/After Food</th>
        <th>Set reminder notification</th>
        <th>Choose Frequency</th>
        <th>First</th>
        <th>Second</th>
        <th>Third</th>
        <th>Total Duration</th>
        <th>Actions</th>
        </tr>
    </table><br><br>    

</template>

<script>
import { firebaseApp } from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const db = getFirestore(firebaseApp);
export default {
  data() {
    return {
      useremail: "",
    }
  }, 
  created() {
    const auth = getAuth();      
    this.useremail = auth.currentUser.email; 
    this.display(this.useremail)
  },
  methods: {
  async display(useremail) {
    console.log("in display")
    let allDocuments = await getDocs(collection(db, String(useremail)))    
    let index = 1
    allDocuments.forEach((docs) => {
      let documentData= docs.data()
      let med  = (documentData.Med)
      let dosage  = (documentData.Dosage)
      let freq  = (documentData.Frequency)
      let baFood =  (documentData.BaFood)
      let setRem = (documentData.SetReminder)
      let chooseFreq = (documentData.ChooseFrequency)
      let first = (documentData.First)
      let second = (documentData.Second)
      let third = (documentData.Third)
      let totalDuration = (documentData.TotalDuration)
      // create rows and cells in the table
      let table = document.getElementById("table")
      let row = table.insertRow(index)    
      let cell1 = row.insertCell(0); let cell2 = row.insertCell(1); let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3); let cell5 = row.insertCell(4); let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6); let cell8 = row.insertCell(7); let cell9 = row.insertCell(8); 
      let cell10 = row.insertCell(9); let cell11 = row.insertCell(10); let cell12 = row.insertCell(11)
      cell1.innerHTML = index; cell2.innerHTML = med; cell3.innerHTML = dosage; cell4.innerHTML = freq; 
      cell5.innerHTML = baFood; cell6.innerHTML = setRem;  cell7.innerHTML = chooseFreq; cell8.innerHTML = first; 
      cell9.innerHTML = second; cell10.innerHTML = third; cell11.innerHTML = totalDuration; 
      let deleteButton = document.createElement("button")
      deleteButton.id = String(med)
      deleteButton.className = "bwt"    
      deleteButton.innerHTML ="Delete"
      // append delete button in cell8
      cell12.appendChild(deleteButton) 
      deleteButton.onclick =  function(){
        deleteInstrument(med, useremail)
      }  
      index += 1
      })
    },
    async deleteInstrument(med, user){
      alert("You are going to delete " + med)
      await deleteDoc(doc(db, user, med))
      console.log("Document successfully deleted!", med);
      let tb = document.getElementById("table")
      while (tb.rows.length >1){
          tb.deleteRow(1)
      }
      this.display(this.useremail)
    },
  }
}
</script>

<style>
h1 {
  text-align: center;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

tr:nth-child(even) {
  background-color: #e3edee;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

.bwt {
  color: rgb(243, 236, 236);
  background-color: rgb(255, 94, 0);
}

.edit {
  color: rgb(243, 236, 236);
  background-color: green;
}
</style>

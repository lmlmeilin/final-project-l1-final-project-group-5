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

    <div v-if="isEditing">
      <h1>Edit Reminder</h1>
      <form @submit.prevent="updateMeds" >
        <h2 class="h2">
          Edit Reminder
        </h2>
        <div class="formi">
        <label for="med">Medicine Name</label> <br/>
        <input v-model="editData.Med" type="text" id="editMed" />
        <br/><br/>

        <label for="dosage">Dosage</label> <br />
        <input v-model="editData.Dosage" type="number" id="editDosage" />
        <br /><br />

        <label for="freq">How many times do you take this medicine per day?</label><br />
        <input v-model="editData.Freq" type="number" id="editFreq" />
        <br /><br />

        <label for="baFood">Before/After Food (Select Before/After food)</label>
        <br />
        <select v-model="editData.BaFood" id="editbaFood">
          <option value="Before Food">Before Food</option>
          <option value="After Food">After Food</option>
        </select>
        <br /><br />

        <label for="setRem"
          >Set reminder notification to ring/silent (Select ring/silent)</label><br />
        <select v-model="editData.SetRem" id="editSetRem">
          <option value="Ring">Ring</option>
          <option value="Silent">Silent</option>
        </select>
        <br /><br />

        <label for="chooseFreq">Choose frequency of intake (Select Daily/Weekly/Monthly)</label> <br/>
        <select v-model="editData.ChooseFreq" id="chooseFreq">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <br /><br />

        <label for="first">1st Intake</label> <br />
        <input v-model="editData.First" type="time" id="editFirst"/>
        <br /><br />

        <label for="second">2nd Intake</label> <br />
        <input v-model="editData.Second" type="time" id="editSecond"/>
        <br /><br />

        <label for="third">3rd Intake</label> <br />
        <input v-model="editData.Third" type="time" id="editThird"/>
        <br /><br />

        <label for="totalDuration">Total days required to complete the medication</label><br />
        <input v-model="editData.TotalDuration" type="number" id="editTotalDuration" />
        <br /><br />

      </div>
        <button type="submit">Edit</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>

</template>

<script>
import { firebaseApp } from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const db = getFirestore(firebaseApp);
export default {
  data() {
    return {
      isEditing: false,
      editData: { 
        Med: "",
        Dosage: "",
        Freq: "",
        BaFood: "",
        SetRem: "",
        ChooseFreq: "",
        First: "",
        Second: "",
        Third: "",
        TotalDuration: "",
      },
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

      // create delete button
      let deleteButton = document.createElement("button")
      deleteButton.id = String(med)
      deleteButton.className = "bwt"    
      deleteButton.innerHTML ="Delete"
      cell12.appendChild(deleteButton) 
      deleteButton.onclick =  () => {
        this.deleteInstrument(med, useremail)
      }  

      // create edit button
      let editButton = document.createElement("button")
      editButton.id = String(med)
      editButton.className = "edit"    
      editButton.innerHTML ="Edit"
      cell12.appendChild(editButton) 
      editButton.onclick =  () => {
        this.editInstrument(med, dosage, freq, baFood, setRem, chooseFreq, first, second, third, totalDuration)
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

    async editInstrument(med, dosage, freq, baFood, setRem, chooseFreq, first, second, third, totalDuration) {
      this.isEditing = true;
      this.editData.Med = med;
      this.editData.Dosage = dosage;
      this.editData.Freq = freq;
      this.editData.BaFood = baFood;
      this.editData.SetRem = setRem;
      this.editData.ChooseFreq = chooseFreq;
      this.editData.First = first;
      this.editData.Second = second;
      this.editData.Third = third;
      this.editData.TotalDuration = totalDuration;

      this.clearTable();
    },
    cancelEdit() {
      this.isEditing = false;
    }, 
    async updateMeds() {
      const docRef = doc(db, String(this.useremail), this.editData.Med);
      const newData = {
        Med: this.editData.Med,
        Dosage: this.editData.Dosage,
        Freq: this.editData.Freq,
        BaFood: this.editData.BaFood,
        SetRem: this.editData.SetRem,
        ChooseFreq: this.editData.ChooseFreq,
        First: this.editData.First,
        Second: this.editData.Second,
        Third: this.editData.Third,
        TotalDuration: this.editData.TotalDuration,
        }
        await updateDoc(docRef, newData)
        this.isEditing = false;
        this.editData = {
          Med: "",
          Dosage: "",
          Freq: "",
          BaFood: "",
          SetRem: "",
          ChooseFreq: "",
          First: "",
          Second: "",
          Third: "",
          TotalDuration: "",
        }
        this.display(this.useremail);
    }, 
    clearTable() {
      let table = document.getElementById("table");
      while (table.rows.length > 1) {
      table.deleteRow(1);
    }
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

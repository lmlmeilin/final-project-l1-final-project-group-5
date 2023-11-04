<template>
  <h1 id = "Current">Current Medicine</h1>    
  
  <table id = "table" class = "auto-index">
      <tr>  
      <th>S.No</th>       
      <th>Med</th>
      <th>Dosage</th>
      <th>Frequency</th>
      <th>Before or After Food</th>
      </tr>
  </table><br><br>    

</template>

<script>
// import CoinGecko from "coingecko-api"
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
mounted(){
async function display(){
let allDocuments = await getDocs(collection(db,"Portfolio"))    
  // let z = await db.collection("Portfolio").get() 
let index = 1

allDocuments.forEach((docs) => {

  let documentData= docs.data()

  let med = (documentData.Med)
  let dosage = (documentData.Dosage)
  let freq = (documentData.Freq)
  let baFood = (documentData.BaFood)

  // create rows and cells in the table

  let table = document.getElementById("table")
  let row = table.insertRow(index)    

  let cell1 = row.insertCell(0); let cell2 = row.insertCell(1); let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3); let cell5 = row.insertCell(4); let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6); let cell8 = row.insertCell(7);      

  cell1.innerHTML = index; cell2.innerHTML = med; cell3.innerHTML = dosage; cell4.innerHTML = freq; 
  cell5.innerHTML = baFood; cell6.innerHTML = 0;  cell7.innerHTML = 0

  // creating elements and giving class names through javascript
  cell7.className = "profits"
 
  let deleteButton = document.createElement("button")

  deleteButton.id = String(med)
  deleteButton.className = "bwt"    
  deleteButton.innerHTML ="Delete"

  // append delete button in cell8
  cell8.appendChild(deleteButton) 
  deleteButton.onclick =  function(){
    deleteInstrument(med)
  }
  index += 1 
})     
  
display()

async function deleteInstrument(med){
  alert("You are going to delete " + med)
  await deleteDoc(doc(db,"Portfolio", med))
  console.log("Document successfully deleted!" , med);
  let tb = document.getElementById("table")
  while (tb.rows.length >1){
          tb.deleteRow(1)
        }
  display()
}
}

}
}
</script>


<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>

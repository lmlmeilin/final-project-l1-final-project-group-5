<template>
  <div style="text-align: center" class="notfound-page">
    <NavBar />
    <content>
      <h3>Page Not Found !!</h3>
      <h4>Please click on the above available options</h4>
    </content>
    <br />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

// import firebase from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "NotFound",

  components: {
    NavBar,
  },
};
</script>

<style scoped>
.notfound-page {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  color: #fff;
  overflow: hidden;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
</style>

import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyA357bafNfusms2SWTTpgiHOkQBgPDtCcw",
    authDomain: "pill-reminder-4a48e.firebaseapp.com",
    projectId: "pill-reminder-4a48e",
    storageBucket: "pill-reminder-4a48e.appspot.com",
    messagingSenderId: "822583173690",
    appId: "1:822583173690:web:72b3672ab1d0d7f24fcb03"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
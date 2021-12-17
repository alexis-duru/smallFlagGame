 // ---- IMPORTS & DECLARATIONS -------------------- //

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA1PbX-ny7_lpR0py_9qMe_2eNUoK8EJ8M',
  authDomain: 'masterclass-js.firebaseapp.com',
  projectId: 'masterclass-js',
  storageBucket: 'masterclass-js.appspot.com',
  messagingSenderId: '362235601879',
  appId: '1:362235601879:web:e25c5dc263ed499f3de192',
  measurementId: 'G-L3EZC951F6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getFirestore,
  doc,
  collection,
  updateDoc,
  getDocs,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';

const db = getFirestore();
getUsersDatasRealTime();
getFlagDatasRealTime()


  
  // ---- GET ALL DOCUMENTS IN LIVE DATAS -------------------- //

async function getUsersDatasRealTime() {
  const dbRef = collection(db, 'users');

  onSnapshot(dbRef, (querySnapshot) => {
    students = {};

    querySnapshot.forEach((doc) => {
      students = {
        ...students,
        [doc.id]: doc.data(),
      };
    //   console.log(students)
    });

    displayUsers();
  });
}

  // ---- UPDATE DATAS -------------------- //

// Upadte User
async function updateUserDatas(key, value, userId) {
    const dbRef = doc(db, 'users', userId);
  
    await updateDoc(dbRef, {
      [key]: value,
    })
      .then(() => {
        console.log('User Position Update');
      })
      .catch((error) => {
        console.log('Error : ' + error);
      });
  }
  export { updateUserDatas };

    // ---- GET FLAG POSITION -------------------- //

async function getFlagDatasRealTime() {
    const dbRef = collection(db, 'flag');
  
    onSnapshot(dbRef, (querySnapshot) => {
      flag = {};
      querySnapshot.forEach((doc) => {
        flag = doc.data()
      });
      displayFlag();
    });
}

// AFFICHAGE DU SCORE // 
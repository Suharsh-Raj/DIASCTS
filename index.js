// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0s3Zj1ufQxoEiH7apbmZelgSWS-I3SLA",
  authDomain: "diascts-login.firebaseapp.com",
  projectId: "diascts-login",
  storageBucket: "diascts-login.firebasestorage.app",
  messagingSenderId: "666287751983",
  appId: "1:666287751983:web:d93cfdf7d801dc26aa17da",
  measurementId: "G-HHXB6BYK5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      });

  });

});;

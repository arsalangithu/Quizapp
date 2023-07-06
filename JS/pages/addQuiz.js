
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDsmWoQzdGpeA6B0Pd32jOe4Dgwr6JinZc",
    authDomain: "quiz-app-7080d.firebaseapp.com",
    projectId: "quiz-app-7080d",
    storageBucket: "quiz-app-7080d.appspot.com",
    messagingSenderId: "735005355326",
    appId: "1:735005355326:web:5b6d83c50845730a3a106f",
    measurementId: "G-X9616YDBLV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

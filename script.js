
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBD-9_hIP_llulDWezD84amey1lekmnyhs",
    authDomain: "authentication-app-21e09.firebaseapp.com",
    projectId: "authentication-app-21e09",
    storageBucket: "authentication-app-21e09.appspot.com",
    messagingSenderId: "674004522139",
    appId: "1:674004522139:web:1fb12e92a379d8ad22e23e"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();


//firebase signup authentication

  signupBtn.addEventListener('click',(e) => {

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
   alert('user created!');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('error msg');

  });
  })

  //firebase signin authentication

  signinBtn.addEventListener('click', (e) =>{

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;

    alert("user signin!");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    alert("error msg!");
  });
  })


signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

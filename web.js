import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
const registerform = document.querySelector('#registerForm');
const firebaseConfig = {
    apiKey: "AIzaSyBpDuzaK1ZICKh-mcDmCvJAs9mevJ9fe7k",
    authDomain: "math-web-ad977.firebaseapp.com",
    databaseURL: "https://math-web-ad977-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "math-web-ad977",
    storageBucket: "math-web-ad977.firebasestorage.app",
    messagingSenderId: "397297370684",
    appId: "1:397297370684:web:372f7e1918cf7aa2c56539"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");
registerform.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // get register infor
    const registeruser = registerform.registeruser.value.trim();
    const registeremail = registerform.registeremail.value.trim();
    const registerpass = registerform.registerpass.value.trim();

    // make sure not null
    if (registeruser && registeremail && registerpass) {
        addDoc(collection(db, "users"), {
            registeruser: registeruser,
            registeremail: registeremail,
            registerpass: registerpass
        })
        .then(() => {
            console.log("Data added successfully!");
            registerform.reset();
        })
        .catch((error) => {
            console.error("Error adding data: ", error);
        });
    } else {
        console.error("All fields are required!");
    }
});


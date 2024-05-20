const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyDMvshvjpAT2Di9qMOe1lc1iVCP1Q--fgM",
  authDomain: "wqms-81d27.firebaseapp.com",
  databaseURL: "https://wqms-81d27-default-rtdb.firebaseio.com",
  projectId: "wqms-81d27",
  storageBucket: "wqms-81d27.appspot.com",
  messagingSenderId: "49969250289",
  appId: "1:49969250289:web:b490ce775fb2435dbe4e50",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// getting reference to the database
const database = firebase.database();

//getting reference to the data we want
const dataSuhu = database.ref("WQMS/suhu");
const dataPh = database.ref("WQMS/ph");
const dataKekeruhan = database.ref("WQMS/kekeruhan");
const dataTds = database.ref("WQMS/tds");

//fetch the data
dataSuhu.on("value", function (getdata) {
  const suhuVal = getdata.val();


  document.getElementById("temp").innerHTML = suhuVal + "&#8451;";
  // console.log(suhuVal)
  const bgSuhu = document.getElementById('suhu')
  if (suhuVal < 0) {
    console.log(bgSuhu);
    bgSuhu.style.backgroundColor = "#fd3d60"
  }
  else {

  }

});


dataPh.on("value", function (getdata1) {
  const phVal = getdata1.val();
  // const phVal = 11;
  document.getElementById("phVal").innerHTML = phVal;

  const bgPh = document.getElementById('ph')
  if (phVal < 3) {
    bgPh.style.backgroundColor = 'red'
  }
  else if (phVal > 3 && phVal < 6) {
    bgPh.style.backgroundColor = 'orange'

  }
  else if (phVal > 6 && phVal < 8) {
    bgPh.style.backgroundColor = 'green'

  }
  else if (phVal > 8 && phVal < 10) {
    bgPh.style.backgroundColor = 'blue'

  } else {
    bgPh.style.backgroundColor = 'indigo'

  }
});

dataTds.on("value", function (getdata1) {
  const tdsVal = getdata1.val();
  document.getElementById("tdsVal").innerHTML = tdsVal + " PPM";

  // const bgTds = document.getElementById(tds)

});

dataKekeruhan.on("value", function (getdata1) {
  const kekeruhanVal = getdata1.val();
  document.getElementById("kekeruhanVal").innerHTML = kekeruhanVal + " NTU";

  // const bgKekeruhan = document.getElementById('kekeruhan');


});
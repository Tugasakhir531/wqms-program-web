const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});




// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration here (Do not use the existing configuration)
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
const suhuValue = database.ref("WQMS/suhu");
const phValue = database.ref("WQMS/ph");
const kekeruhanValue = database.ref("WQMS/kekeruhan");
const tdsValue = database.ref("WQMS/tds");


let suhu;

suhuValue.on("value", function (getdata1) {
  suhu = getdata1.val();
  console.log(suhu);

  const dataSuhu = {
    labels: [0],
    datasets: [
      {
        label: "Suhu",
        data: [0],
        borderColor: "rgb(253, 61, 96)",
        lineTension: 0.5,
        backgroundColor: "#FD3D60",
      }
    ],
  };

  const configSuhu = {
    type: "line",
    data: dataSuhu,
    options: {
      scales: {
        y: {
          min: 0,
          max: 100
        }
      }
    }
  };

  let myChartSuhu = new Chart(
    document.getElementById("myChartSuhu"),
    configSuhu
  );

  window.setInterval(myCallback, 2000);

  function myCallback() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const now = `${hours}:${minutes}:${seconds}`;
    let x = Math.floor((Math.random() * 100) + 1);
    if (dataSuhu.datasets[0].data.length >= 10) {
      dataSuhu.labels.shift();
      dataSuhu.datasets[0].data.shift();
    }
    dataSuhu.labels.push(now);
    dataSuhu.datasets[0].data.push(suhu);

    myChartSuhu.update();
  }




});

let ph;

phValue.on("value", function (getdata1) {
  ph = getdata1.val();
  // document.getElementById("ph").innerHTML = ph;
  console.log(ph);

  const dataPh = {
    labels: [0],
    datasets: [
      {
        label: "pH",
        data: [0],
        borderColor: "#3e68ff",
        lineTension: 0.5,
        backgroundColor: "#3e68ff",
      },
    ],

  };

  const configPh = {
    type: "line",
    data: dataPh,
    options: {
      scales: {
        y: {
          min: 0,
          max: 14
        }
      }
    }
  };


  const myChartPh = new Chart(document.getElementById("myChartPh"), configPh);

  window.setInterval(myCallback2, 2000);
  function myCallback2() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const now = `${hours}:${minutes}:${seconds}`;
    let x = Math.floor((Math.random() * 100) + 1);
    if (dataPh.datasets[0].data.length >= 10) {
      dataPh.labels.shift();
      dataPh.datasets[0].data.shift();
    }
    dataPh.labels.push(now);
    dataPh.datasets[0].data.push(ph);

    myChartPh.update();
  }




});

// Tds
let tds;
tdsValue.on("value", function (getdata) {
  tds = getdata.val();
  console.log(tds)
  // Tds
  const dataTds = {
    labels: [],
    datasets: [
      {
        label: "TDS",
        data: [0],
        borderColor: " #2ae48b",
        lineTension: 0.5,
        backgroundColor: " #2ae48b",
      },
    ],
  };

  const configTds = {
    type: "line",
    data: dataTds,
    options: {
      scales: {
        y: {
          min: 0,
          max: 1000
        }
      }
    }
  };

  const myChartTds = new Chart(document.getElementById("myChartTds"), configTds);

  window.setInterval(myCallback3, 2000);
  function myCallback3() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const now = `${hours}:${minutes}:${seconds}`;
    let x = Math.floor((Math.random() * 100) + 1);
    if (dataTds.datasets[0].data.length >= 10) {
      dataTds.labels.shift();
      dataTds.datasets[0].data.shift();
    }
    dataTds.labels.push(now);
    dataTds.datasets[0].data.push(tds);

    myChartTds.update();
  }

})


let kekeruhan;
kekeruhanValue.on("value", function (getdata1) {
  kekeruhan = getdata1.val();
  console.log(kekeruhan);

  const dataNtu = {
    labels: [],
    datasets: [
      {
        label: "Kekeruhan",
        data: [0],
        borderColor: "#fdb62c",
        lineTension: 0.5,
        backgroundColor: "#fdb62c",
      },
    ],
  };

  const configNtu = {
    type: "line",
    data: dataNtu,
    options: {
      scales: {
        y: {
          min: 0,
          max: 3000
        }
      }
    }
  };

  const myChartNtu = new Chart(document.getElementById("myChartNtu"), configNtu);

  function myCallback4() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const now = `${hours}:${minutes}:${seconds}`;
    let x = Math.floor((Math.random() * 100) + 1);
    if (dataNtu.datasets[0].data.length >= 10) {
      dataNtu.labels.shift();
      dataNtu.datasets[0].data.shift();
    }
    dataNtu.labels.push(now);
    dataNtu.datasets[0].data.push(kekeruhan);

    myChartNtu.update();
  }

  window.setInterval(myCallback4, 2000);
})

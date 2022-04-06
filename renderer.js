// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.querySelector("button").addEventListener("click", function () {
  html2canvas(document.querySelector(".wrapper"), {
    onrendered: function (canvas) {
      // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    },
  });
});

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//in the sense of using a 24hr clock
let hours = new Date().getHours();
let min = new Date().getMinutes();
if (11.5 > 11) {
  console.log("it is PM");
} else {
  console.log("it is AM");
}

const d = new Date();
let name = month[d.getMonth()];
document.getElementById("header_month").innerHTML = `Current Month: ${name}`;

document.getElementById("header_date").innerHTML = ` ${today}`;

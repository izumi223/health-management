// localStorage.clear();

//name
let name = document.getElementById("name");
//reset
const reset = document.getElementById("reset");
//data
let data = document.getElementById("data");
//form submit
let form = document.getElementById("form");
//weight input
let weight = document.getElementById("weight");
//water input
let water = document.getElementById("water");
//steps input
let steps = document.getElementById("steps");
//div todaysRecord
const record = document.getElementById("todaysRecord");
//show weight
let showWeight = document.getElementById("showWeight");
//show water
let showWater = document.getElementById("shoWater");
//show steps
let showSteps = document.getElementById("showSteps");
// weight list
let weightDetails = document.getElementById("weightDetails");
// water list
let waterDetails = document.getElementById("waterDetails");
// steps List
let stepsDetails = document.getElementById("stepsDetails");
//chart
let ctx = document.getElementById("myChart").getContext("2d");

// // name display
// let result = prompt('Hello :) Type your name');
// name.textContent = result;
// localStorage.setItem('name', name.textContent);

// date
let dt = new Date();
let month = dt.getMonth() + 1;
let date = dt.getDate();
let day = dt.getDay();
let dow = new Array("Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat");
data.innerHTML = `${date} / ${month} / ${dow[day]}`;

//eventListener
form.addEventListener("submit", showItem);
// form.addEventListener('submit', weekItem);
document.addEventListener("DOMContentLoaded", getItem);
reset.addEventListener("click", reloadItems);

function showItem(event) {
  event.preventDefault();

  let weightValue = `<span>${weight.value}Kg</span>`;
  showWeight.innerHTML = weightValue;
  localStorage.setItem("weight", showWeight.innerHTML);

  let weightCheck = `<li>${weight.value}</li>`;
  weightDetails.innerHTML += weightCheck;
  localStorage.setItem("weightDetails", weightDetails.innerHTML);
  weight.value = "";

  let waterValue = `<span>${water.value}Ml</span>`;
  showWater.innerHTML = waterValue;
  localStorage.setItem("water", showWater.innerHTML);

  let waterCheck = `<li>${water.value}</li>`;
  waterDetails.innerHTML += waterCheck;
  localStorage.setItem("waterDetails", waterDetails.innerHTML); water.value = "";
  
  let stepsValue = `<span>${steps.value}Steps</span>`;
  showSteps.innerHTML = stepsValue;
  localStorage.setItem("steps", showSteps.innerHTML);

  let stepsCheck = `<li>${steps.value}</li>`;
  stepsDetails.innerHTML += stepsCheck;
  localStorage.setItem("stepsDetails", stepsDetails.innerHTML);   steps.value = "";

}

//for localStorage
let stepItem = localStorage.getItem("steps");
let stepItem2 = localStorage.getItem("stepsDetails");
let weightItem = localStorage.getItem("weight");
let weightItem2 = localStorage.getItem("weightDetails");
let waterItem = localStorage.getItem("water");
let waterItem2 = localStorage.getItem("waterDetails");

//localStorage
function getItem() {
  if (stepItem === null) {
    stepItem = "";
  }
  if (stepItem2 === null) {
    stepItem2 = "";
  }
  if (weightItem === null) {
    weightItem = "";
  }
  if (weightItem2 === null) {
    weightItem2 = "";
  }
  if (waterItem === null) {
    waterItem = "";
  }
  if (waterItem2 === null) {
    waterItem2 = "";
  }

  showWeight.innerHTML = weightItem;
  weightDetails.innerHTML = weightItem2;
  showWater.innerHTML = waterItem;
  waterDetails.innerHTML = waterItem2;
  showSteps.innerHTML = stepItem;
  stepsDetails.innerHTML = stepItem2;

  // Get the child nodes of water, steps, and weight lists
  let waterValues = Array.from(waterDetails.childNodes).map(function (item) {
    return parseFloat(item.innerHTML);
  });

  let weightValues = Array.from(weightDetails.childNodes).map(function (item) {
    return parseFloat(item.innerHTML);
  });

  let stepsValues = Array.from(stepsDetails.childNodes).map(function (item) {
    return parseFloat(item.innerHTML);
  });

  //chart
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: weightValues,
          label: "Weight",
          borderColor: "rgba(28, 141, 137, 0.44)",
          fill: false,
        },
        {
          data: waterValues,
          label: "Water",
          borderColor: "rgba(141, 28, 124, 0.55)",
          fill: false,
        },
        {
          data: stepsValues,
          label: "Steps",
          borderColor: "rgba(141, 137, 28, 0.67)",
          fill: false,
        },
      ],
    },
  });
}

//reset
function reloadItems() {
  location.reload();
  localStorage.clear();
}

let count = 1;
function getInputFieldValuById(elementId) {
  const elementeValue = document.getElementById(elementId);
  const value = parseInt(elementeValue.value);
  return value;
}

function setElementFieldValueById(elemenId, value) {
  const getElementField = document.getElementById(elemenId);
  getElementField.innerText = value;
}

function setElementValueById(element, value) {
  const nameList = document.getElementById(element);
  const p = document.createElement("p");
  p.innerText = count + " . " + value;
  p.style.fontSize = "20px";
  nameList.appendChild(p);
  count++;
  return count;
}

const elements = document.querySelectorAll(".btn-select");
for (const names of elements) {
  let parentElements = names.parentNode;
  const name = parentElements.firstElementChild.innerText;
  names.addEventListener("click", function (event) {
    names.setAttribute("disabled", true);
    if (count === 6) {
      alert("You can not select more than 5 players");
      return;
    }
    setElementValueById("selected", name);
  });
}

// const elements = document.getElementsByClassName("btn-select");
// for (let i = 0; i < 6; i++) {
//   let parentElements = elements[i].parentNode;
//   const name = parentElements.firstElementChild.innerText;
//   elements[i].addEventListener("click", function () {
//     elements[i].setAttribute("disabled", "");
//     if (count === 6) {
//       alert("You can not select more than 5 players");
//       return;
//     }
//     setElementValueById("selected", name);
//   });
// }

// calculation part
document.getElementById("calculate").addEventListener("click", function () {
  const eachPlayerPrice = getInputFieldValuById("player-price");
  const selectedPlayers = document.getElementById("selected");
  const players = selectedPlayers.children.length - 1;
  const playersPrieces = eachPlayerPrice * players;
  setElementFieldValueById("players-price", playersPrieces);
});

// total calculation

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const playersPricesElement = document.getElementById("players-price");
    const playersPrices = parseInt(playersPricesElement.innerText);
    const managerPrice = getInputFieldValuById("manager-price");
    const coachPrice = getInputFieldValuById("coach-price");
    const totalPrice = playersPrices + managerPrice + coachPrice;
    setElementFieldValueById("total-price", totalPrice);
  });

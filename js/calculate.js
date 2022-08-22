let count = 1;
// function getElementValuById(name) {
//   const elemente = document.getElementById(name);
//   const Name = elemente;
//   return Name;
// }
function setElementValueById(element, value) {
  const nameList = document.getElementById(element);
  const p = document.createElement("p");
  p.innerText = count + " . " + value;
  p.style.fontSize = "20px";
  nameList.appendChild(p);
  count++;
  return count;
}

// document.getElementById("btn-1").addEventListener("click", function () {
//   const name = getElementValuById("name-1");
//   name.disabled = true;
//   // console.log(name);
//   setElementValueById("selected", name);
// });

const elements = document.querySelectorAll(".btn-select");

for (const names of elements) {
  let parentElements = names.parentNode;
  const name = parentElements.firstElementChild.innerText;
  names.addEventListener("click", function (value) {
    const selectButton = value.target.innerText;
    if (count === 6) {
      alert("You can not select more than 5 players");
      return;
    }
    setElementValueById("selected", name);
  });
}

// calculation part
document.getElementById("calculate").addEventListener("click", function () {
  const eachPlayerPriceElement = document.getElementById("player-price");
  const eachPlayerPrice = parseInt(eachPlayerPriceElement.value);
  const selectedPlayers = document.getElementById("selected");
  const players = selectedPlayers.children.length - 1;
  const playersPrieces = eachPlayerPrice * players;
  const playersPricesElement = document.getElementById("players-price");
  playersPricesElement.innerText = playersPrieces;
});

// total calculation

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const playersPricesElement = document.getElementById("players-price");
    const playersPrices = parseInt(playersPricesElement.innerText);
    const managerPriceElement = document.getElementById("manager-price");
    const managerPrice = parseInt(managerPriceElement.value);
    const coachPriceElement = document.getElementById("coach-price");
    const coachPrice = parseInt(coachPriceElement.value);
    const totalPrice = playersPrices + managerPrice + coachPrice;

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = totalPrice;
    // console.log(totalPrice);
  });

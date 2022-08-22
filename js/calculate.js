let count = 1;

function getElementValuById(name) {
  const elemente = document.getElementById(name);
  const Name = elemente;
  return Name;
}
function setElementValueById(element, value) {
  const nameList = document.getElementById(element);
  const p = document.createElement("p");
  p.innerText = count + " . " + value;
  p.style.fontSize = "20px";
  nameList.appendChild(p);
  count++;
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
    console.log(selectButton);
    if (count === 6) {
      alert("You can not select more than 5 players");
      return;
    }
    setElementValueById("selected", name);
  });
}

// calculation part

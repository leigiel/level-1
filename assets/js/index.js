let selectedPlayers = [];
const selectedPlayersList = document.getElementById("selectedPlayers");


function addSelectedList() {
  selectedPlayersList.innerText = "";
  for (let i = 0; i < selectedPlayers.length; i++) {
    const li = document.createElement("li");
    li.innerText = i + 1 + ". " + selectedPlayers[i]; 
    selectedPlayersList.appendChild(li);
  }
}


// player select kore button disable kora and max 5 alert
const selectBtns = document.getElementsByClassName("select-player");
const maxPlayers = 5;

for (const button of selectBtns) {
  button.addEventListener("click", function () {
    if (selectedPlayers.length >= maxPlayers) {
      alert("You can only select a maximum of 5 players.");
      return;
    }
    const playerName = button.parentElement.previousElementSibling.querySelector("h2").innerText;
    selectedPlayers.push(playerName);
    addSelectedList();

    button.disabled = true;
    button.classList.add("bg-gray-400", "disabled-button");
  });
}


// per player total hisheb
const totalPlayerCostTxt = document.getElementById("totalPlyrCost");
const playerCostInput = document.getElementById("playerCost");
document.getElementById("CalcPlyrCost").addEventListener("click", function () {
  const playerCost = parseInt(playerCostInput.value) || 0;
  const totalPlayerCost = playerCost * selectedPlayers.length;
  totalPlayerCostTxt.innerText = totalPlayerCost;
});

// total hisheb
const totalCostTxt = document.getElementById("totalCost");
const managerCostInput = document.getElementById("managerCost");
const coachCostInput = document.getElementById("coachCost");
document.getElementById("totalCalc").addEventListener("click", function () {
  const playerCost = parseInt(playerCostInput.value) || 0;
  const managerCost = parseInt(managerCostInput.value) || 0;
  const coachCost = parseInt(coachCostInput.value) || 0;
  const totalPlayerCost = playerCost * selectedPlayers.length;
  const totalCost = totalPlayerCost + managerCost + coachCost;
  totalCostTxt.innerText = totalCost; 
});

function playCollectItem() {
  if(localStorage.getItem("foodStyle") === "imgMeow" || localStorage.getItem("foodStyle") === "imgGold" || localStorage.getItem("foodStyle") === "imgAlphacoin" || localStorage.getItem("foodStyle") === "imgCrystal" || localStorage.getItem("foodStyle") === "imgTicket" || localStorage.getItem("foodStyle") === "imgCticket" || localStorage.getItem("foodStyle") === "imgPticket") {
    document.getElementById("itemCollected").muted = false;
    document.getElementById("itemCollected").play();
  }
};
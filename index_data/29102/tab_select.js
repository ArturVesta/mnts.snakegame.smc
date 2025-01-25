function selectionSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("selectionSound").muted = true;
  }else{
    document.getElementById("selectionSound").muted = false;
  }
  document.getElementById("selectionSound").currentTime = 0;
  document.getElementById("selectionSound").play();
}
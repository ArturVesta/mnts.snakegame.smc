function closeModalSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("closeModalSound").muted = true;
  }else{
    document.getElementById("closeModalSound").muted = false;
  }
  document.getElementById("closeModalSound").currentTime = 0;
  document.getElementById("closeModalSound").play();
}
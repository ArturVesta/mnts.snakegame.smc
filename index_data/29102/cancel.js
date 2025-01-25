function cancelSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("cancelSound").muted = true;
  }else{
    document.getElementById("cancelSound").muted = false;
  }
  document.getElementById("cancelSound").currentTime = 0;
  document.getElementById("cancelSound").play();
}
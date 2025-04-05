function closeSettingsSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("closeSettingsSound").muted = true;
  }else{
    document.getElementById("closeSettingsSound").muted = false;
  }
  document.getElementById("closeSettingsSound").currentTime = 0;
  document.getElementById("closeSettingsSound").play();
}
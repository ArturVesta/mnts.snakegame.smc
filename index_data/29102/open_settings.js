function openSettingsSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("openSettingsSound").muted = true;
  }else{
    document.getElementById("openSettingsSound").muted = false;
  }
  document.getElementById("openSettingsSound").currentTime = 0;
  document.getElementById("openSettingsSound").play();
}
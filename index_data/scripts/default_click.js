function defaultClickSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("defaultClickSound").muted = true;
  }else{
    document.getElementById("defaultClickSound").muted = false;
  }
  document.getElementById("defaultClickSound").currentTime = 0;
  document.getElementById("defaultClickSound").play();
}
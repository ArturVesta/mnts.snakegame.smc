function playActiveMoveSound() {
  if(document.getElementById("checkBaseVolum").checked === true) {
    if(localStorage.getItem("movementbg") === "playerWalk") {
      document.getElementById("playerWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "alboradaWalk") {
      document.getElementById("alboradaWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "andromedaWalk") {
      document.getElementById("andromedaWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "arthurWalk") {
      document.getElementById("arthurWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "auroraWalk") {
      document.getElementById("auroraWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "boltusWalk") {
      document.getElementById("boltusWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "caramelWalk") {
      document.getElementById("caramelWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "doomlightlWalk") {
      document.getElementById("doomlightlWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "firefoxWalk") {
      document.getElementById("firefoxWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "firestarWalk") {
      document.getElementById("firestarWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "flamencoWalk") {
      document.getElementById("flamencoWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "gabrielWalk") {
      document.getElementById("gabrielWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "hotsteelWalk") {
      document.getElementById("hotsteelWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "hurricaneWalk") {
      document.getElementById("hurricaneWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "jojoWalk") {
      document.getElementById("jojoWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "michaelWalk") {
      document.getElementById("michaelWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "neutronWalk") {
      document.getElementById("neutronWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "northernWalk") {
      document.getElementById("northernWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "pulsarWalk") {
      document.getElementById("pulsarWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "rangerWalk") {
      document.getElementById("rangerWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "ravenWalk") {
      document.getElementById("ravenWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "skylarkWalk") {
      document.getElementById("skylarkWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "snowWalk") {
      document.getElementById("snowWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "trioWalk") {
      document.getElementById("trioWalk").muted = true;
    }else
    if(localStorage.getItem("movementbg") === "ventorusWalk") {
      document.getElementById("ventorusWalk").muted = true;
    }
  }else{
    if(velocityX === 0 && velocityY === 0) {
      return false;
    }else{
      if(localStorage.getItem("movementbg") === "playerWalk") {
        document.getElementById("playerWalk").muted = false;
        document.getElementById("playerWalk").currentTime = 0;
        document.getElementById("playerWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "alboradaWalk") {
        document.getElementById("alboradaWalk").muted = false;
        document.getElementById("alboradaWalk").currentTime = 0;
        document.getElementById("alboradaWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "andromedaWalk") {
        document.getElementById("andromedaWalk").muted = false;
        document.getElementById("andromedaWalk").currentTime = 0;
        document.getElementById("andromedaWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "arthurWalk") {
        document.getElementById("arthurWalk").muted = false;
        document.getElementById("arthurWalk").currentTime = 0;
        document.getElementById("arthurWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "auroraWalk") {
        document.getElementById("auroraWalk").muted = false;
        document.getElementById("auroraWalk").currentTime = 0;
        document.getElementById("auroraWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "boltusWalk") {
        document.getElementById("boltusWalk").muted = false;
        document.getElementById("boltusWalk").currentTime = 0;
        document.getElementById("boltusWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "caramelWalk") {
        document.getElementById("caramelWalk").muted = false;
        document.getElementById("caramelWalk").currentTime = 0;
        document.getElementById("caramelWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "doomlightlWalk") {
        document.getElementById("doomlightlWalk").muted = false;
        document.getElementById("doomlightlWalk").currentTime = 0;
        document.getElementById("doomlightlWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "firefoxWalk") {
        document.getElementById("firefoxWalk").muted = false;
        document.getElementById("firefoxWalk").currentTime = 0;
        document.getElementById("firefoxWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "firestarWalk") {
        document.getElementById("firestarWalk").muted = false;
        document.getElementById("firestarWalk").currentTime = 0;
        document.getElementById("firestarWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "flamencoWalk") {
        document.getElementById("flamencoWalk").muted = false;
        document.getElementById("flamencoWalk").currentTime = 0;
        document.getElementById("flamencoWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "gabrielWalk") {
        document.getElementById("gabrielWalk").muted = false;
        document.getElementById("gabrielWalk").currentTime = 0;
        document.getElementById("gabrielWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "hotsteelWalk") {
        document.getElementById("hotsteelWalk").muted = false;
        document.getElementById("hotsteelWalk").currentTime = 0;
        document.getElementById("hotsteelWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "hurricaneWalk") {
        document.getElementById("hurricaneWalk").muted = false;
        document.getElementById("hurricaneWalk").currentTime = 0;
        document.getElementById("hurricaneWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "jojoWalk") {
        document.getElementById("jojoWalk").muted = false;
        document.getElementById("jojoWalk").currentTime = 0;
        document.getElementById("jojoWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "michaelWalk") {
        document.getElementById("michaelWalk").muted = false;
        document.getElementById("michaelWalk").currentTime = 0;
        document.getElementById("michaelWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "neutronWalk") {
        document.getElementById("neutronWalk").muted = false;
        document.getElementById("neutronWalk").currentTime = 0;
        document.getElementById("neutronWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "northernWalk") {
        document.getElementById("northernWalk").muted = false;
        document.getElementById("northernWalk").currentTime = 0;
        document.getElementById("northernWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "pulsarWalk") {
        document.getElementById("pulsarWalk").muted = false;
        document.getElementById("pulsarWalk").currentTime = 0;
        document.getElementById("pulsarWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "rangerWalk") {
        document.getElementById("rangerWalk").muted = false;
        document.getElementById("rangerWalk").currentTime = 0;
        document.getElementById("rangerWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "ravenWalk") {
        document.getElementById("ravenWalk").muted = false;
        document.getElementById("ravenWalk").currentTime = 0;
        document.getElementById("ravenWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "skylarkWalk") {
        document.getElementById("skylarkWalk").muted = false;
        document.getElementById("skylarkWalk").currentTime = 0;
        document.getElementById("skylarkWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "snowWalk") {
        document.getElementById("snowWalk").muted = false;
        document.getElementById("snowWalk").currentTime = 0;
        document.getElementById("snowWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "trioWalk") {
        document.getElementById("trioWalk").muted = false;
        document.getElementById("trioWalk").currentTime = 0;
        document.getElementById("trioWalk").play();
      }else
      if(localStorage.getItem("movementbg") === "ventorusWalk") {
        document.getElementById("ventorusWalk").muted = false;
        document.getElementById("ventorusWalk").currentTime = 0;
        document.getElementById("ventorusWalk").play();
      }
    }
  }
};
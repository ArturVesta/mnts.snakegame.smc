function loadMusicPlay() {
  if(localStorage.getItem("musicbg") === "sauMusic") {
    document.getElementById("msAlang").classList.add("activet");
    document.getElementById("musicAbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "afMusic") {
    document.getElementById("msBlang").classList.add("activet");
    document.getElementById("musicBbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "atdaMusic") {
    document.getElementById("msClang").classList.add("activet");
    document.getElementById("musicCbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "atdMusic") {
    document.getElementById("msDlang").classList.add("activet");
    document.getElementById("musicDbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "aonevMusic") {
    document.getElementById("msElang").classList.add("activet");
    document.getElementById("musicEbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "aonMusic") {
    document.getElementById("msFlang").classList.add("activet");
    document.getElementById("musicFbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "bjMusic") {
    document.getElementById("msGlang").classList.add("activet");
    document.getElementById("musicGbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "btsMusic") {
    document.getElementById("msHlang").classList.add("activet");
    document.getElementById("musicHbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "dmMusic") {
    document.getElementById("msIlang").classList.add("activet");
    document.getElementById("musicIbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "ehMusic") {
    document.getElementById("msJlang").classList.add("activet");
    document.getElementById("musicJbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "fMusic") {
    document.getElementById("msKlang").classList.add("activet");
    document.getElementById("musicKbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "fbMusic") {
    document.getElementById("msLlang").classList.add("activet");
    document.getElementById("musicLbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "imMusic") {
    document.getElementById("msMlang").classList.add("activet");
    document.getElementById("musicMbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "jpMusic") {
    document.getElementById("msNlang").classList.add("activet");
    document.getElementById("musicNbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "lMusic") {
    document.getElementById("msOlang").classList.add("activet");
    document.getElementById("musicObgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "nnMusic") {
    document.getElementById("msPlang").classList.add("activet");
    document.getElementById("musicPbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "powMusic") {
    document.getElementById("msQlang").classList.add("activet");
    document.getElementById("musicQbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "pbMusic") {
    document.getElementById("msRlang").classList.add("activet");
    document.getElementById("musicRbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "smcm22Music") {
    document.getElementById("msSlang").classList.add("activet");
    document.getElementById("musicSbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "smcm23Music") {
    document.getElementById("msTlang").classList.add("activet");
    document.getElementById("musicTbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "tbMusic") {
    document.getElementById("msUlang").classList.add("activet");
    document.getElementById("musicUbgSound").play();
  }else
  if(localStorage.getItem("musicbg") === "ubfMusic") {
    document.getElementById("msVlang").classList.add("activet");
    document.getElementById("musicVbgSound").play();
  }
};
function musicBackground() {
  var musiccheckbox = document.getElementById("checkMusicMute");
  var basecheckbox = document.getElementById("checkBaseVolum");
  const audio = document.getElementsByClassName("music-background");
  if(musiccheckbox.checked === true && basecheckbox.checked === true) {
    for (var i=0; i<audio.length; i++) {
      audio[i].muted = true;
      audio[i].pause();
    }
  }else
  if(musiccheckbox.checked === false && basecheckbox.checked === true) {
    for (var i=0; i<audio.length; i++) {
      audio[i].muted = true;
      audio[i].pause();
    }
  }else
  if(musiccheckbox.checked === true && basecheckbox.checked === false) {
    for (var i=0; i<audio.length; i++) {
      audio[i].muted = false;
    }
    loadMusicPlay();
  }else
  if(musiccheckbox.checked === false && basecheckbox.checked === false) {
    for (var i=0; i<audio.length; i++) {
      audio[i].muted = true;
      audio[i].pause();
    }
  }
};
function baseMusicVolum() {
  var checkbox = document.getElementById("checkMusicMute");
  if(checkbox.checked === true) {
    localStorage.setItem("musicPlay", "true");
  }else{
    localStorage.setItem("musicPlay", "false");
  }
};
function checkBaseMusicVolum() {
  var checkbox = document.getElementById("checkMusicMute");
  if(localStorage.getItem("musicPlay") === "true") {
    checkbox.checked = true;
  }else{
    checkbox.checked = false;
  }
};
checkBaseMusicVolum();
function musicVolume() {
  var input = document.getElementById("musicvolume");
  const audio = document.getElementsByClassName("music-background");
  for (var i=0; i<audio.length; i++) {
    audio[i].volume = input.value;
  }
  localStorage.setItem("musicvolumedata", input.value);
};
function checkMusicVolume() {
  var input = document.getElementById("musicvolume");
  const audio = document.getElementsByClassName("music-background");
  input.value = localStorage.getItem("musicvolumedata");
  for (var i=0; i<audio.length; i++) {
    audio[i].volume = input.value;
  }
};
checkMusicVolume();
function baseVolum() {
  var checkbox = document.getElementById("checkBaseVolum");
  if(checkbox.checked === true) {
    localStorage.setItem("audioPlay", "true");
  }else{
    localStorage.setItem("audioPlay", "false");
  }
};
function checkBaseVolum() {
  var checkbox = document.getElementById("checkBaseVolum");
  if(localStorage.getItem("audioPlay") === "true") {
    checkbox.checked = true;
  }else{
    checkbox.checked = false;
  }
};
checkBaseVolum();
function sFxVolume() {
  var input = document.getElementById("sfxvolume");
  var audio0 = document.getElementById("defaultClickSound");
  var audio1 = document.getElementById("closeSettingsSound");
  var audio2 = document.getElementById("cancelSound");
  var audio3 = document.getElementById("openSettingsSound");
  var audio4 = document.getElementById("selectionSound");
  const audiow0 = document.getElementsByClassName("walk-background");
  localStorage.setItem("sfxvolumedata", input.value);
  audio0.volume = input.value;
  audio1.volume = input.value;
  audio2.volume = input.value;
  audio3.volume = input.value;
  audio4.volume = input.value;
  for (let i = 0; i < audiow0.length; i++) {
    audiow0.volume = input.value;
  }
};
function checkSfXvolume() {
  var input = document.getElementById("sfxvolume");
  var audio0 = document.getElementById("defaultClickSound");
  var audio1 = document.getElementById("closeSettingsSound");
  var audio2 = document.getElementById("cancelSound");
  var audio3 = document.getElementById("openSettingsSound");
  var audio4 = document.getElementById("selectionSound");
  const audiow0 = document.getElementsByClassName("walk-background");
  input.value = localStorage.getItem("sfxvolumedata");
  audio0.volume = input.value;
  audio1.volume = input.value;
  audio2.volume = input.value;
  audio3.volume = input.value;
  audio4.volume = input.value;
  for (let i = 0; i < audiow0.length; i++) {
    audiow0.volume = input.value;
  }
};
checkSfXvolume();
function snake1Load() {
  document.getElementById("snakeOne").classList.add("activet");
  document.getElementById("snakeTwo").classList.remove("activet");
  document.getElementById("snakeThree").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function snake2Load() {
  document.getElementById("snakeOne").classList.remove("activet");
  document.getElementById("snakeTwo").classList.add("activet");
  document.getElementById("snakeThree").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function snake3Load() {
  document.getElementById("snakeOne").classList.remove("activet");
  document.getElementById("snakeTwo").classList.remove("activet");
  document.getElementById("snakeThree").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function snakeBGloader() {
  if(localStorage.getItem("snakeStyle") === "imgSnakeOne") {
    document.getElementById("snakeOne").classList.add("activet");
    document.getElementById("snakeTwo").classList.remove("activet");
    document.getElementById("snakeThree").classList.remove("activet");
    localStorage.setItem("number","one");
  }else
  if(localStorage.getItem("snakeStyle") === "imgSnakeTwo") {
    document.getElementById("snakeOne").classList.remove("activet");
    document.getElementById("snakeTwo").classList.add("activet");
    document.getElementById("snakeThree").classList.remove("activet");
    localStorage.setItem("number","two");
  }else
  if(localStorage.getItem("snakeStyle") === "imgSnakeThree") {
    document.getElementById("snakeOne").classList.remove("activet");
    document.getElementById("snakeTwo").classList.remove("activet");
    document.getElementById("snakeThree").classList.add("activet");
    localStorage.setItem("number","three");
  }
};
snakeBGloader();
function normalDifLoad() {
  document.getElementById("normalDif").classList.add("activet");
  document.getElementById("hardDif").classList.remove("activet");
  document.getElementById("hellDif").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function hardDifLoad() {
  document.getElementById("normalDif").classList.remove("activet");
  document.getElementById("hardDif").classList.add("activet");
  document.getElementById("hellDif").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function hellDifLoad() {
  document.getElementById("normalDif").classList.remove("activet");
  document.getElementById("hardDif").classList.remove("activet");
  document.getElementById("hellDif").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function difficultyLoader() {
  if(localStorage.getItem("difficulty") === "normal") {
  document.getElementById("normalDif").classList.add("activet");
  document.getElementById("hardDif").classList.remove("activet");
  document.getElementById("hellDif").classList.remove("activet");
  }else
  if(localStorage.getItem("difficulty") === "hard") {
  document.getElementById("normalDif").classList.remove("activet");
  document.getElementById("hardDif").classList.add("activet");
  document.getElementById("hellDif").classList.remove("activet");
  }else
  if(localStorage.getItem("difficulty") === "hell") {
  document.getElementById("normalDif").classList.remove("activet");
  document.getElementById("hardDif").classList.remove("activet");
  document.getElementById("hellDif").classList.add("activet");
  }
};
difficultyLoader();
function meowItemLoad() {
  document.getElementById("meowItem").classList.add("activet");
  document.getElementById("goldItem").classList.remove("activet");
  document.getElementById("alphacoinItem").classList.remove("activet");
  document.getElementById("crystalItem").classList.remove("activet");
  document.getElementById("ticketItem").classList.remove("activet");
  document.getElementById("cTicketItem").classList.remove("activet");
  document.getElementById("pTicketItem").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function goldItemLoad() {
  document.getElementById("meowItem").classList.remove("activet");
  document.getElementById("goldItem").classList.add("activet");
  document.getElementById("alphacoinItem").classList.remove("activet");
  document.getElementById("crystalItem").classList.remove("activet");
  document.getElementById("ticketItem").classList.remove("activet");
  document.getElementById("cTicketItem").classList.remove("activet");
  document.getElementById("pTicketItem").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function alphacoinItemLoad() {
  document.getElementById("meowItem").classList.remove("activet");
  document.getElementById("goldItem").classList.remove("activet");
  document.getElementById("alphacoinItem").classList.add("activet");
  document.getElementById("crystalItem").classList.remove("activet");
  document.getElementById("ticketItem").classList.remove("activet");
  document.getElementById("cTicketItem").classList.remove("activet");
  document.getElementById("pTicketItem").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function crystalItemLoad() {
  document.getElementById("meowItem").classList.remove("activet");
  document.getElementById("goldItem").classList.remove("activet");
  document.getElementById("alphacoinItem").classList.remove("activet");
  document.getElementById("crystalItem").classList.add("activet");
  document.getElementById("ticketItem").classList.remove("activet");
  document.getElementById("cTicketItem").classList.remove("activet");
  document.getElementById("pTicketItem").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function ticketItemLoad() {
  document.getElementById("meowItem").classList.remove("activet");
  document.getElementById("goldItem").classList.remove("activet");
  document.getElementById("alphacoinItem").classList.remove("activet");
  document.getElementById("crystalItem").classList.remove("activet");
  document.getElementById("ticketItem").classList.add("activet");
  document.getElementById("cTicketItem").classList.remove("activet");
  document.getElementById("pTicketItem").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function cTicketItemLoad() {
  document.getElementById("meowItem").classList.remove("activet");
  document.getElementById("goldItem").classList.remove("activet");
  document.getElementById("alphacoinItem").classList.remove("activet");
  document.getElementById("crystalItem").classList.remove("activet");
  document.getElementById("ticketItem").classList.remove("activet");
  document.getElementById("cTicketItem").classList.add("activet");
  document.getElementById("pTicketItem").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function pTicketItemLoad() {
  document.getElementById("meowItem").classList.remove("activet");
  document.getElementById("goldItem").classList.remove("activet");
  document.getElementById("alphacoinItem").classList.remove("activet");
  document.getElementById("crystalItem").classList.remove("activet");
  document.getElementById("ticketItem").classList.remove("activet");
  document.getElementById("cTicketItem").classList.remove("activet");
  document.getElementById("pTicketItem").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function foodBGloader() {
  if(localStorage.getItem("foodStyle") === "imgMeow") {
    document.getElementById("meowItem").classList.add("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    localStorage.setItem("reapitfood","meow");
  }else
  if(localStorage.getItem("foodStyle") === "imgGold") {
    document.getElementById("meowItem").classList.remove("activet");
    document.getElementById("goldItem").classList.add("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    localStorage.setItem("reapitfood","gold");
  }else
  if(localStorage.getItem("foodStyle") === "imgCrystal") {
    document.getElementById("meowItem").classList.remove("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.add("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    localStorage.setItem("reapitfood","crystal");
  }else
  if(localStorage.getItem("foodStyle") === "imgAlphacoin") {
    document.getElementById("meowItem").classList.remove("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.add("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    localStorage.setItem("reapitfood","alphacoin");
  }else
  if(localStorage.getItem("foodStyle") === "imgTicket") {
    document.getElementById("meowItem").classList.remove("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.add("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    localStorage.setItem("reapitfood","ticket");
  }else
  if(localStorage.getItem("foodStyle") === "imgCticket") {
    document.getElementById("meowItem").classList.remove("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.add("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    localStorage.setItem("reapitfood","c-ticket");
  }else
  if(localStorage.getItem("foodStyle") === "imgPticket") {
    document.getElementById("meowItem").classList.remove("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.add("activet");
    localStorage.setItem("reapitfood","p-ticket");
  }
};
foodBGloader();
function alphaMapLoad() {
  document.getElementById("alphaMap").classList.add("activet");
  document.getElementById("origoMap").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function origoMapLoad() {
  document.getElementById("alphaMap").classList.remove("activet");
  document.getElementById("origoMap").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function boardBGloader() {
  if(localStorage.getItem("boardStyle") === "imgAlpha") {
    document.getElementById("playBoardId").classList.add("alpha");
    document.getElementById("playBoardId").classList.remove("origo");
    document.getElementById("alphaMap").classList.add("activet");
    document.getElementById("origoMap").classList.remove("activet");
  }else
  if(localStorage.getItem("boardStyle") === "imgOrigo") {
  document.getElementById("playBoardId").classList.remove("alpha");
  document.getElementById("playBoardId").classList.add("origo");
  document.getElementById("alphaMap").classList.remove("activet");
  document.getElementById("origoMap").classList.add("activet");
  }
};
boardBGloader();
function applySettings() {
  if(document.getElementById("origoMap").className === "select activet") {
    localStorage.setItem("boardStyle", "imgOrigo");
  }else
  if(document.getElementById("alphaMap").className === "select activet"){
    localStorage.setItem("boardStyle", "imgAlpha");
  };
  if(document.getElementById("meowItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgMeow");
  }else
  if(document.getElementById("goldItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgGold");
  }
  if(document.getElementById("alphacoinItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgAlphacoin");
  }
  if(document.getElementById("crystalItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgCrystal");
  };
  if(document.getElementById("ticketItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgTicket");
  };
  if(document.getElementById("cTicketItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgCticket");
  };
  if(document.getElementById("pTicketItem").className === "select activet") {
    localStorage.setItem("foodStyle", "imgPticket");
  };
  if(document.getElementById("normalDif").className === "difficulty select activet") {
    localStorage.setItem("difficulty", "normal");
  }else
  if(document.getElementById("hardDif").className === "difficulty select activet") {
    localStorage.setItem("difficulty", "hard");
  }else
  if(document.getElementById("hellDif").className === "difficulty select activet") {
    localStorage.setItem("difficulty", "hell");
  };
  if(document.getElementById("snakeOne").className === "select activet") {
    localStorage.setItem("snakeStyle", "imgSnakeOne");
  }else
  if(document.getElementById("snakeTwo").className === "select activet") {
    localStorage.setItem("snakeStyle", "imgSnakeTwo");
  }else
  if(document.getElementById("snakeThree").className === "select activet") {
    localStorage.setItem("snakeStyle", "imgSnakeThree");
  };
  if(document.getElementById("languageEn").className === "language select activet") {
    localStorage.setItem("lang", "en");
  }else
  if(document.getElementById("languageRu").className === "language select activet") {
    localStorage.setItem("lang", "ru");
  }else
  if(document.getElementById("languageJp").className === "language select activet") {
    localStorage.setItem("lang", "jp");
  }else
  if(document.getElementById("languageChs").className === "language select activet") {
    localStorage.setItem("lang", "chs");
  }else
  if(document.getElementById("languageCht").className === "language select activet") {
    localStorage.setItem("lang", "cht");
  };
  if(document.getElementById("ccLang").className === "controllerpostype select activet") {
    localStorage.setItem("controllerPosition", "center");
  }else
  if(document.getElementById("clLang").className === "controllerpostype select activet") {
    localStorage.setItem("controllerPosition", "left");
  }else
  if(document.getElementById("crLang").className === "controllerpostype select activet") {
    localStorage.setItem("controllerPosition", "right");
  };
  if (document.getElementById("cTypeChenger").checked === true) {
    localStorage.setItem("controllerTypeDev", "dinamic");
  } else
  if(document.getElementById("cTypeChenger").checked === false) {
    localStorage.setItem("controllerTypeDev", "classic");
  };
  if(document.getElementById("pwAlang").className === "select activet") {
    localStorage.setItem("movementbg", "playerWalk");
  }else
  if(document.getElementById("mwAlang").className === "select activet") {
    localStorage.setItem("movementbg", "alboradaWalk");
  }else
  if(document.getElementById("mwBlang").className === "select activet") {
    localStorage.setItem("movementbg", "andromedaWalk");
  }else
  if(document.getElementById("mwClang").className === "select activet") {
    localStorage.setItem("movementbg", "arthurWalk");
  }else
  if(document.getElementById("mwDlang").className === "select activet") {
    localStorage.setItem("movementbg", "auroraWalk");
  }else
  if(document.getElementById("mwElang").className === "select activet") {
    localStorage.setItem("movementbg", "boltusWalk");
  }else
  if(document.getElementById("mwFlang").className === "select activet") {
    localStorage.setItem("movementbg", "caramelWalk");
  }else
  if(document.getElementById("mwGlang").className === "select activet") {
    localStorage.setItem("movementbg", "doomlightlWalk");
  }else
  if(document.getElementById("mwHlang").className === "select activet") {
    localStorage.setItem("movementbg", "firefoxWalk");
  }else
  if(document.getElementById("mwIlang").className === "select activet") {
    localStorage.setItem("movementbg", "firestarWalk");
  }else
  if(document.getElementById("mwJlang").className === "select activet") {
    localStorage.setItem("movementbg", "flamencoWalk");
  }else
  if(document.getElementById("mwKlang").className === "select activet") {
    localStorage.setItem("movementbg", "gabrielWalk");
  }else
  if(document.getElementById("mwLlang").className === "select activet") {
    localStorage.setItem("movementbg", "hotsteelWalk");
  }else
  if(document.getElementById("mwMlang").className === "select activet") {
    localStorage.setItem("movementbg", "hurricaneWalk");
  }else
  if(document.getElementById("mwNlang").className === "select activet") {
    localStorage.setItem("movementbg", "jojoWalk");
  }else
  if(document.getElementById("mwOlang").className === "select activet") {
    localStorage.setItem("movementbg", "michaelWalk");
  }else
  if(document.getElementById("mwPlang").className === "select activet") {
    localStorage.setItem("movementbg", "neutronWalk");
  }else
  if(document.getElementById("mwQlang").className === "select activet") {
    localStorage.setItem("movementbg", "northernWalk");
  }else
  if(document.getElementById("mwRlang").className === "select activet") {
    localStorage.setItem("movementbg", "pulsarWalk");
  }else
  if(document.getElementById("mwSlang").className === "select activet") {
    localStorage.setItem("movementbg", "rangerWalk");
  }else
  if(document.getElementById("mwTlang").className === "select activet") {
    localStorage.setItem("movementbg", "ravenWalk");
  }else
  if(document.getElementById("mwUlang").className === "select activet") {
    localStorage.setItem("movementbg", "skylarkWalk");
  }else
  if(document.getElementById("mwVlang").className === "select activet") {
    localStorage.setItem("movementbg", "snowWalk");
  }else
  if(document.getElementById("mwWlang").className === "select activet") {
    localStorage.setItem("movementbg", "trioWalk");
  }else
  if(document.getElementById("mwXlang").className === "select activet") {
    localStorage.setItem("movementbg", "ventorusWalk");
  }
  window.location.reload();
};
function alertReloadLater() {
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
  document.getElementById("alert").style.display = "block";
  alertcancel.style.display = "block";
  alertconfirm.style.display = "block";
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("alertText").innerHTML = "Set to default?";
    alertcancel.value = "Cancel";
    alertconfirm.value = "Confirm";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("alertText").innerHTML = "Установить по умолчанию?";
    alertcancel.value = "Отмена";
    alertconfirm.value = "Подтвердить";
  }else
  if(localStorage.getItem("lang") === "jp") {
    document.getElementById("alertText").innerHTML = "デフォルトに設定しますか?";
    alertcancel.value = "キャンセル";
    alertconfirm.value = "確認する";
  }else
  if(localStorage.getItem("lang") === "chs") {
    document.getElementById("alertText").innerHTML = "设置为默认值？";
    alertcancel.value = "取消";
    alertconfirm.value = "确认";
  }else
  if(localStorage.getItem("lang") === "cht") {
    document.getElementById("alertText").innerHTML = "設定為預設值？";
    alertcancel.value = "取消";
    alertconfirm.value = "確認";
  }
  alertcancel.onclick = function() {
    document.getElementById("alert").style.display = "none";
    cancelSound();
  };
  alertconfirm.onclick = function() {
    localStorage.setItem("boardStyle", "imgAlpha");
    localStorage.setItem("foodStyle", "imgMeow");
    localStorage.setItem("difficulty", "normal");
    localStorage.setItem("snakeStyle", "imgSnakeOne");
    localStorage.setItem("lang", "en");
    localStorage.setItem("controllerPosition", "center");
    localStorage.setItem("audioPlay", "false");
    localStorage.setItem("sfxvolumedata", "1.0");
    localStorage.setItem("musicPlay", "true");
    localStorage.setItem("musicbg", "sauMusic");
    localStorage.setItem("musicvolumedata", "1.0");
    localStorage.setItem("controllerTypeDev", "classic");
    localStorage.setItem("link-open", "main");
    localStorage.setItem("movementbg", "playerWalk");
    window.location.reload();
  }
  defaultClickSound();
};
function alertExitSite() {
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
  document.getElementById("alert").style.display = "block";
  alertcancel.style.display = "block";
  alertconfirm.style.display = "block";
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("alertText").innerHTML = "You go?";
    alertcancel.value = "No";
    alertconfirm.value = "Yes";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("alertText").innerHTML = "Ты уходишь?";
    alertcancel.value = "Нет";
    alertconfirm.value = "Да";
  }else
  if(localStorage.getItem("lang") === "jp") {
    document.getElementById("alertText").innerHTML = "出発しますか？";
    alertcancel.value = "いいえ";
    alertconfirm.value = "はい";
  }else
  if(localStorage.getItem("lang") === "chs") {
    document.getElementById("alertText").innerHTML = "你去？";
    alertcancel.value = "不";
    alertconfirm.value = "是的";
  }else
  if(localStorage.getItem("lang") === "cht") {
    document.getElementById("alertText").innerHTML = "你去？";
    alertcancel.value = "不";
    alertconfirm.value = "是的";
  }
  alertcancel.onclick = function() {
    document.getElementById("alert").style.display = "none";
    cancelSound();
  };
  alertconfirm.onclick = function() {
    window.close();
  }
  defaultClickSound();
};
function goToScrollToIdElementMusicLang() {
  var element = document.getElementById("scrollToIdElementMusicLang");
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};
function alertAccept() {
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
    document.getElementById("alert").style.display = "block";
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("alertText").innerHTML = "Needed your accepting to load audio ressources for disable audio delay.";
    alertconfirm.value = "Confirm";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("alertText").innerHTML = "Необходимо ваше согласие на загрузку аудио ресурсов для отключения задержки аудио.";
    alertconfirm.value = "Подтвердить";
  }else
  if(localStorage.getItem("lang") === "jp") {
    document.getElementById("alertText").innerHTML = "オーディオ遅延を無効にするには、オーディオ リソースを読み込む同意が必要です。";
    alertconfirm.value = "確認する";
  }else
  if(localStorage.getItem("lang") === "chs") {
    document.getElementById("alertText").innerHTML = "需要您接受加载音频资源以禁用音频延迟。";
    alertconfirm.value = "确认";
  }else
  if(localStorage.getItem("lang") === "cht") {
    document.getElementById("alertText").innerHTML = "需要您接受載入音訊資源以停用音訊延遲。";
    alertconfirm.value = "確認";
  }
  alertcancel.value = "...";
  alertcancel.style.display = "none";
  alertcancel.onclick = function() {
  if(localStorage.getItem("lang") === "en") {
    alert("How you clicked on it!?");
  }else
  if(localStorage.getItem("lang") === "ru") {
    alert("Как вы нажали на это!?");
  }else
  if(localStorage.getItem("lang") === "jp") {
    alert("どうやってクリックしたんですか！？");
  }else
  if(localStorage.getItem("lang") === "chs") {
    alert("您是如何点击它的！？");
  }else
  if(localStorage.getItem("lang") === "cht") {
    alert("您是如何點擊它的！?");
  }
  };
  alertconfirm.onclick = function() {
    defaultClickSound();
    musicBackground();
    loadMusicPlay();
    document.getElementById("defaultClickSound").play();
    document.getElementById("closeSettingsSound").play();
    document.getElementById("cancelSound").play();
    document.getElementById("openSettingsSound").play();
    document.getElementById("selectionSound").play();
    document.getElementById("itemCollected").play();
    document.getElementById("closeModalSound").play();
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("alertText").innerHTML = "Loading…";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("alertText").innerHTML = "Загрузка…";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("alertText").innerHTML = "読み込み中…";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("alertText").innerHTML = "加载中…";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("alertText").innerHTML = "載入中…";
    }
    setTimeout(function() {
      document.getElementById("alert").style.display = "none";
      alertcancel.style.display = "inline";
    },1000);
  }
};
function alertDeleteProgress() {
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
  document.getElementById("alert").style.display = "block";
  alertcancel.style.display = "block";
  alertconfirm.style.display = "block";
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("alertText").innerHTML = "You are sure you want delete your progress?";
    alertcancel.value = "No";
    alertconfirm.value = "Yes";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("alertText").innerHTML = "Вы уверены, что хотите удалить свой прогресс?";
    alertcancel.value = "Нет";
    alertconfirm.value = "Да";
  }else
  if(localStorage.getItem("lang") === "jp") {
    document.getElementById("alertText").innerHTML = "進捗状況を削除してもよろしいですか?";
    alertcancel.value = "いいえ";
    alertconfirm.value = "はい";
  }else
  if(localStorage.getItem("lang") === "chs") {
    document.getElementById("alertText").innerHTML = "您确定要删除您的进度吗？";
    alertcancel.value = "不";
    alertconfirm.value = "是的";
  }else
  if(localStorage.getItem("lang") === "cht") {
    document.getElementById("alertText").innerHTML = "您確定要刪除您的進度嗎？";
    alertcancel.value = "不";
    alertconfirm.value = "是的";
  }
  alertcancel.onclick = function() {
    document.getElementById("alert").style.display = "none";
    cancelSound();
  };
  alertconfirm.onclick = function() {
    localStorage.setItem("high-score", "0");
    localStorage.setItem("meawTockenStorage", "0");
    localStorage.setItem("goldStorage", "0");
    localStorage.setItem("alphaCoinStorage", "0");
    localStorage.setItem("crystalStorage", "0");
    localStorage.setItem("ticketStorage", "0");
    localStorage.setItem("ticketChromaticStorage", "0");
    localStorage.setItem("ticketPremiumStorage", "0");
    window.location.reload();
  }
  defaultClickSound();
};
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};
function openTabSound(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("sound-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-sounds");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};
// Install App: Gen by: Gemini
function installApp() {
  let deferredPrompt; // Store the deferred prompt
  if (navigator.standalone) {
    // Already installed (iOS) or running as a standalone app
    var alertcancel = document.getElementById("alertLeft");
    var alertconfirm = document.getElementById("alertRight");
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").style.zIndex = "5";
    alertcancel.style.display = "none";
    alertconfirm.style.display = "block";
    alertcancel.style.display = "none";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("alertText").innerHTML = "App is already installed or running in standalone mode.";
      alertconfirm.value = "Confirm";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("alertText").innerHTML = "Приложение уже установлено или работает в автономном режиме.";
      alertconfirm.value = "Подтвердить";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("alertText").innerHTML = "アプリケーションはすでにインストールされているか、オフラインで実行されています。";
      alertconfirm.value = "確認する";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("alertText").innerHTML = "应用程序已安装或以独立模式运行。";
      alertconfirm.value = "确认";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("alertText").innerHTML = "應用程式已安裝或以獨立模式運作。";
      alertconfirm.value = "確認";
    }
    alertconfirm.onclick = function() {
      document.getElementById("alert").style.display = "none";
      document.getElementById("alert").style.zIndex = "3";
      defaultClickSound();
    }
    return;
  }
  if (window.matchMedia('(display-mode: fullscreen)').matches) {
    // Already installed (Android)
    var alertcancel = document.getElementById("alertLeft");
    var alertconfirm = document.getElementById("alertRight");
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").style.zIndex = "5";
    alertcancel.style.display = "none";
    alertconfirm.style.display = "block";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("alertText").innerHTML = "App is already installed or running in standalone mode.";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("alertText").innerHTML = "Приложение уже установлено или работает в автономном режиме.";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("alertText").innerHTML = "アプリケーションはすでにインストールされているか、オフラインで実行されています。";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("alertText").innerHTML = "应用程序已安装或以独立模式运行。";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("alertText").innerHTML = "應用程式已安裝或以獨立模式運作。";
      alertconfirm.value = "Ok";
    }
    alertconfirm.onclick = function() {
      document.getElementById("alert").style.display = "none";
      document.getElementById("alert").style.zIndex = "3";
      defaultClickSound();
    }
    return;
  }
  if (typeof deferredPrompt !== 'undefined') {
    // The user has been prompted before, so let's prompt them again
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null; // Reset the deferred prompt
    });
    return;
  }
  // Check if the browser supports add to home screen
  if (window.matchMedia('(display-mode: browser)').matches) {
    // Check if the browser supports beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be used later.
      deferredPrompt = e;
      // Optionally, send analytics event that A2HS prompt was shown.
      console.log('beforeinstallprompt' + 'event was fired.');
      // Show the install button
       const installButton = document.getElementById('downloadNoAutoUpdate2'); // Replace with your button ID
       if (installButton) {
           installButton.style.display = 'block'; // Or however you want to show it
       }
    });
    // Handle the button click
    const installButton = document.getElementById('downloadNoAutoUpdate2'); // Replace with your button ID
    if (installButton) {
      installButton.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
            installButton.style.display = 'none'; // Hide the button after the prompt
          });
        } else {
          // The deferred prompt is not available, possibly due to user interaction or browser limitations.
          var alertcancel = document.getElementById("alertLeft");
          var alertconfirm = document.getElementById("alertRight");
          document.getElementById("alert").style.display = "block";
          document.getElementById("alert").style.zIndex = "5";
          alertcancel.style.display = "none";
          alertconfirm.style.display = "block";
          if(localStorage.getItem("lang") === "en") {
            document.getElementById("alertText").innerHTML = "Add to Home Screen functionality is not currently available.  Make sure you've visited the site a few times.";
            alertconfirm.value = "Ok";
          }else
          if(localStorage.getItem("lang") === "ru") {
            document.getElementById("alertText").innerHTML = "Функция «Добавить на главный экран» в настоящее время недоступна. Убедитесь, что вы посетили сайт несколько раз.";
            alertconfirm.value = "Ok";
          }else
          if(localStorage.getItem("lang") === "jp") {
            document.getElementById("alertText").innerHTML = "ホーム画面に追加機能は現在利用できません。サイトに数回アクセスしたことを確認してください。";
            alertconfirm.value = "Ok";
          }else
          if(localStorage.getItem("lang") === "chs") {
            document.getElementById("alertText").innerHTML = "添加到主屏幕功能目前不可用。请确保您已访问过该网站几次。";
            alertconfirm.value = "Ok";
          }else
          if(localStorage.getItem("lang") === "cht") {
            document.getElementById("alertText").innerHTML = "「新增至主畫面」功能目前無法使用。 確保您已經訪問過該網站幾次。";
            alertconfirm.value = "Ok";
          }
          alertconfirm.onclick = function() {
            document.getElementById("alert").style.display = "none";
            document.getElementById("alert").style.zIndex = "3";
          }
        }
      });
    }
  } else {
    var alertcancel = document.getElementById("alertLeft");
    var alertconfirm = document.getElementById("alertRight");
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").style.zIndex = "5";
    alertcancel.style.display = "none";
    alertconfirm.style.display = "block";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("alertText").innerHTML = "This browser does not support Add to Home Screen.";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("alertText").innerHTML = "Этот браузер не поддерживает функцию «Добавить на главный экран».";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("alertText").innerHTML = "このブラウザはホーム画面への追加をサポートしていません。";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("alertText").innerHTML = "该浏览器不支持添加到主屏幕。";
      alertconfirm.value = "Ok";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("alertText").innerHTML = "該瀏覽器不支援添加到主螢幕。";
      alertconfirm.value = "Ok";
    }
    alertconfirm.onclick = function() {
      document.getElementById("alert").style.display = "none";
      document.getElementById("alert").style.zIndex = "3";
    }
  }
}
// Call installApp() when your button is clicked.  For example:
const installButton = document.getElementById('downloadNoAutoUpdate2'); // Replace with your actual button ID
if (installButton) {
  installButton.addEventListener('click', installApp);
};
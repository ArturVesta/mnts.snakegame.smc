function pauseGame() {
  var checkbox = document.getElementById("chechboxPausing");
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
  alertconfirm.style.display = "block";
  if(checkbox.checked === true) {
    clearInterval(setIntervalId);
    checkbox.classList.add("pauser");
    document.getElementById("btn000").classList.add("pauser");
    document.getElementById("alert").style.display = "block";
    alertcancel.value = "...";
    alertcancel.style.display = "none";
    if(localStorage.getItem("lang") === "en") {
      if(navigator.userAgent.match(/mobile/i)) {
        document.getElementById("alertText").innerHTML = "Game paused, press ''Continue'' to continue.";
      }else{
        document.getElementById("alertText").innerHTML = "Game paused, click ''Continue'' to continue.";
      }
      alertconfirm.value = "Continue";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(navigator.userAgent.match(/mobile/i)) {
        document.getElementById("alertText").innerHTML = "Игра приостановлена, коснитесь ''Продолжить'', чтобы продолжить.";
      }else{
        document.getElementById("alertText").innerHTML = "Игра приостановлена, нажмите ''Продолжить'', чтобы продолжить.";
      }
      alertconfirm.value = "Продолжать";
    }
    alertconfirm.onclick = function() {
      document.getElementById('chechboxPausing').click();
      alertconfirm.style.display = "none";
    }
  }else
  if(checkbox.checked === false) {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("alertText").innerHTML = "Ready continue in...";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("alertText").innerHTML = "Готово продолжить через...";
    }
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "3"
    },1000);
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "2"
    },2000);
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "1"
    },3000);
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "0"
      if(localStorage.getItem("difficulty") === "normal") {
        setIntervalId = setInterval(initGame, 140);
        document.getElementById("playerWalk").playbackRate = 1.0;
      }else
      if(localStorage.getItem("difficulty") === "hard") {
        setIntervalId = setInterval(initGame, 100);
        document.getElementById("playerWalk").playbackRate = 1.5;
      }else
      if(localStorage.getItem("difficulty") === "hell") {
        setIntervalId = setInterval(initGame, 50);
        document.getElementById("playerWalk").playbackRate = 2;
      }else
      if(localStorage.getItem("difficulty") === "") {
        setIntervalId = setInterval(initGame, 140);
        document.getElementById("playerWalk").playbackRate = 1.0;
      }
      document.getElementById("alert").style.display = "none";
      checkbox.classList.remove("pauser");
      document.getElementById("btn000").classList.remove("pauser");
      playActiveMoveSound();
    },4000);
  }
  menuPauseWalkSound();
  defaultClickSound();
};
window.addEventListener('load', function() {
  loadLocalStorages();
  stopLoading();
  localStorage.setItem("steelScore", localStorage.getItem("high-score"));
  document.getElementById("collectedMeow").innerHTML = localStorage.getItem("meawTockenStorage");
  document.getElementById("collectedGold").innerHTML = localStorage.getItem("goldStorage");
  document.getElementById("collectedAlphacoin").innerHTML = localStorage.getItem("alphaCoinStorage");
  document.getElementById("collectedCrystal").innerHTML = localStorage.getItem("crystalStorage");
  document.getElementById("collectedTicket").innerHTML = localStorage.getItem("ticketStorage");
  document.getElementById("collectedCticket").innerHTML = localStorage.getItem("ticketChromaticStorage");
  document.getElementById("collectedPticket").innerHTML = localStorage.getItem("ticketPremiumStorage");
});
function stopLoading() {
  document.getElementById("loading").style.display = "none";
  alertAccept();
};
window.oncontextmenu=function(){return false}
window.onerror=function(){alert("Somthin error.., Tell us if this alert is jump." + err)};
const dimensions = [
  "16",
  "32",
  "48",
  "76",
  "96",
  "120",
  "128",
  "144",
  "152",
  "167",
  "180",
  "192",
  "196",
  "228",
  "256",
  "300",
  "384",
  "512"
];
function iconAllLoad() {
  var favicon = document.createElement('link');
  var favicon16 = document.createElement('link');
  var favicon32 = document.createElement('link');
  var favicon48 = document.createElement('link');
  var favicon76 = document.createElement('link');
  var favicon96 = document.createElement('link');
  var favicon120 = document.createElement('link');
  var favicon128 = document.createElement('link');
  var favicon144 = document.createElement('link');
  var favicon152 = document.createElement('link');
  var favicon167 = document.createElement('link');
  var favicon180 = document.createElement('link');
  var favicon192 = document.createElement('link');
  var favicon196 = document.createElement('link');
  var favicon228 = document.createElement('link');
  var favicon256 = document.createElement('link');
  var favicon300 = document.createElement('link');
  var favicon384 = document.createElement('link');
  var favicon512 = document.createElement('link');
  subiconCode = "index_data/29172/icon_0.jpg";
  subiconCode16 = "index_data/29172/icon_" + dimensions[0] + ".jpg";
  subiconCode32 = "index_data/29172/icon_" + dimensions[1] + ".jpg";
  subiconCode48 = "index_data/29172/icon_" + dimensions[2] + ".jpg";
  subiconCode76 = "index_data/29172/icon_" + dimensions[3] + ".jpg";
  subiconCode96 = "index_data/29172/icon_" + dimensions[4] + ".jpg";
  subiconCode120 = "index_data/29172/icon_" + dimensions[5] + ".jpg";
  subiconCode128 = "index_data/29172/icon_" + dimensions[6] + ".jpg";
  subiconCode144 = "index_data/29172/icon_" + dimensions[7] + ".jpg";
  subiconCode152 = "index_data/29172/icon_" + dimensions[8] + ".jpg";
  subiconCode167 = "index_data/29172/icon_" + dimensions[9] + ".jpg";
  subiconCode180 = "index_data/29172/icon_" + dimensions[10] + ".jpg";
  subiconCode192 = "index_data/29172/icon_" + dimensions[11] + ".jpg";
  subiconCode196 = "index_data/29172/icon_" + dimensions[12] + ".jpg";
  subiconCode228 = "index_data/29172/icon_" + dimensions[13] + ".jpg";
  subiconCode256 = "index_data/29172/icon_" + dimensions[14] + ".jpg";
  subiconCode300 = "index_data/29172/icon_" + dimensions[15] + ".jpg";
  subiconCode384 = "index_data/29172/icon_" + dimensions[16] + ".jpg";
  subiconCode512 = "index_data/29172/icon_" + dimensions[17] + ".jpg";
  favicon.href = subiconCode;
  favicon.rel = 'icon';
  favicon16.href = subiconCode16;
  favicon16.rel = 'icon';
  favicon16.sizes = dimensions[0] + "x" + dimensions[0];
  favicon32.href = subiconCode32;
  favicon32.rel = 'icon';
  favicon32.sizes = dimensions[1] + "x" + dimensions[1];
  favicon48.href = subiconCode48;
  favicon48.rel = 'icon';
  favicon48.sizes = dimensions[2] + "x" + dimensions[2];
  favicon76.href = subiconCode76;
  favicon76.rel = 'icon';
  favicon76.sizes = dimensions[3] + "x" + dimensions[3];
  favicon96.href = subiconCode96;
  favicon96.rel = 'icon';
  favicon96.sizes = dimensions[4] + "x" + dimensions[4];
  favicon120.href = subiconCode120;
  favicon120.rel = 'icon';
  favicon120.sizes = dimensions[5] + "x" + dimensions[5];
  favicon128.href = subiconCode128;
  favicon128.rel = 'icon';
  favicon128.sizes = dimensions[6] + "x" + dimensions[6];
  favicon144.href = subiconCode144;
  favicon144.rel = 'icon';
  favicon144.sizes = dimensions[7] + "x" + dimensions[7];
  favicon152.href = subiconCode152;
  favicon152.rel = 'icon';
  favicon152.sizes = dimensions[8] + "x" + dimensions[8];
  favicon167.href = subiconCode167;
  favicon167.rel = 'icon';
  favicon167.sizes = dimensions[9] + "x" + dimensions[9];
  favicon180.href = subiconCode180;
  favicon180.rel = 'icon';
  favicon180.sizes = dimensions[10] + "x" + dimensions[10];
  favicon192.href = subiconCode192;
  favicon192.rel = 'icon';
  favicon192.sizes = dimensions[11] + "x" + dimensions[11];
  favicon196.href = subiconCode196;
  favicon196.rel = 'icon';
  favicon196.sizes = dimensions[12] + "x" + dimensions[12];
  favicon228.href = subiconCode228;
  favicon228.rel = 'icon';
  favicon228.sizes = dimensions[13] + "x" + dimensions[13];
  favicon256.href = subiconCode256;
  favicon256.rel = 'icon';
  favicon256.sizes = dimensions[14] + "x" + dimensions[14];
  favicon300.href = subiconCode300;
  favicon300.rel = 'icon';
  favicon300.sizes = dimensions[15] + "x" + dimensions[15];
  favicon384.href = subiconCode384;
  favicon384.rel = 'icon';
  favicon384.sizes = dimensions[16] + "x" + dimensions[16];
  favicon512.href = subiconCode512;
  favicon512.rel = 'icon';
  favicon512.sizes = dimensions[17] + "x" + dimensions[17];
  document.head.appendChild(favicon);
  document.head.appendChild(favicon16);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon48);
  document.head.appendChild(favicon76);
  document.head.appendChild(favicon96);
  document.head.appendChild(favicon120);
  document.head.appendChild(favicon128);
  document.head.appendChild(favicon144);
  document.head.appendChild(favicon152);
  document.head.appendChild(favicon167);
  document.head.appendChild(favicon180);
  document.head.appendChild(favicon192);
  document.head.appendChild(favicon196);
  document.head.appendChild(favicon228);
  document.head.appendChild(favicon256);
  document.head.appendChild(favicon300);
  document.head.appendChild(favicon384);
  document.head.appendChild(favicon512);
}
iconAllLoad();
function centerController() {
  if(document.getElementById("ccLang").getAttribute("locked") === "false") {
    document.getElementById("ccLang").classList.add("activet");
    document.getElementById("clLang").classList.remove("activet");
    document.getElementById("crLang").classList.remove("activet");
    document.getElementById("applySettings").style.display = "block";
    selectionSound();
  } else {
    selectionSound();
    return false;
  }
};
function leftController() {
  if(document.getElementById("clLang").getAttribute("locked") === "false") {
    document.getElementById("ccLang").classList.remove("activet");
    document.getElementById("clLang").classList.add("activet");
    document.getElementById("crLang").classList.remove("activet");
    document.getElementById("applySettings").style.display = "block";
    selectionSound();
  } else {
    selectionSound();
    return false;
  }
};
function rightController() {
  if(document.getElementById("crLang").getAttribute("locked") === "false") {
    document.getElementById("ccLang").classList.remove("activet");
    document.getElementById("clLang").classList.remove("activet");
    document.getElementById("crLang").classList.add("activet");
    document.getElementById("applySettings").style.display = "block";
    selectionSound();
  } else {
    selectionSound();
    return false;
  }
};
function positioningController() {
  var checkbox = document.getElementById("showPadButtons");
  if(localStorage.getItem("controllerPosition") === "center") {
    document.getElementById("ccLang").classList.add("activet");
    document.getElementById("clLang").classList.remove("activet");
    document.getElementById("crLang").classList.remove("activet");
    document.getElementById("controller").style.left = "auto";
    document.getElementById("controller").style.right = "auto";
  }else
  if(localStorage.getItem("controllerPosition") === "left") {
    document.getElementById("ccLang").classList.remove("activet");
    document.getElementById("clLang").classList.add("activet");
    document.getElementById("crLang").classList.remove("activet");
    document.getElementById("controller").style.left = "0";
    document.getElementById("controller").style.right = "auto";
  }else
  if(localStorage.getItem("controllerPosition") === "right") {
    document.getElementById("ccLang").classList.remove("activet");
    document.getElementById("clLang").classList.remove("activet");
    document.getElementById("crLang").classList.add("activet");
    document.getElementById("controller").style.left = "auto";
    document.getElementById("controller").style.right = "0";
  }
};
positioningController();
function englishLanguage() {
  document.getElementById("languageEn").classList.add("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function russianLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function languagesContents() {
  var a000 = document.getElementById("SettingsTitleLang");
  var a001 = document.getElementById("aboutTab");
  var a002 = document.getElementById("systemTab");
  var a003 = document.getElementById("snakeTab");
  var a004 = document.getElementById("foodTab");
  var a005 = document.getElementById("boardTab");
  var a006 = document.getElementById("audioTab");
  var a007 = document.getElementById("difficultyLang");
  var a008 = document.getElementById("normalDif");
  var a009 = document.getElementById("hardDif");
  var a010 = document.getElementById("hellDif");
  var a011 = document.getElementById("langsLangs");
  var a012 = document.getElementById("boardMapAlphaLang");
  var a013 = document.getElementById("boardMapOrigoLang");
  var a014 = document.getElementById("snakeOne");
  var a015 = document.getElementById("snakeTwo");
  var a016 = document.getElementById("snakeThree");
  var a017 = document.getElementById("meowLang");
  var a018 = document.getElementById("goldLang");
  var a019 = document.getElementById("alphaLang");
  var a020 = document.getElementById("crystalLang");
  var a021 = document.getElementById("ticketLang");
  var a022 = document.getElementById("cTicketLang");
  var a023 = document.getElementById("pTicketLang");
  var a024 = document.getElementById("muteLang");
  var a025 = document.getElementById("sfxLang");
  var a026 = document.getElementById("netEaseLang1");
  var a027 = document.getElementById("netEaseLang2");
  var a028 = document.getElementById("coderLang");
  var a029 = document.getElementById("baseCodeLang");
  var a030 = document.getElementById("getscore");
  var a031 = document.getElementById("loseText");
  var a032 = document.getElementById("defaultSettings");
  var a033 = document.getElementById("applySettings");
  var a034 = document.getElementById("controllerSettingsLangs");
  var a035 = document.getElementById("cspLang");
  var a036 = document.getElementById("ccLang");
  var a037 = document.getElementById("clLang");
  var a038 = document.getElementById("crLang");
  var a039 = document.getElementById("noticeTitleLang");
  var a041 = document.getElementById("musicLang");
  var a042 = document.getElementById("musicstyleLang");
  var a043 = document.getElementById("navBtn");
  var a044 = document.getElementById("btn002");
  var a045 = document.getElementById("deleteprogbutton");
  var a046 = document.getElementById("langImportantLang");
  var a047 = document.getElementById("cTypeLang");
  var a048 = document.getElementById("translate");
  var a049 = document.getElementById("snakeTabsound");
  var a050 = document.getElementById("customLanguage");
  var a051 = document.getElementById("profileTitleLang");
  var a052 = document.getElementById("clickable0Lang");
  var a053 = document.getElementById("cratedOn0Lang");
  var a054 = document.getElementById("cratedOnLang");
  var a055 = document.getElementById("loadingText");
  const a000_all = document.getElementsByClassName('settingscontent');
  const a001_all = document.getElementsByClassName('stylescontent');
  const a002_all = document.getElementsByClassName('coming-soon');
  const a003_all = document.getElementsByClassName('moresettingscontent');
  const a004_all = document.getElementsByClassName('totopelement');
  const a005_all = document.getElementsByClassName('serviceLang');
  if(localStorage.getItem("lang") === "en") {
    a000.innerHTML = "Settings";
    a001.innerHTML = "About";
    a002.innerHTML = "System";
    a003.innerHTML = "Snake";
    a004.innerHTML = "Food";
    a005.innerHTML = "Board";
    a006.innerHTML = "Audio";
    a007.innerHTML = "Difficulty:";
    a008.innerHTML = "Normal";
    a009.innerHTML = "Hard";
    a010.innerHTML = "Hell";
    a011.innerHTML = "Languages:";
    a012.innerHTML = "Alpha City Map";
    a013.innerHTML = "Origo Island Map";
    a014.innerHTML = "Player 1";
    a015.innerHTML = "Player 2";
    a016.innerHTML = "Player 3";
    a017.innerHTML = "Meow Token";
    a018.innerHTML = "Gold";
    a019.innerHTML = "Alpha Coin";
    a020.innerHTML = "Crystal";
    a021.innerHTML = "Ticket";
    a022.innerHTML = "Chromatic Ticket";
    a023.innerHTML = "Premium Ticket";
    a024.innerHTML = "Mute Audio";
    a025.innerHTML = "SFX Volume";
    a026.innerHTML = "Privacy Policy, Terms and Conditions";
    a027.innerHTML = "©1997-2025 NetEase, Inc.All Rights Reserved";
    a028.innerHTML = "Coding: " + "MNTS;";
    a029.innerHTML = "Base Code: From";
    a030.innerHTML = "Score: 0";
    a031.innerHTML = "Game Over!";
    a032.value = "Default";
    a033.value = "Apply";
    a034.innerHTML = "Controller:";
    a035.innerHTML = "Position:";
    a036.innerHTML = "Center";
    a037.innerHTML = "Left";
    a038.innerHTML = "Right";
    a039.innerHTML = "Notice";
    a041.innerHTML = "Background Music";
    a042.innerHTML = "Music";
      a043.classList.add("en-lang");
      a044.classList.add("en-lang");
    a045.value = "Delete Progress";
    a046.innerHTML = "(Language translations may not be 100% accurate)";
    a047.innerHTML = "Dynamic controls";
    a048.classList.add("g-t-en");
    a049.innerHTML = "Snake";
    a050.innerHTML = "Share your language or repair existing languages";
    a051.innerHTML = "Profile Center (Beta)";
    a052.innerHTML = "> Clickable <";
    a053.innerHTML = "Coded on: ";
    a055.innerHTML = "Loading…";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = 'Settings:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'Style:';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = 'Coming Soon!, Wait for updates.';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = 'More:';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = 'To start';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'Services:';
    }
    document.title = "Snake Mecha Collector";
  }else
  if(localStorage.getItem("lang") === "ru") {
    a000.innerHTML = "Настр'";
    a001.innerHTML = "О";
    a002.innerHTML = "Система";
    a003.innerHTML = "Змея";
    a004.innerHTML = "Еда";
    a005.innerHTML = "Доска";
    a006.innerHTML = "Аудио";
    a007.innerHTML = "Сложность:";
    a008.innerHTML = "Нормальный";
    a009.innerHTML = "Тяжелый";
    a010.innerHTML = "Ад";
    a011.innerHTML = "Языки:";
    a012.innerHTML = "Карта города Альфа";
    a013.innerHTML = "Карта острова Ориго";
    a014.innerHTML = "Игрок 1";
    a015.innerHTML = "Игрок 2";
    a016.innerHTML = "Игрок 3";
    a017.innerHTML = "Мяу-жетон";
    a018.innerHTML = "Золото";
    a019.innerHTML = "Альфа-монета";
    a020.innerHTML = "Кристалл";
    a021.innerHTML = "Билет";
    a022.innerHTML = "Хроматический билет";
    a023.innerHTML = "Премиум-билет";
    a024.innerHTML = "Отключить звук";
    a025.innerHTML = "Громкость SFX";
    a026.innerHTML = "Политика конфиденциальности, положения и условия";
    a027.innerHTML = "©1997-2025 NetEase, Inc.Все права защищены";
    a028.innerHTML = "Кодирование: " + "MNTS;";
    a029.innerHTML = "Базовый код: Из ";
    a030.innerHTML = "Счет: 0";
    a031.innerHTML = "Игра закончена!";
    a032.value = "По умолч";
    a033.value = "Применять";
    a034.innerHTML = "Контроллер:";
    a035.innerHTML = "Позиция:";
    a036.innerHTML = "Центрый";
    a037.innerHTML = "Левый";
    a038.innerHTML = "Правый";
    a039.innerHTML = "Уведомление";
    a041.innerHTML = "Фоновая музыка";
    a042.innerHTML = "Музыка";
      a043.classList.add("ru-lang");
      a044.classList.add("ru-lang");
    a045.value = "Удалить Прогресс";
    a046.innerHTML = "(Переводы могут содержать ошибки)";
    a047.innerHTML = "Динамический контроллер";
    a048.classList.add("g-t-ru");
    a049.innerHTML = "Змея";
    a050.innerHTML = "Поделитесь своим языком или исправьте существующие языки";
    a051.innerHTML = "Центр профиля (Бета)";
    a052.innerHTML = "> Нажемной <";
    a053.innerHTML = "Кодировано на: ";
    a055.innerHTML = "Загрузка…";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = 'Настройки:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'Стиль:';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = 'Скоро!, Ждите обновлений.';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = 'Более:';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = 'К началу';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'Услуги:';
    }
    document.title = "Змея Меха Сборщик";
  }
  a054.innerHTML = "Visual Studio Code";
};
languagesContents();
function langCheck() {
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("languageEn").classList.add("activet");
    document.getElementById("languageRu").classList.remove("activet");
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("languageEn").classList.remove("activet");
    document.getElementById("languageRu").classList.add("activet");
  }
};
langCheck();
function checkDeviceType() {
  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("controller").style.display = "grid";
    document.getElementById("selectOptionsControllerPosition").style.display = "flex";
    document.getElementById("cspLang").style.display = "block";
    document.getElementById("controllerSettingsLangs").style.display = "block";
    document.getElementById("navBtn").style.display = "none";
    document.getElementById("navBtn").style.top = "0";
    document.getElementById("navBtn").style.bottom = "auto";
    document.getElementById("chechboxPausing").style.display = "none";
    document.getElementById("devCheck").style.display = "block";
  }else{
    document.getElementById("controller").style.display = "none";
    document.getElementById("selectOptionsControllerPosition").style.display = "none";
    document.getElementById("cspLang").style.display = "none";
    document.getElementById("controllerSettingsLangs").style.display = "none";
    document.getElementById("navBtn").style.display = "block";
    document.getElementById("navBtn").style.top = "auto";
    document.getElementById("navBtn").style.bottom = "0";
    document.getElementById("chechboxPausing").style.display = "block";
    document.getElementById("devCheck").style.display = "none";
  }
};
checkDeviceType();
function firstTime() {
  var prevbtn = document.getElementById("firstModalPervBtm");
  var nextbtn = document.getElementById("firstModalNextBtm");
  var applybtn = document.getElementById("firstModalApplyBtm");
  if(localStorage.getItem("firsttime") === null || localStorage.getItem("firsttime") === "") {
    document.getElementById("firstModal").style.display = "block";
  }else{
    return false;
  }
}
firstTime();
function loadLocalStorages() {
  if(localStorage.getItem("snakeStyle") === null || localStorage.getItem("snakeStyle") === "") {
    // load snake
    localStorage.setItem("snakeStyle", "imgSnakeOne");
    localStorage.setItem("number","one");
    document.getElementById("snakeOne").classList.add("activet");
    document.getElementById("snakeTwo").classList.remove("activet");
    document.getElementById("snakeThree").classList.remove("activet");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("difficulty") === null || localStorage.getItem("difficulty") === "") {
    // load difficulty
    localStorage.setItem("difficulty", "normal");
    document.getElementById("normalDif").classList.add("activet");
    document.getElementById("hardDif").classList.remove("activet");
    document.getElementById("hellDif").classList.remove("activet");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("foodStyle") === null || localStorage.getItem("foodStyle") === "") {
    // load food
    localStorage.setItem("foodStyle", "imgMeow");
    localStorage.setItem("reapitfood","meow");
    document.getElementById("meowItem").classList.add("activet");
    document.getElementById("goldItem").classList.remove("activet");
    document.getElementById("alphacoinItem").classList.remove("activet");
    document.getElementById("crystalItem").classList.remove("activet");
    document.getElementById("ticketItem").classList.remove("activet");
    document.getElementById("cTicketItem").classList.remove("activet");
    document.getElementById("pTicketItem").classList.remove("activet");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("boardStyle") === null || localStorage.getItem("boardStyle") === "") {
    // load board
    localStorage.setItem("boardStyle", "imgAlpha");
    document.getElementById("playBoardId").classList.add("alpha");
    document.getElementById("playBoardId").classList.remove("origo");
    document.getElementById("alphaMap").classList.add("activet");
    document.getElementById("origoMap").classList.remove("activet");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("controllerPosition") === null || localStorage.getItem("controllerPosition") === "") {
    // load controller position
    localStorage.setItem("controllerPosition", "center");
    document.getElementById("ccLang").classList.add("activet");
    document.getElementById("clLang").classList.remove("activet");
    document.getElementById("crLang").classList.remove("activet");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("lang") === null || localStorage.getItem("lang") === "") {
    // load language
    localStorage.setItem("lang", "en");
    document.getElementById("languageEn").classList.add("activet");
    document.getElementById("languageRu").classList.remove("activet");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("musicbg") === null || localStorage.getItem("musicbg") === "") {
    // load music
    localStorage.setItem("musicbg", "sauMusic");
    document.getElementById("msAlang").classList.add("activet");
    document.getElementById("checkMusicMute").click();
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("controllerTypeDev") === null || localStorage.getItem("controllerTypeDev") === "") {
    // load music
    localStorage.setItem("controllerTypeDev", "classic");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("musicPlay") === null || localStorage.getItem("musicPlay") === "") {
    // load music checkbox
    localStorage.setItem("musicPlay", "true");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("sfxvolumedata") === null || localStorage.getItem("sfxvolumedata") === "") {
    // load sfx volume
    localStorage.setItem("sfxvolumedata", "1.0");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("musicvolumedata") === null || localStorage.getItem("musicvolumedata") === "") {
    // load music volume
    localStorage.setItem("musicvolumedata", "1.0");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("movementbg") === null || localStorage.getItem("movementbg") === "") {
    // load walk
    localStorage.setItem("movementbg", "playerWalk");
    window.location.reload();
  }else{
    return false;
  };
  if(localStorage.getItem("meawTockenStorage") === null) {
    localStorage.setItem("meawTockenStorage", "0");
  };
  if(localStorage.getItem("goldStorage") === null) {
    localStorage.setItem("goldStorage", "0");
  };
  if(localStorage.getItem("alphaCoinStorage") === null) {
    localStorage.setItem("alphaCoinStorage", "0");
  };
  if(localStorage.getItem("crystalStorage") === null) {
    localStorage.setItem("crystalStorage", "0");
  };
  if(localStorage.getItem("ticketStorage") === null) {
    localStorage.setItem("ticketStorage", "0");
  };
  if(localStorage.getItem("ticketChromaticStorage") === null) {
    localStorage.setItem("ticketChromaticStorage", "0");
  };
  if(localStorage.getItem("ticketPremiumStorage") === null) {
    localStorage.setItem("ticketPremiumStorage", "0");
  };
};
function levelsSystem() {
  var star = document.getElementById("star");
  var substar = document.getElementById("substar");
  if(localStorage.getItem("high-score") == "0" || localStorage.getItem("high-score") == null) {
    document.getElementById("leaguelevel").innerHTML = "0";
    star.style.color = "#ffffffff";
    substar.style.color = "#ffffffff";
  }else
  if(localStorage.getItem("high-score") == "1" || localStorage.getItem("high-score") == "2" || localStorage.getItem("high-score") == "11" || localStorage.getItem("high-score") == "12" || localStorage.getItem("high-score") == "21" || localStorage.getItem("high-score") == "22" ||  localStorage.getItem("high-score") == "31" || localStorage.getItem("high-score") == "32" || localStorage.getItem("high-score") == "41" || localStorage.getItem("high-score") == "42" || localStorage.getItem("high-score") == "51" || localStorage.getItem("high-score") == "52" || localStorage.getItem("high-score") == "61" || localStorage.getItem("high-score") == "62" || localStorage.getItem("high-score") == "71" || localStorage.getItem("high-score") == "72") {
    document.getElementById("leaguelevel").innerHTML = "1";
    document.getElementById("subleaguelevel").innerHTML = "1";
  }else
  if(localStorage.getItem("high-score") == "3" || localStorage.getItem("high-score") == "4" || localStorage.getItem("high-score") == "13" || localStorage.getItem("high-score") == "14" || localStorage.getItem("high-score") == "23" || localStorage.getItem("high-score") == "24" || localStorage.getItem("high-score") == "33" || localStorage.getItem("high-score") == "34" || localStorage.getItem("high-score") == "43" || localStorage.getItem("high-score") == "44" || localStorage.getItem("high-score") == "53" || localStorage.getItem("high-score") == "54" || localStorage.getItem("high-score") == "63" || localStorage.getItem("high-score") == "64" || localStorage.getItem("high-score") == "73" || localStorage.getItem("high-score") == "74") {
    document.getElementById("leaguelevel").innerHTML = "2";
    document.getElementById("subleaguelevel").innerHTML = "2";
  }else
  if(localStorage.getItem("high-score") == "5" || localStorage.getItem("high-score") == "6" || localStorage.getItem("high-score") == "15" || localStorage.getItem("high-score") == "16" || localStorage.getItem("high-score") == "25" || localStorage.getItem("high-score") == "26" || localStorage.getItem("high-score") == "35" || localStorage.getItem("high-score") == "36" || localStorage.getItem("high-score") == "45" || localStorage.getItem("high-score") == "46" || localStorage.getItem("high-score") == "55" || localStorage.getItem("high-score") == "56" || localStorage.getItem("high-score") == "65" || localStorage.getItem("high-score") == "66" || localStorage.getItem("high-score") == "75" || localStorage.getItem("high-score") == "76") {
    document.getElementById("leaguelevel").innerHTML = "3";
    document.getElementById("subleaguelevel").innerHTML = "3";
  }else
  if(localStorage.getItem("high-score") == "7" || localStorage.getItem("high-score") == "8" || localStorage.getItem("high-score") == "17" || localStorage.getItem("high-score") == "18" || localStorage.getItem("high-score") == "27" || localStorage.getItem("high-score") == "28" || localStorage.getItem("high-score") == "37" || localStorage.getItem("high-score") == "38" || localStorage.getItem("high-score") == "47" || localStorage.getItem("high-score") == "48" || localStorage.getItem("high-score") == "57" || localStorage.getItem("high-score") == "58" || localStorage.getItem("high-score") == "67" || localStorage.getItem("high-score") == "68" || localStorage.getItem("high-score") == "77" || localStorage.getItem("high-score") == "78") {
    document.getElementById("leaguelevel").innerHTML = "4";
    document.getElementById("subleaguelevel").innerHTML = "4";
  }else
  if(localStorage.getItem("high-score") == "9" || localStorage.getItem("high-score") == "19" || localStorage.getItem("high-score") == "29" || localStorage.getItem("high-score") == "39" || localStorage.getItem("high-score") == "49" || localStorage.getItem("high-score") == "59" || localStorage.getItem("high-score") == "69" || localStorage.getItem("high-score") == "79" || localStorage.getItem("high-score") == "80" || localStorage.getItem("high-score") == "10" || localStorage.getItem("high-score") == "20" || localStorage.getItem("high-score") == "30" || localStorage.getItem("high-score") == "40" || localStorage.getItem("high-score") == "50" || localStorage.getItem("high-score") == "60" || localStorage.getItem("high-score") == "70") {
    document.getElementById("leaguelevel").innerHTML = "5";
    document.getElementById("subleaguelevel").innerHTML = "5";
  }
};
levelsSystem();
function leagueSystem() {
  if(localStorage.getItem("high-score") == "0" || localStorage.getItem("high-score") == null) {
    document.getElementById("leagueImage").classList.add("null-league");
    document.getElementById("subleagueImage").classList.add("null-league");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Non league";
      document.getElementById("subleagueType").innerHTML = "Non league";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Нет лиге";
      document.getElementById("subleagueType").innerHTML = "Нет лиге";
    }
  }else
  if(localStorage.getItem("high-score") == "1" || localStorage.getItem("high-score") == "2" || localStorage.getItem("high-score") == "3" || localStorage.getItem("high-score") == "4" || localStorage.getItem("high-score") == "5" || localStorage.getItem("high-score") == "6" || localStorage.getItem("high-score") == "7" || localStorage.getItem("high-score") == "8" || localStorage.getItem("high-score") == "9" || localStorage.getItem("high-score") == "10") {
    document.getElementById("leagueImage").classList.add("bronze");
    document.getElementById("leagueImage").classList.remove("null-league");
    document.getElementById("subleagueImage").classList.add("bronze");
    document.getElementById("subleagueImage").classList.remove("null-league");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Bronze League";
      document.getElementById("subleagueType").innerHTML = "Bronze League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Бронзовая лига";
      document.getElementById("subleagueTypeleagueType").innerHTML = "Бронзовая лига";
    }
    star.style.color = "#ce8946ff";
    substar.style.color = "#ce8946ff";
  }else
  if(localStorage.getItem("high-score") == "11" || localStorage.getItem("high-score") == "12" || localStorage.getItem("high-score") == "13" || localStorage.getItem("high-score") == "14" || localStorage.getItem("high-score") == "15" || localStorage.getItem("high-score") == "16" || localStorage.getItem("high-score") == "17" || localStorage.getItem("high-score") == "18" || localStorage.getItem("high-score") == "19" || localStorage.getItem("high-score") == "20") {
    document.getElementById("leagueImage").classList.add("silver");
    document.getElementById("leagueImage").classList.remove("bronze");
    document.getElementById("subleagueImage").classList.add("silver");
    document.getElementById("subleagueImage").classList.remove("bronze");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Silver League";
      document.getElementById("subleagueType").innerHTML = "Silver League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Серебряная лига";
      document.getElementById("subleagueType").innerHTML = "Серебряная лига";
    }
    star.style.color = "#c4c4c4ff";
    substar.style.color = "#c4c4c4ff";
  }else
  if(localStorage.getItem("high-score") == "21" || localStorage.getItem("high-score") == "22" || localStorage.getItem("high-score") == "23" || localStorage.getItem("high-score") == "24" || localStorage.getItem("high-score") == "25" || localStorage.getItem("high-score") == "26" || localStorage.getItem("high-score") == "27" || localStorage.getItem("high-score") == "28" || localStorage.getItem("high-score") == "29" || localStorage.getItem("high-score") == "30") {
    document.getElementById("leagueImage").classList.add("goldleague");
    document.getElementById("leagueImage").classList.remove("silver");
    document.getElementById("subleagueImage").classList.add("goldleague");
    document.getElementById("subleagueImage").classList.remove("silver");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Gold League";
      document.getElementById("subleagueType").innerHTML = "Gold League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Золотая лига";
      document.getElementById("subleagueType").innerHTML = "Золотая лига";
    }
    star.style.color = "#efbf04ff";
    substar.style.color = "#efbf04ff";
  }else
  if(localStorage.getItem("high-score") == "31" || localStorage.getItem("high-score") == "32" || localStorage.getItem("high-score") == "33" || localStorage.getItem("high-score") == "34" || localStorage.getItem("high-score") == "35" || localStorage.getItem("high-score") == "36" || localStorage.getItem("high-score") == "37" || localStorage.getItem("high-score") == "38" || localStorage.getItem("high-score") == "39" || localStorage.getItem("high-score") == "40") {
    document.getElementById("leagueImage").classList.add("platinium");
    document.getElementById("leagueImage").classList.remove("goldleague");
    document.getElementById("subleagueImage").classList.add("platinium");
    document.getElementById("subleagueImage").classList.remove("goldleague");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Platinum League";
      document.getElementById("subleagueType").innerHTML = "Platinum League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Платиновая лига";
      document.getElementById("subleagueType").innerHTML = "Платиновая лига";
    }
    star.style.color = "#d9d9d9ff";
    substar.style.color = "#d9d9d9ff";
  }else
  if(localStorage.getItem("high-score") == "41" || localStorage.getItem("high-score") == "42" || localStorage.getItem("high-score") == "43" || localStorage.getItem("high-score") == "44" || localStorage.getItem("high-score") == "45" || localStorage.getItem("high-score") == "46" || localStorage.getItem("high-score") == "47" || localStorage.getItem("high-score") == "48" || localStorage.getItem("high-score") == "49" || localStorage.getItem("high-score") == "50") {
    document.getElementById("leagueImage").classList.add("diamond");
    document.getElementById("leagueImage").classList.remove("platinium");
    document.getElementById("subleagueImage").classList.add("diamond");
    document.getElementById("subleagueImage").classList.remove("platinium");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Diamond League";
      document.getElementById("subleagueType").innerHTML = "Diamond League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Алмазная лига";
      document.getElementById("subleagueType").innerHTML = "Алмазная лига";
    }
    star.style.color = "#D397F8ff";
    substar.style.color = "#D397F8ff";
  }else
  if(localStorage.getItem("high-score") == "51" || localStorage.getItem("high-score") == "52" || localStorage.getItem("high-score") == "53" || localStorage.getItem("high-score") == "54" || localStorage.getItem("high-score") == "55" || localStorage.getItem("high-score") == "56" || localStorage.getItem("high-score") == "57" || localStorage.getItem("high-score") == "58" || localStorage.getItem("high-score") == "59" || localStorage.getItem("high-score") == "60") {
    document.getElementById("leagueImage").classList.add("super");
    document.getElementById("leagueImage").classList.remove("diamond");
    document.getElementById("subleagueImage").classList.add("super");
    document.getElementById("subleagueImage").classList.remove("diamond");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Super League";
      document.getElementById("subleagueType").innerHTML = "Super League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Супер лига";
      document.getElementById("subleagueType").innerHTML = "Супер лига";
    }
    star.style.color = "#FF7518ff";
    substar.style.color = "#FF7518ff";
  }else
  if(localStorage.getItem("high-score") == "61" || localStorage.getItem("high-score") == "62" || localStorage.getItem("high-score") == "63" || localStorage.getItem("high-score") == "64" || localStorage.getItem("high-score") == "65" || localStorage.getItem("high-score") == "66" || localStorage.getItem("high-score") == "67" || localStorage.getItem("high-score") == "68" || localStorage.getItem("high-score") == "69" || localStorage.getItem("high-score") == "70") {
    document.getElementById("leagueImage").classList.add("legendary");
    document.getElementById("leagueImage").classList.remove("super");
    document.getElementById("subleagueImage").classList.add("legendary");
    document.getElementById("subleagueImage").classList.remove("super");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Legendary League";
      document.getElementById("subleagueType").innerHTML = "Legendary League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Легендарная лига";
      document.getElementById("subleagueType").innerHTML = "Легендарная лига";
    }
    star.style.color = "#FF7518ff";
    substar.style.color = "#FF7518ff";
  }else
  if(localStorage.getItem("high-score") == "71" || localStorage.getItem("high-score") == "72" || localStorage.getItem("high-score") == "73" || localStorage.getItem("high-score") == "74" || localStorage.getItem("high-score") == "75" || localStorage.getItem("high-score") == "76" || localStorage.getItem("high-score") == "77" || localStorage.getItem("high-score") == "78" || localStorage.getItem("high-score") == "79" || localStorage.getItem("high-score") == "80") {
    document.getElementById("leagueImage").classList.add("alphaknight");
    document.getElementById("leagueImage").classList.remove("legendary");
    document.getElementById("subleagueImage").classList.add("alphaknight");
    document.getElementById("subleagueImage").classList.remove("legendary");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Alpha Knight";
      document.getElementById("subleagueType").innerHTML = "Alpha Knight";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Альфа Рыцарь";
      document.getElementById("subleagueType").innerHTML = "Альфа Рыцарь";
    }
    star.style.color = "#ffff00ff";
    substar.style.color = "#ffff00ff";
  }
};
leagueSystem();
function changeControllerType() {
  if (document.getElementById("cTypeChenger").checked === true) {
    document.getElementById("applySettings").style.display = "block";
  } else
  if(document.getElementById("cTypeChenger").checked === false) {
    document.getElementById("applySettings").style.display = "block";
  }
};
function loadControllerType() {
  if(localStorage.getItem("controllerTypeDev") === "classic" && navigator.userAgent.match(/mobile/i)) {
    document.getElementById("cTypeChenger").checked = false;
    document.getElementById("btn000").style.display = "block";
    document.getElementById("btn002").style.display = "block";
    document.getElementById("chechboxPausing").style.display = "none";
    document.getElementById("navBtn").style.display = "none";
    document.getElementById("chechboxPausing").style.top = "auto";
    document.getElementById("navBtn").style.top = "auto";
    document.getElementById("btn001").style.position = "relative";
    document.getElementById("btn001").style.bottom = "auto";
    document.getElementById("btn001").style.left = "auto";
    document.getElementById("btn004").style.position = "relative";
    document.getElementById("btn004").style.bottom = "auto";
    document.getElementById("btn004").style.left = "auto";
    document.getElementById("btn003").style.position = "relative";
    document.getElementById("btn003").style.bottom = "auto";
    document.getElementById("btn003").style.right = "auto";
    document.getElementById("btn005").style.position = "relative";
    document.getElementById("btn005").style.bottom = "auto";
    document.getElementById("btn005").style.right = "auto";
    document.getElementById("ccLang").setAttribute("locked", "false");
    document.getElementById("clLang").setAttribute("locked", "false");
    document.getElementById("crLang").setAttribute("locked", "false");
  } else
  if(localStorage.getItem("controllerTypeDev") === "dinamic" && navigator.userAgent.match(/mobile/i)) {
    document.getElementById("cTypeChenger").checked = true;
    document.getElementById("btn000").style.display = "none";
    document.getElementById("btn002").style.display = "none";
    document.getElementById("chechboxPausing").style.display = "block";
    document.getElementById("navBtn").style.display = "block";
    document.getElementById("chechboxPausing").style.top = "0";
    document.getElementById("navBtn").style.top = "0";
    document.getElementById("btn001").style.position = "fixed";
    document.getElementById("btn001").style.bottom = "78px";
    document.getElementById("btn001").style.left = "35px";
    document.getElementById("btn004").style.position = "fixed";
    document.getElementById("btn004").style.bottom = "0";
    document.getElementById("btn004").style.left = "35px";
    document.getElementById("btn003").style.position = "fixed";
    document.getElementById("btn003").style.bottom = "0";
    document.getElementById("btn003").style.right = "108px";
    document.getElementById("btn005").style.position = "fixed";
    document.getElementById("btn005").style.bottom = "0";
    document.getElementById("btn005").style.right = "35px";
    document.getElementById("ccLang").setAttribute("locked", "true");
    document.getElementById("clLang").setAttribute("locked", "true");
    document.getElementById("crLang").setAttribute("locked", "true");
  }
};
loadControllerType();
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 27) {
    if(document.getElementById('menu').style.display === 'block') {
      document.getElementById('menuCloseBtn').click();
    }else{
      document.getElementById('navBtn').click();
    }
  }else
  if (event.keyCode == 32) {
    document.getElementById('chechboxPausing').click();
  }else
  if (event.keyCode == 87) {
    document.getElementById('btn001').click();
  }else
  if (event.keyCode == 83) {
    document.getElementById('btn004').click();
  }else
  if (event.keyCode == 65) {
    document.getElementById('btn003').click();
  }else
  if (event.keyCode == 68) {
    document.getElementById('btn005').click();
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 27) {
    if(document.getElementById('menu').style.display === 'block') {
      document.getElementById('menuCloseBtn').click();
    }else{
      document.getElementById('navBtn').click();
    }
  }else
  if (event.keyCode == 32) {
    document.getElementById('chechboxPausing').click();
  }else
  if (event.keyCode == 87) {
    document.getElementById('btn001').click();
  }else
  if (event.keyCode == 83) {
    document.getElementById('btn004').click();
  }else
  if (event.keyCode == 65) {
    document.getElementById('btn003').click();
  }else
  if (event.keyCode == 68) {
    document.getElementById('btn005').click();
  }
};
function menuPauseWalkSound() {
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").pause();
  }
};
function openProfileCenter() {
  document.getElementById("accenter").style.display = "block";
};
function goToMessenger() {
  window.open('https://m.me/100037328776594?hash=AbbiIv3lRHEaooAd&source=qr_link_share', '_blank');
};
function downloadAlertSystem() {
  var host = "https://";
  var domine = "github.com/";
  var publisher = "ArturVesta/";
  var space = "mnts.snakegame.smc/";
  var fileType = "archive/";
  var refs = "refs/";
  var heads = "heads/";
  var fileName = "main";
  var fileFormat = ".zip";
  window.open(host + domine + publisher + space + fileType + refs + heads + fileName + fileFormat, '_blank');
}
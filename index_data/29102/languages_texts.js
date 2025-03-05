
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
  }else
  if(localStorage.getItem("lang") === "jp") {
    a000.innerHTML = "設定";
    a001.innerHTML = "について";
    a002.innerHTML = "システム";
    a003.innerHTML = "蛇";
    a004.innerHTML = "食べ物";
    a005.innerHTML = "ボード";
    a006.innerHTML = "オーディオ";
    a007.innerHTML = "困難：";
    a008.innerHTML = "普通";
    a009.innerHTML = "難しい";
    a010.innerHTML = "地獄";
    a011.innerHTML = "言語：";
    a012.innerHTML = "アルファシティマップ";
    a013.innerHTML = "オリゴ島の地図";
    a014.innerHTML = "プレイヤー1";
    a015.innerHTML = "プレイヤー2";
    a016.innerHTML = "プレイヤー3";
    a017.innerHTML = "ニャートークン";
    a018.innerHTML = "金";
    a019.innerHTML = "アルファコイン";
    a020.innerHTML = "クリスタル";
    a021.innerHTML = "チケット";
    a022.innerHTML = "クロマティックチケット";
    a023.innerHTML = "プレミアムチケット";
    a024.innerHTML = "音声をミュートする";
    a025.innerHTML = "SFXボリューム";
    a026.innerHTML = "プライバシーポリシー、利用規約";
    a027.innerHTML = "©1997-2025 NetEase, Inc.無断転載禁止";
    a028.innerHTML = "コーディング： " + "MNTS;";
    a029.innerHTML = "ベースコード： から ";
    a030.innerHTML = "スコア： 0";
    a031.innerHTML = "ゲームオーバー！";
    a032.value = "デフォルト";
    a033.value = "適用する";
    a034.innerHTML = "コントローラ：";
    a035.innerHTML = "位置：";
    a036.innerHTML = "中心";
    a037.innerHTML = "左";
    a038.innerHTML = "右";
    a039.innerHTML = "知らせ";
    a041.innerHTML = "バックグラウンドミュージック";
    a042.innerHTML = "音楽";
      a043.classList.add("jp-lang");
      a044.classList.add("jp-lang");
    a045.value = "削除の進行状況";
    a046.innerHTML = "(言語翻訳は100%正確ではない場合があります)";
    a047.innerHTML = "ダイナミックコントローラ";
    a048.classList.add("g-t-jp");
    a049.innerHTML = "蛇";
    a050.innerHTML = "Discordであなたの言語を共有したり、既存の言語を修正したりしましょう";
    a051.innerHTML = "プロフィール センター (ベータ版)";
    a052.innerHTML = "> ニックネーム可能 <";
      a052.style.fontSize = "12px";
    a053.innerHTML = "コーディング日： ";
    a055.innerHTML = "読み込み中…";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = '設定：';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'スタイル：';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = '近日公開予定！ 最新情報をお楽しみに。';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = '海：';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = '始まりへ';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'サービス：';
    }
    document.title = "スネークメカコレクター";
  }
  a054.innerHTML = "Visual Studio Code";
};
languagesContents();
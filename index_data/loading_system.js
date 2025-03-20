let widthcont = 0;
let errorscont = 0;
const format = ".png";
const format2 = ".gif";
const locator = "index_data/29172/";
const locator2 = "index_data/29278/";
const locator3 = "index_data/29278/blue/";
const tasset0 = [
  "alert",
  "alpha_coin",
  "alpha_map",
  "bg_overlay",
  "border",
  "btn_control_dn",
  "btn_control_dn_hover",
  "btn_control_lt",
  "btn_control_lt_hover",
  "btn_control_rt",
  "btn_control_rt_hover",
  "btn_control_up",
  "btn_control_up_hover",
  "btn_function_pe",
  "btn_function_py",
  "button",
  "button_true",
  "changed_bg",
  "checkbox_off",
  "checkbox_on",
  "crystal",
  "cube_bg",
  "download",
  "download_android",
  "download_computer",
  "exit",
  "exit_hover",
  "first_modal_bg",
  "game_over",
  "gold",
  "hard_on",
  "hell_on",
  "icon_0",
  "icon_16",
  "icon_32",
  "icon_48",
  "icon_76",
  "icon_96",
  "icon_120",
  "icon_128",
  "icon_144",
  "icon_152",
  "icon_167",
  "icon_180",
  "icon_192",
  "icon_196",
  "icon_228",
  "icon_256",
  "icon_300",
  "icon_384",
  "icon_512",
  "icon_bg",
  "league_1_bronze",
  "league_2_silver",
  "league_3_gold",
  "league_4_platinum",
  "league_5_diamond",
  "league_6_super",
  "league_7_legendary",
  "league_8_alpha_knight",
  "line",
  "loading_yi_logo_2x",
  "long_button",
  "long_button_hover",
  "meaw_token",
  "menu",
  "new_modal_content",
  "normal_on",
  "null",
  "origo_map",
  "player_1",
  "player_2",
  "player_3",
  "range_bar",
  "range_thumb",
  "selected",
  "tab_horizontal",
  "tab_off",
  "tab_vertical",
  "ticket",
  "ticket_chromatic",
  "ticket_premium",
  "unselected",
  "wrapper_bg",
  "messenger",
  "discord",
  "battery_normal",
  "battery_charging",
  "battery_low",
  "battery_main_normal",
  "battery_main_charging",
  "battery_main_low",
  ///////Langs///////
  "nav_menu_en",
  "nav_menu_ru",
  "nav_menu_jp",
  "nav_menu_chs",
  "nav_menu_cht",
  "nav_menu_ko",
  "nav_menu_en_hover",
  "nav_menu_ru_hover",
  "nav_menu_jp_hover",
  "nav_menu_chs_hover",
  "nav_menu_cht_hover",
  "nav_menu_ko_hover",
  "Google_en",
  "Google_ru",
  "Google_jp",
  "Google_chs",
  "Google_cht",
  "Google_ko"
];
const tasset1 = [
  "16f75a9bdd0bf6"
];
const tasset2 = [
  "default-0",
  "default-1",
  "default-2",
  "default-3",
  "default-4",
  "default-5",
  "default-6",
  "default-7",
  "default-8",
  "default-9",
  "default-10",
  "default-11",
  "default-12",
  "default-13",
  "default-14",
  "default-15",
  "link-0",
  "link-1",
  "link-2",
  "link-3",
  "link-4",
  "link-5",
  "link-6",
  "link-7",
  "link-8",
  "link-9",
  "link-10",
  "link-11",
  "link-12",
  "link-13",
  "link-14",
  "link-15"
];
function testLoadAsset0() {
  setTimeout(function() {
    for(var a = 0; a < tasset0.length; a++) {
      const asset = document.createElement('img');
      asset.src = locator + tasset0[a] + format;
      asset.style.width = "1px";
      asset.style.height = "1px";
      asset.style.opacity = "0";
      asset.addEventListener("load", function() {
        document.getElementById('widther').style.width = widthcont++ + "px";
        toDisplayNone();
      });
      asset.addEventListener("error", function() {
        errorscont++;
        if(localStorage.getItem("lang") === "en") {
          document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        }else
        if(localStorage.getItem("lang") === "ru") {
          document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        }else
        if(localStorage.getItem("lang") === "jp") {
          document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
        }else
        if(localStorage.getItem("lang") === "chs") {
          document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
        }else
        if(localStorage.getItem("lang") === "cht") {
          document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
        }else
        if(localStorage.getItem("lang") === "ko") {
          document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
        }
      });
      document.getElementById("loadedbar").appendChild(asset);
    }
    for(var b = 0; b < tasset1.length; b++) {
      const asset = document.createElement('img');
      asset.src = locator2 + tasset1[b] + format2;
      asset.style.width = "1px";
      asset.style.height = "1px";
      asset.style.opacity = "0";
      asset.addEventListener("load", function() {
        document.getElementById('widther').style.width = widthcont++ + "px";
        toDisplayNone();
      });
      asset.addEventListener("error", function() {
        errorscont++;
        if(localStorage.getItem("lang") === "en") {
          document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        }else
        if(localStorage.getItem("lang") === "ru") {
          document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        }else
        if(localStorage.getItem("lang") === "jp") {
          document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
        }else
        if(localStorage.getItem("lang") === "chs") {
          document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
        }else
        if(localStorage.getItem("lang") === "cht") {
          document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
        }else
        if(localStorage.getItem("lang") === "ko") {
          document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
        }
      });
      document.getElementById("loadedbar").appendChild(asset);
    }
    for(var c = 0; c < tasset2.length; c++) {
      const asset = document.createElement('img');
      asset.src = locator3 + tasset2[c] + format;
      asset.style.width = "1px";
      asset.style.height = "1px";
      asset.style.opacity = "0";
      asset.addEventListener("load", function() {
        document.getElementById('widther').style.width = widthcont++ + "px";
        toDisplayNone();
      });
      asset.addEventListener("error", function() {
        errorscont++;
        if(localStorage.getItem("lang") === "en") {
          document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        }else
        if(localStorage.getItem("lang") === "ru") {
          document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        }else
        if(localStorage.getItem("lang") === "jp") {
          document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
        }else
        if(localStorage.getItem("lang") === "chs") {
          document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
        }else
        if(localStorage.getItem("lang") === "cht") {
          document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
        }else
        if(localStorage.getItem("lang") === "ko") {
          document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
        }
      });
      document.getElementById("loadedbar").appendChild(asset);
    }
  },1000);
}
function toDisplayNone() {
  setTimeout(function() {
  if(document.getElementById('widther').style.width === "142px") {
    alertAccept();
    document.getElementById("loading").style.display = "none";
  }
  },1500);
}
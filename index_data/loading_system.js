let widthcont = 0;
const format = ".png";
const format2 = ".gif";
const locator = "index_data/29172/";
const locator2 = "index_data/29278/";
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
  "nav_menu_en",
  "nav_menu_ru",
  "nav_menu_jp",
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
  "wrapper_bg"
];
const tasset1 = [
  "16f75a9bdd0bf6"
];
const tasset2 = [
  "Google_en",
  "Google_ru",
  "Google_jp",
  "messenger",
  "discord"
];
function testLoadAsset0() {
  setTimeout(function() {
    for(var a = 0; a < tasset0.length; a++) {
      const asset = document.createElement('img');
      asset.src = locator + tasset0[a] + format;
      asset.style.width = "20px";
      asset.style.height = "20px";
      asset.style.opacity = "0";
      asset.addEventListener("load", function() {
        document.getElementById('widther').style.width = widthcont++ + "px";
        toDisplayNone();
      });
      document.getElementById("loadedbar").appendChild(asset);
    }
    for(var b = 0; b < tasset1.length; b++) {
      const asset = document.createElement('img');
      asset.src = locator2 + tasset1[b] + format2;
      asset.style.width = "20px";
      asset.style.height = "20px";
      asset.style.opacity = "0";
      asset.addEventListener("load", function() {
        document.getElementById('widther').style.width = widthcont++ + "px";
        toDisplayNone();
      });
      document.getElementById("loadedbar").appendChild(asset);
    }
    for(var c = 0; c < tasset2.length; c++) {
      const asset = document.createElement('img');
      asset.src = tasset2[c] + format;
      asset.style.width = "20px";
      asset.style.height = "20px";
      asset.style.opacity = "0";
      asset.addEventListener("load", function() {
        document.getElementById('widther').style.width = widthcont++ + "px";
        toDisplayNone();
      });
      document.getElementById("loadedbar").appendChild(asset);
    }
  },1000);
}
function toDisplayNone() {
  setTimeout(function() {
  if(document.getElementById('widther').style.width === "92px") {
    alertAccept();
    document.getElementById("loading").style.display = "none";
  }
  },1500);
}
var GHPATH = '/mnts.snakegame.smc';
var APP_PREFIX = 'gppwa_';
let VERSIONNAME = "0.3.4";
var VERSION = VERSIONNAME;
var CACHE_NAME = VERSIONNAME;
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index_data`,
  `${GHPATH}/index_data/29102`,
  `${GHPATH}/index_data/29102/acceleration_folding.js`,
  `${GHPATH}/index_data/29102/alborada_walk.js`,
  `${GHPATH}/index_data/29102/alice_the_dreamer.js`,
  `${GHPATH}/index_data/29102/alice_the_dreamer_accompaniment.js`,
  `${GHPATH}/index_data/29102/all_or_nothing.js`,
  `${GHPATH}/index_data/29102/all_or_nothing_ending_version.js`,
  `${GHPATH}/index_data/29102/andromeda_walk.js`,
  `${GHPATH}/index_data/29102/arthur_walk.js`,
  `${GHPATH}/index_data/29102/aurora_walk.js`,
  `${GHPATH}/index_data/29102/backtracking_journey.js`,
  `${GHPATH}/index_data/29102/before_the_storm.js`,
  `${GHPATH}/index_data/29102/boltus_walk.js`,
  `${GHPATH}/index_data/29102/cancel.js`,
  `${GHPATH}/index_data/29102/caramel_walk.js`,
  `${GHPATH}/index_data/29102/close_settings.js`,
  `${GHPATH}/index_data/29102/default_click.js`,
  `${GHPATH}/index_data/29102/disillusionment_melody.js`,
  `${GHPATH}/index_data/29102/doomlight_walk.js`,
  `${GHPATH}/index_data/29102/explosive_halo.js`,
  `${GHPATH}/index_data/29102/firefox_walk.js`,
  `${GHPATH}/index_data/29102/firestar.js`,
  `${GHPATH}/index_data/29102/firestar_walk.js`,
  `${GHPATH}/index_data/29102/flamenco_walk.js`,
  `${GHPATH}/index_data/29102/future_bounce.js`,
  `${GHPATH}/index_data/29102/gabriel_walk.js`,
  `${GHPATH}/index_data/29102/hotsteel_walk.js`,
  `${GHPATH}/index_data/29102/hurricane_walk.js`,
  `${GHPATH}/index_data/29102/interlude_mojito.js`,
  `${GHPATH}/index_data/29102/jojo_walk.js`,
  `${GHPATH}/index_data/29102/joyful_passion.js`,
  `${GHPATH}/index_data/29102/local_movement.js`,
  `${GHPATH}/index_data/29102/lunar.js`,
  `${GHPATH}/index_data/29102/michael_walk.js`,
  `${GHPATH}/index_data/29102/neutron_star_walk.js`,
  `${GHPATH}/index_data/29102/northern_knight_walk.js`,
  `${GHPATH}/index_data/29102/nyan_nyan.js`,
  `${GHPATH}/index_data/29102/open_settings.js`,
  `${GHPATH}/index_data/29102/play_walk.js`,
  `${GHPATH}/index_data/29102/player_walk.js`,
  `${GHPATH}/index_data/29102/prelude_of_war.js`,
  `${GHPATH}/index_data/29102/preparation_break.js`,
  `${GHPATH}/index_data/29102/pulsar_walk.js`,
  `${GHPATH}/index_data/29102/ranger_walk.js`,
  `${GHPATH}/index_data/29102/raven_walk.js`,
  `${GHPATH}/index_data/29102/skylark_walk.js`,
  `${GHPATH}/index_data/29102/smc_memory_2022.js`,
  `${GHPATH}/index_data/29102/smc_memory_2023.js`,
  `${GHPATH}/index_data/29102/snow_mirage_walk.js`,
  `${GHPATH}/index_data/29102/stable_and_upbeat.js`,
  `${GHPATH}/index_data/29102/tab_select.js`,
  `${GHPATH}/index_data/29102/throbbing_beat.js`,
  `${GHPATH}/index_data/29102/trio_of_enders_walk.js`,
  `${GHPATH}/index_data/29102/ultra_beast_force.js`,
  `${GHPATH}/index_data/29102/ventorus_walk.js`,
  `${GHPATH}/index_data/29102/item_took.js`,
  `${GHPATH}/index_data/29102/notice_close.js`,
  `${GHPATH}/index_data/29102/languages.js`,
  `${GHPATH}/index_data/29102/languages_texts.js`,
  `${GHPATH}/index_data/29172`,
  `${GHPATH}/index_data/29172/alert.png`,
  `${GHPATH}/index_data/29172/alpha_coin.png`,
  `${GHPATH}/index_data/29172/alpha_map.png`,
  `${GHPATH}/index_data/29172/bg_overlay.png`,
  `${GHPATH}/index_data/29172/border.png`,
  `${GHPATH}/index_data/29172/btn_control_dn.png`,
  `${GHPATH}/index_data/29172/btn_control_dn_hover.png`,
  `${GHPATH}/index_data/29172/btn_control_lt.png`,
  `${GHPATH}/index_data/29172/btn_control_lt_hover.png`,
  `${GHPATH}/index_data/29172/btn_control_rt.png`,
  `${GHPATH}/index_data/29172/btn_control_rt_hover.png`,
  `${GHPATH}/index_data/29172/btn_control_up.png`,
  `${GHPATH}/index_data/29172/btn_control_up_hover.png`,
  `${GHPATH}/index_data/29172/btn_function_pe.png`,
  `${GHPATH}/index_data/29172/btn_function_py.png`,
  `${GHPATH}/index_data/29172/button.png`,
  `${GHPATH}/index_data/29172/button_true.png`,
  `${GHPATH}/index_data/29172/changed_bg.png`,
  `${GHPATH}/index_data/29172/checkbox_off.png`,
  `${GHPATH}/index_data/29172/checkbox_on.png`,
  `${GHPATH}/index_data/29172/crystal.png`,
  `${GHPATH}/index_data/29172/cube_bg.png`,
  `${GHPATH}/index_data/29172/download.png`,
  `${GHPATH}/index_data/29172/download_android.png`,
  `${GHPATH}/index_data/29172/download_computer.png`,
  `${GHPATH}/index_data/29172/exit.png`,
  `${GHPATH}/index_data/29172/exit_hover.png`,
  `${GHPATH}/index_data/29172/first_modal_bg.png`,
  `${GHPATH}/index_data/29172/game_over.png`,
  `${GHPATH}/index_data/29172/gold.png`,
  `${GHPATH}/index_data/29172/hard_on.png`,
  `${GHPATH}/index_data/29172/hell_on.png`,
  `${GHPATH}/index_data/29172/icon_0.png`,
  `${GHPATH}/index_data/29172/icon_16.png`,
  `${GHPATH}/index_data/29172/icon_32.png`,
  `${GHPATH}/index_data/29172/icon_48.png`,
  `${GHPATH}/index_data/29172/icon_76.png`,
  `${GHPATH}/index_data/29172/icon_96.png`,
  `${GHPATH}/index_data/29172/icon_120.png`,
  `${GHPATH}/index_data/29172/icon_128.png`,
  `${GHPATH}/index_data/29172/icon_144.png`,
  `${GHPATH}/index_data/29172/icon_152.png`,
  `${GHPATH}/index_data/29172/icon_167.png`,
  `${GHPATH}/index_data/29172/icon_180.png`,
  `${GHPATH}/index_data/29172/icon_192.png`,
  `${GHPATH}/index_data/29172/icon_196.png`,
  `${GHPATH}/index_data/29172/icon_228.png`,
  `${GHPATH}/index_data/29172/icon_256.png`,
  `${GHPATH}/index_data/29172/icon_300.png`,
  `${GHPATH}/index_data/29172/icon_384.png`,
  `${GHPATH}/index_data/29172/icon_512.png`,
  `${GHPATH}/index_data/29172/icon_bg.png`,
  `${GHPATH}/index_data/29172/league_1_bronze.png`,
  `${GHPATH}/index_data/29172/league_2_silver.png`,
  `${GHPATH}/index_data/29172/league_3_gold.png`,
  `${GHPATH}/index_data/29172/league_4_platinum.png`,
  `${GHPATH}/index_data/29172/league_5_diamond.png`,
  `${GHPATH}/index_data/29172/league_6_super.png`,
  `${GHPATH}/index_data/29172/league_7_legendary.png`,
  `${GHPATH}/index_data/29172/league_8_alpha_knight.png`,
  `${GHPATH}/index_data/29172/line.png`,
  `${GHPATH}/index_data/29172/loading_yi_logo_2x.png`,
  `${GHPATH}/index_data/29172/long_button.png`,
  `${GHPATH}/index_data/29172/long_button_hover.png`,
  `${GHPATH}/index_data/29172/meaw_token.png`,
  `${GHPATH}/index_data/29172/menu.png`,
  `${GHPATH}/index_data/29172/nav_menu_en.png`,
  `${GHPATH}/index_data/29172/nav_menu_ru.png`,
  `${GHPATH}/index_data/29172/nav_menu_jp.png`,
  `${GHPATH}/index_data/29172/nav_menu_chs.png`,
  `${GHPATH}/index_data/29172/nav_menu_cht.png`,
  `${GHPATH}/index_data/29172/nav_menu_ko.png`,
  `${GHPATH}/index_data/29172/Google_en.png`,
  `${GHPATH}/index_data/29172/Google_ru.png`,
  `${GHPATH}/index_data/29172/Google_jp.png`,
  `${GHPATH}/index_data/29172/Google_chs.png`,
  `${GHPATH}/index_data/29172/Google_cht.png`,
  `${GHPATH}/index_data/29172/Google_ko.png`,
  `${GHPATH}/index_data/29172/nav_menu_en_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_ru_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_jp_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_chs_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_cht_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_ko_hover.png`,
  `${GHPATH}/index_data/29172/new_modal_content.png`,
  `${GHPATH}/index_data/29172/normal_on.png`,
  `${GHPATH}/index_data/29172/null.png`,
  `${GHPATH}/index_data/29172/origo_map.png`,
  `${GHPATH}/index_data/29172/player_1.png`,
  `${GHPATH}/index_data/29172/player_2.png`,
  `${GHPATH}/index_data/29172/player_3.png`,
  `${GHPATH}/index_data/29172/range_bar.png`,
  `${GHPATH}/index_data/29172/range_thumb.png`,
  `${GHPATH}/index_data/29172/selected.png`,
  `${GHPATH}/index_data/29172/tab_horizontal.png`,
  `${GHPATH}/index_data/29172/tab_off.png`,
  `${GHPATH}/index_data/29172/tab_vertical.png`,
  `${GHPATH}/index_data/29172/ticket.png`,
  `${GHPATH}/index_data/29172/ticket_chromatic.png`,
  `${GHPATH}/index_data/29172/ticket_premium.png`,
  `${GHPATH}/index_data/29172/unselected.png`,
  `${GHPATH}/index_data/29172/wrapper_bg.png`,
  `${GHPATH}/index_data/29172/messenger.png`,
  `${GHPATH}/index_data/29172/discord.png`,
  `${GHPATH}/index_data/29172/battery_normal.png`,
  `${GHPATH}/index_data/29172/battery_charging.png`,
  `${GHPATH}/index_data/29172/battery_low.png`,
  `${GHPATH}/index_data/29172/battery_main_normal.png`,
  `${GHPATH}/index_data/29172/battery_main_charging.png`,
  `${GHPATH}/index_data/29172/battery_main_low.png`,
  `${GHPATH}/index_data/29208`,
  `${GHPATH}/index_data/29208/acceleration_folding.mp3`,
  `${GHPATH}/index_data/29208/alborada_walk.mp3`,
  `${GHPATH}/index_data/29208/alice_the_dreamer.mp3`,
  `${GHPATH}/index_data/29208/alice_the_dreamer_accompaniment.mp3`,
  `${GHPATH}/index_data/29208/all_or_nothing.mp3`,
  `${GHPATH}/index_data/29208/all_or_nothing_ending_version.mp3`,
  `${GHPATH}/index_data/29208/andromeda_walk.mp3`,
  `${GHPATH}/index_data/29208/arthur_walk.mp3`,
  `${GHPATH}/index_data/29208/aurora_walk.mp3`,
  `${GHPATH}/index_data/29208/backtracking_journey.mp3`,
  `${GHPATH}/index_data/29208/before_the_storm.mp3`,
  `${GHPATH}/index_data/29208/boltus_walk.mp3`,
  `${GHPATH}/index_data/29208/cancel.mp3`,
  `${GHPATH}/index_data/29208/caramel_walk.mp3`,
  `${GHPATH}/index_data/29208/close_settings.mp3`,
  `${GHPATH}/index_data/29208/default_press.mp3`,
  `${GHPATH}/index_data/29208/disillusionment_melody.mp3`,
  `${GHPATH}/index_data/29208/doomlight_walk.mp3`,
  `${GHPATH}/index_data/29208/explosive_halo.mp3`,
  `${GHPATH}/index_data/29208/firefox_walk.mp3`,
  `${GHPATH}/index_data/29208/firestar.mp3`,
  `${GHPATH}/index_data/29208/firestar_walk.mp3`,
  `${GHPATH}/index_data/29208/flamenco_walk.mp3`,
  `${GHPATH}/index_data/29208/future_bounce.mp3`,
  `${GHPATH}/index_data/29208/gabriel_walk.mp3`,
  `${GHPATH}/index_data/29208/hotsteel_walk.mp3`,
  `${GHPATH}/index_data/29208/hurricane_walk.mp3`,
  `${GHPATH}/index_data/29208/interlude_mojito.mp3`,
  `${GHPATH}/index_data/29208/jojo_walk.mp3`,
  `${GHPATH}/index_data/29208/joyful_passion.mp3`,
  `${GHPATH}/index_data/29208/lunar.mp3`,
  `${GHPATH}/index_data/29208/michael_walk.mp3`,
  `${GHPATH}/index_data/29208/neutron_star_walk.mp3`,
  `${GHPATH}/index_data/29208/northern_knight_walk.mp3`,
  `${GHPATH}/index_data/29208/nyan_nyan.mp3`,
  `${GHPATH}/index_data/29208/open_settings.mp3`,
  `${GHPATH}/index_data/29208/player_walk.mp3`,
  `${GHPATH}/index_data/29208/prelude_of_war.mp3`,
  `${GHPATH}/index_data/29208/preparation_break.mp3`,
  `${GHPATH}/index_data/29208/pulsar_walk.mp3`,
  `${GHPATH}/index_data/29208/ranger_walk.mp3`,
  `${GHPATH}/index_data/29208/raven_walk.mp3`,
  `${GHPATH}/index_data/29208/skylark_walk.mp3`,
  `${GHPATH}/index_data/29208/smc_memory_2022.mp3`,
  `${GHPATH}/index_data/29208/smc_memory_2023.mp3`,
  `${GHPATH}/index_data/29208/snow_mirage_walk.mp3`,
  `${GHPATH}/index_data/29208/stable_and_upbeat.mp3`,
  `${GHPATH}/index_data/29208/tab_select.mp3`,
  `${GHPATH}/index_data/29208/throbbing_beat.mp3`,
  `${GHPATH}/index_data/29208/trio_of_enders_walk.mp3`,
  `${GHPATH}/index_data/29208/ultra_beast_force.mp3`,
  `${GHPATH}/index_data/29208/ventorus_walk.mp3`,
  `${GHPATH}/index_data/29208/item_took.mp3`,
  `${GHPATH}/index_data/29208/notice_close.mp3`,
  `${GHPATH}/index_data/69326`,
  `${GHPATH}/index_data/69326/MiSans.ttf`,
  `${GHPATH}/index_data/29278`,
  `${GHPATH}/index_data/29278/16f75a9bdd0bf6.gif`,
  `${GHPATH}/index_data/29278/blue`,
  `${GHPATH}/index_data/29278/blue/default-0.png`,
  `${GHPATH}/index_data/29278/blue/default-1.png`,
  `${GHPATH}/index_data/29278/blue/default-2.png`,
  `${GHPATH}/index_data/29278/blue/default-3.png`,
  `${GHPATH}/index_data/29278/blue/default-4.png`,
  `${GHPATH}/index_data/29278/blue/default-5.png`,
  `${GHPATH}/index_data/29278/blue/default-6.png`,
  `${GHPATH}/index_data/29278/blue/default-7.png`,
  `${GHPATH}/index_data/29278/blue/default-8.png`,
  `${GHPATH}/index_data/29278/blue/default-9.png`,
  `${GHPATH}/index_data/29278/blue/default-10.png`,
  `${GHPATH}/index_data/29278/blue/default-11.png`,
  `${GHPATH}/index_data/29278/blue/default-12.png`,
  `${GHPATH}/index_data/29278/blue/default-13.png`,
  `${GHPATH}/index_data/29278/blue/default-14.png`,
  `${GHPATH}/index_data/29278/blue/default-15.png`,
  `${GHPATH}/index_data/29278/blue/link-0.png`,
  `${GHPATH}/index_data/29278/blue/link-1.png`,
  `${GHPATH}/index_data/29278/blue/link-2.png`,
  `${GHPATH}/index_data/29278/blue/link-3.png`,
  `${GHPATH}/index_data/29278/blue/link-4.png`,
  `${GHPATH}/index_data/29278/blue/link-5.png`,
  `${GHPATH}/index_data/29278/blue/link-6.png`,
  `${GHPATH}/index_data/29278/blue/link-7.png`,
  `${GHPATH}/index_data/29278/blue/link-8.png`,
  `${GHPATH}/index_data/29278/blue/link-9.png`,
  `${GHPATH}/index_data/29278/blue/link-10.png`,
  `${GHPATH}/index_data/29278/blue/link-11.png`,
  `${GHPATH}/index_data/29278/blue/link-12.png`,
  `${GHPATH}/index_data/29278/blue/link-13.png`,
  `${GHPATH}/index_data/29278/blue/link-14.png`,
  `${GHPATH}/index_data/29278/blue/link-15.png`,
  `${GHPATH}/index_data/animations.css`,
  `${GHPATH}/index_data/scripts.js`,
  `${GHPATH}/index_data/scripts_2.js`,
  `${GHPATH}/index_data/styles.css`,
  `${GHPATH}/index_data/system.js`,
  `${GHPATH}/index_data/loading_system.js`,
  `${GHPATH}/index.html`,
  `${GHPATH}/manifest.webmanifest`
];
var CacheURLS = [
  `${GHPATH}/`,
  `${GHPATH}/index_data`,
  `${GHPATH}/index_data/29102`,
  `${GHPATH}/index_data/29102/acceleration_folding.js`,
  `${GHPATH}/index_data/29102/alborada_walk.js`,
  `${GHPATH}/index_data/29102/alice_the_dreamer.js`,
  `${GHPATH}/index_data/29102/alice_the_dreamer_accompaniment.js`,
  `${GHPATH}/index_data/29102/all_or_nothing.js`,
  `${GHPATH}/index_data/29102/all_or_nothing_ending_version.js`,
  `${GHPATH}/index_data/29102/andromeda_walk.js`,
  `${GHPATH}/index_data/29102/arthur_walk.js`,
  `${GHPATH}/index_data/29102/aurora_walk.js`,
  `${GHPATH}/index_data/29102/backtracking_journey.js`,
  `${GHPATH}/index_data/29102/before_the_storm.js`,
  `${GHPATH}/index_data/29102/boltus_walk.js`,
  `${GHPATH}/index_data/29102/cancel.js`,
  `${GHPATH}/index_data/29102/caramel_walk.js`,
  `${GHPATH}/index_data/29102/close_settings.js`,
  `${GHPATH}/index_data/29102/default_click.js`,
  `${GHPATH}/index_data/29102/disillusionment_melody.js`,
  `${GHPATH}/index_data/29102/doomlight_walk.js`,
  `${GHPATH}/index_data/29102/explosive_halo.js`,
  `${GHPATH}/index_data/29102/firefox_walk.js`,
  `${GHPATH}/index_data/29102/firestar.js`,
  `${GHPATH}/index_data/29102/firestar_walk.js`,
  `${GHPATH}/index_data/29102/flamenco_walk.js`,
  `${GHPATH}/index_data/29102/future_bounce.js`,
  `${GHPATH}/index_data/29102/gabriel_walk.js`,
  `${GHPATH}/index_data/29102/hotsteel_walk.js`,
  `${GHPATH}/index_data/29102/hurricane_walk.js`,
  `${GHPATH}/index_data/29102/interlude_mojito.js`,
  `${GHPATH}/index_data/29102/jojo_walk.js`,
  `${GHPATH}/index_data/29102/joyful_passion.js`,
  `${GHPATH}/index_data/29102/local_movement.js`,
  `${GHPATH}/index_data/29102/lunar.js`,
  `${GHPATH}/index_data/29102/michael_walk.js`,
  `${GHPATH}/index_data/29102/neutron_star_walk.js`,
  `${GHPATH}/index_data/29102/northern_knight_walk.js`,
  `${GHPATH}/index_data/29102/nyan_nyan.js`,
  `${GHPATH}/index_data/29102/open_settings.js`,
  `${GHPATH}/index_data/29102/play_walk.js`,
  `${GHPATH}/index_data/29102/player_walk.js`,
  `${GHPATH}/index_data/29102/prelude_of_war.js`,
  `${GHPATH}/index_data/29102/preparation_break.js`,
  `${GHPATH}/index_data/29102/pulsar_walk.js`,
  `${GHPATH}/index_data/29102/ranger_walk.js`,
  `${GHPATH}/index_data/29102/raven_walk.js`,
  `${GHPATH}/index_data/29102/skylark_walk.js`,
  `${GHPATH}/index_data/29102/smc_memory_2022.js`,
  `${GHPATH}/index_data/29102/smc_memory_2023.js`,
  `${GHPATH}/index_data/29102/snow_mirage_walk.js`,
  `${GHPATH}/index_data/29102/stable_and_upbeat.js`,
  `${GHPATH}/index_data/29102/tab_select.js`,
  `${GHPATH}/index_data/29102/throbbing_beat.js`,
  `${GHPATH}/index_data/29102/trio_of_enders_walk.js`,
  `${GHPATH}/index_data/29102/ultra_beast_force.js`,
  `${GHPATH}/index_data/29102/ventorus_walk.js`,
  `${GHPATH}/index_data/29102/item_took.js`,
  `${GHPATH}/index_data/29102/notice_close.js`,
  `${GHPATH}/index_data/29102/languages.js`,
  `${GHPATH}/index_data/29102/languages_texts.js`,
  `${GHPATH}/index_data/29172`,
  `${GHPATH}/index_data/29172/alert.png`,
  `${GHPATH}/index_data/29172/alpha_coin.png`,
  `${GHPATH}/index_data/29172/alpha_map.png`,
  `${GHPATH}/index_data/29172/bg_overlay.png`,
  `${GHPATH}/index_data/29172/border.png`,
  `${GHPATH}/index_data/29172/btn_control_dn.png`,
  `${GHPATH}/index_data/29172/btn_control_dn_hover.png`,
  `${GHPATH}/index_data/29172/btn_control_lt.png`,
  `${GHPATH}/index_data/29172/btn_control_lt_hover.png`,
  `${GHPATH}/index_data/29172/btn_control_rt.png`,
  `${GHPATH}/index_data/29172/btn_control_rt_hover.png`,
  `${GHPATH}/index_data/29172/btn_control_up.png`,
  `${GHPATH}/index_data/29172/btn_control_up_hover.png`,
  `${GHPATH}/index_data/29172/btn_function_pe.png`,
  `${GHPATH}/index_data/29172/btn_function_py.png`,
  `${GHPATH}/index_data/29172/button.png`,
  `${GHPATH}/index_data/29172/button_true.png`,
  `${GHPATH}/index_data/29172/changed_bg.png`,
  `${GHPATH}/index_data/29172/checkbox_off.png`,
  `${GHPATH}/index_data/29172/checkbox_on.png`,
  `${GHPATH}/index_data/29172/crystal.png`,
  `${GHPATH}/index_data/29172/cube_bg.png`,
  `${GHPATH}/index_data/29172/download.png`,
  `${GHPATH}/index_data/29172/download_android.png`,
  `${GHPATH}/index_data/29172/download_computer.png`,
  `${GHPATH}/index_data/29172/exit.png`,
  `${GHPATH}/index_data/29172/exit_hover.png`,
  `${GHPATH}/index_data/29172/first_modal_bg.png`,
  `${GHPATH}/index_data/29172/game_over.png`,
  `${GHPATH}/index_data/29172/gold.png`,
  `${GHPATH}/index_data/29172/hard_on.png`,
  `${GHPATH}/index_data/29172/hell_on.png`,
  `${GHPATH}/index_data/29172/icon_0.png`,
  `${GHPATH}/index_data/29172/icon_16.png`,
  `${GHPATH}/index_data/29172/icon_32.png`,
  `${GHPATH}/index_data/29172/icon_48.png`,
  `${GHPATH}/index_data/29172/icon_76.png`,
  `${GHPATH}/index_data/29172/icon_96.png`,
  `${GHPATH}/index_data/29172/icon_120.png`,
  `${GHPATH}/index_data/29172/icon_128.png`,
  `${GHPATH}/index_data/29172/icon_144.png`,
  `${GHPATH}/index_data/29172/icon_152.png`,
  `${GHPATH}/index_data/29172/icon_167.png`,
  `${GHPATH}/index_data/29172/icon_180.png`,
  `${GHPATH}/index_data/29172/icon_192.png`,
  `${GHPATH}/index_data/29172/icon_196.png`,
  `${GHPATH}/index_data/29172/icon_228.png`,
  `${GHPATH}/index_data/29172/icon_256.png`,
  `${GHPATH}/index_data/29172/icon_300.png`,
  `${GHPATH}/index_data/29172/icon_384.png`,
  `${GHPATH}/index_data/29172/icon_512.png`,
  `${GHPATH}/index_data/29172/icon_bg.png`,
  `${GHPATH}/index_data/29172/league_1_bronze.png`,
  `${GHPATH}/index_data/29172/league_2_silver.png`,
  `${GHPATH}/index_data/29172/league_3_gold.png`,
  `${GHPATH}/index_data/29172/league_4_platinum.png`,
  `${GHPATH}/index_data/29172/league_5_diamond.png`,
  `${GHPATH}/index_data/29172/league_6_super.png`,
  `${GHPATH}/index_data/29172/league_7_legendary.png`,
  `${GHPATH}/index_data/29172/league_8_alpha_knight.png`,
  `${GHPATH}/index_data/29172/line.png`,
  `${GHPATH}/index_data/29172/loading_yi_logo_2x.png`,
  `${GHPATH}/index_data/29172/long_button.png`,
  `${GHPATH}/index_data/29172/long_button_hover.png`,
  `${GHPATH}/index_data/29172/meaw_token.png`,
  `${GHPATH}/index_data/29172/menu.png`,
  `${GHPATH}/index_data/29172/nav_menu_en.png`,
  `${GHPATH}/index_data/29172/nav_menu_ru.png`,
  `${GHPATH}/index_data/29172/nav_menu_jp.png`,
  `${GHPATH}/index_data/29172/nav_menu_chs.png`,
  `${GHPATH}/index_data/29172/nav_menu_cht.png`,
  `${GHPATH}/index_data/29172/nav_menu_ko.png`,
  `${GHPATH}/index_data/29172/nav_menu_en_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_ru_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_jp_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_chs_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_cht_hover.png`,
  `${GHPATH}/index_data/29172/nav_menu_ko_hover.png`,
  `${GHPATH}/index_data/29172/new_modal_content.png`,
  `${GHPATH}/index_data/29172/normal_on.png`,
  `${GHPATH}/index_data/29172/null.png`,
  `${GHPATH}/index_data/29172/origo_map.png`,
  `${GHPATH}/index_data/29172/player_1.png`,
  `${GHPATH}/index_data/29172/player_2.png`,
  `${GHPATH}/index_data/29172/player_3.png`,
  `${GHPATH}/index_data/29172/range_bar.png`,
  `${GHPATH}/index_data/29172/range_thumb.png`,
  `${GHPATH}/index_data/29172/selected.png`,
  `${GHPATH}/index_data/29172/tab_horizontal.png`,
  `${GHPATH}/index_data/29172/tab_off.png`,
  `${GHPATH}/index_data/29172/tab_vertical.png`,
  `${GHPATH}/index_data/29172/ticket.png`,
  `${GHPATH}/index_data/29172/ticket_chromatic.png`,
  `${GHPATH}/index_data/29172/ticket_premium.png`,
  `${GHPATH}/index_data/29172/unselected.png`,
  `${GHPATH}/index_data/29172/wrapper_bg.png`,
  `${GHPATH}/index_data/29172/Google_en.png`,
  `${GHPATH}/index_data/29172/Google_ru.png`,
  `${GHPATH}/index_data/29172/Google_jp.png`,
  `${GHPATH}/index_data/29172/Google_chs.png`,
  `${GHPATH}/index_data/29172/Google_cht.png`,
  `${GHPATH}/index_data/29172/Google_ko.png`,
  `${GHPATH}/index_data/29172/messenger.png`,
  `${GHPATH}/index_data/29172/discord.png`,
  `${GHPATH}/index_data/29172/battery_normal.png`,
  `${GHPATH}/index_data/29172/battery_charging.png`,
  `${GHPATH}/index_data/29172/battery_low.png`,
  `${GHPATH}/index_data/29172/battery_main_normal.png`,
  `${GHPATH}/index_data/29172/battery_main_charging.png`,
  `${GHPATH}/index_data/29172/battery_main_low.png`,
  `${GHPATH}/index_data/29208`,
  `${GHPATH}/index_data/29208/acceleration_folding.mp3`,
  `${GHPATH}/index_data/29208/alborada_walk.mp3`,
  `${GHPATH}/index_data/29208/alice_the_dreamer.mp3`,
  `${GHPATH}/index_data/29208/alice_the_dreamer_accompaniment.mp3`,
  `${GHPATH}/index_data/29208/all_or_nothing.mp3`,
  `${GHPATH}/index_data/29208/all_or_nothing_ending_version.mp3`,
  `${GHPATH}/index_data/29208/andromeda_walk.mp3`,
  `${GHPATH}/index_data/29208/arthur_walk.mp3`,
  `${GHPATH}/index_data/29208/aurora_walk.mp3`,
  `${GHPATH}/index_data/29208/backtracking_journey.mp3`,
  `${GHPATH}/index_data/29208/before_the_storm.mp3`,
  `${GHPATH}/index_data/29208/boltus_walk.mp3`,
  `${GHPATH}/index_data/29208/cancel.mp3`,
  `${GHPATH}/index_data/29208/caramel_walk.mp3`,
  `${GHPATH}/index_data/29208/close_settings.mp3`,
  `${GHPATH}/index_data/29208/default_press.mp3`,
  `${GHPATH}/index_data/29208/disillusionment_melody.mp3`,
  `${GHPATH}/index_data/29208/doomlight_walk.mp3`,
  `${GHPATH}/index_data/29208/explosive_halo.mp3`,
  `${GHPATH}/index_data/29208/firefox_walk.mp3`,
  `${GHPATH}/index_data/29208/firestar.mp3`,
  `${GHPATH}/index_data/29208/firestar_walk.mp3`,
  `${GHPATH}/index_data/29208/flamenco_walk.mp3`,
  `${GHPATH}/index_data/29208/future_bounce.mp3`,
  `${GHPATH}/index_data/29208/gabriel_walk.mp3`,
  `${GHPATH}/index_data/29208/hotsteel_walk.mp3`,
  `${GHPATH}/index_data/29208/hurricane_walk.mp3`,
  `${GHPATH}/index_data/29208/interlude_mojito.mp3`,
  `${GHPATH}/index_data/29208/jojo_walk.mp3`,
  `${GHPATH}/index_data/29208/joyful_passion.mp3`,
  `${GHPATH}/index_data/29208/lunar.mp3`,
  `${GHPATH}/index_data/29208/michael_walk.mp3`,
  `${GHPATH}/index_data/29208/neutron_star_walk.mp3`,
  `${GHPATH}/index_data/29208/northern_knight_walk.mp3`,
  `${GHPATH}/index_data/29208/nyan_nyan.mp3`,
  `${GHPATH}/index_data/29208/open_settings.mp3`,
  `${GHPATH}/index_data/29208/player_walk.mp3`,
  `${GHPATH}/index_data/29208/prelude_of_war.mp3`,
  `${GHPATH}/index_data/29208/preparation_break.mp3`,
  `${GHPATH}/index_data/29208/pulsar_walk.mp3`,
  `${GHPATH}/index_data/29208/ranger_walk.mp3`,
  `${GHPATH}/index_data/29208/raven_walk.mp3`,
  `${GHPATH}/index_data/29208/skylark_walk.mp3`,
  `${GHPATH}/index_data/29208/smc_memory_2022.mp3`,
  `${GHPATH}/index_data/29208/smc_memory_2023.mp3`,
  `${GHPATH}/index_data/29208/snow_mirage_walk.mp3`,
  `${GHPATH}/index_data/29208/stable_and_upbeat.mp3`,
  `${GHPATH}/index_data/29208/tab_select.mp3`,
  `${GHPATH}/index_data/29208/throbbing_beat.mp3`,
  `${GHPATH}/index_data/29208/trio_of_enders_walk.mp3`,
  `${GHPATH}/index_data/29208/ultra_beast_force.mp3`,
  `${GHPATH}/index_data/29208/ventorus_walk.mp3`,
  `${GHPATH}/index_data/29208/item_took.mp3`,
  `${GHPATH}/index_data/29208/notice_close.mp3`,
  `${GHPATH}/index_data/69326`,
  `${GHPATH}/index_data/69326/MiSans.ttf`,
  `${GHPATH}/index_data/29278`,
  `${GHPATH}/index_data/29278/16f75a9bdd0bf6.gif`,
  `${GHPATH}/index_data/29278/blue`,
  `${GHPATH}/index_data/29278/blue/default-0.png`,
  `${GHPATH}/index_data/29278/blue/default-1.png`,
  `${GHPATH}/index_data/29278/blue/default-2.png`,
  `${GHPATH}/index_data/29278/blue/default-3.png`,
  `${GHPATH}/index_data/29278/blue/default-4.png`,
  `${GHPATH}/index_data/29278/blue/default-5.png`,
  `${GHPATH}/index_data/29278/blue/default-6.png`,
  `${GHPATH}/index_data/29278/blue/default-7.png`,
  `${GHPATH}/index_data/29278/blue/default-8.png`,
  `${GHPATH}/index_data/29278/blue/default-9.png`,
  `${GHPATH}/index_data/29278/blue/default-10.png`,
  `${GHPATH}/index_data/29278/blue/default-11.png`,
  `${GHPATH}/index_data/29278/blue/default-12.png`,
  `${GHPATH}/index_data/29278/blue/default-13.png`,
  `${GHPATH}/index_data/29278/blue/default-14.png`,
  `${GHPATH}/index_data/29278/blue/default-15.png`,
  `${GHPATH}/index_data/29278/blue/link-0.png`,
  `${GHPATH}/index_data/29278/blue/link-1.png`,
  `${GHPATH}/index_data/29278/blue/link-2.png`,
  `${GHPATH}/index_data/29278/blue/link-3.png`,
  `${GHPATH}/index_data/29278/blue/link-4.png`,
  `${GHPATH}/index_data/29278/blue/link-5.png`,
  `${GHPATH}/index_data/29278/blue/link-6.png`,
  `${GHPATH}/index_data/29278/blue/link-7.png`,
  `${GHPATH}/index_data/29278/blue/link-8.png`,
  `${GHPATH}/index_data/29278/blue/link-9.png`,
  `${GHPATH}/index_data/29278/blue/link-10.png`,
  `${GHPATH}/index_data/29278/blue/link-11.png`,
  `${GHPATH}/index_data/29278/blue/link-12.png`,
  `${GHPATH}/index_data/29278/blue/link-13.png`,
  `${GHPATH}/index_data/29278/blue/link-14.png`,
  `${GHPATH}/index_data/29278/blue/link-15.png`,
  `${GHPATH}/index_data/animations.css`,
  `${GHPATH}/index_data/scripts.js`,
  `${GHPATH}/index_data/scripts_2.js`,
  `${GHPATH}/index_data/styles.css`,
  `${GHPATH}/index_data/system.js`,
  `${GHPATH}/index_data/loading_system.js`,
  `${GHPATH}/index.html`,
  `${GHPATH}/manifest.webmanifest`
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CacheURLS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response;
    }
    return fetch(event.request);
    })
  );
});
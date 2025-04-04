// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "FLX | SCP RP";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Желаем приятной игры на сервере!",
  "«Обезопасить. Удержать. Сохранить».",
  "В деле ГОК это не кучка парней с большими пушками.",
  "SCP-173 и SCP-096 использовали чтобы уничтожить 682-го."
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 5000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "flx.jpg";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;

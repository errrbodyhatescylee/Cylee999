//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/jtkh7u.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27849730363,27615045572";
global.owner = process.env.OWNER_NUMBER || "27835039725";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/jtkh7u.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEQ4TGtENHBzWDVQZW9kWUhlWEFhbzJURjZ0bHA3dXEveGpKNmsvenpHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFlOYjhwaEt1Y25WRzZvN2VySEFXYWwydkJ0enlaSjlLV1F5a1dDSG9rWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSi9OL090RmllN25jMVdrZjRFdDN5TnM2VlEra2c5V2dxZkE2cmo1WkZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3NjRtTFp6b29KbmtBRzdJV2lJUGUwejJnMGlFTDNGOWdyL052aFE3a0VRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPaXdHdUJlRTFrY0VEZDRNZHN4a1RNY0lsdkRkOXUzOThLeDNOUGlkbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklrdkdkbTVHTGdzY3hXS1N2OFRUamZFdUxYOFVSRDJ2WFNET3ovSVdjZ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVCUVpjUmtlblVMdGIvMXJjMDhqVHhVbjBPSlV5aHhRem01WXhXK2Uwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkZoREZ2WXJsMThQMS9WenoyS1lFNFJmd2tyVHJVcHlkVzd6cm93ZHZEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxyS1lYK25SRUhMNEJXNXdrdUo3NVJVTzFucW9VVlgzMjByWGhIYi9HN3c2Sm5YaUJZd3Rheks3aXlJblNBeVltUXlubktNSnFPOWhyU2luNEZnSWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiekJOK2Qxekd1dTM5SUo1dUVSandUdEZvZ3AxazlHbGNlUk9ROW9aMG9vOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNzgzNTAzOTcyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OURGNDE4ODFCMkU4RkJCMDA4M0FFMUNBMjEyNDYxNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTczNjQ2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNzgzNTAzOTcyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNEE2QjMyNUYyMkFCRTVGMTJDNEZBMUJGMTE5RjI0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTczNjQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2a1J0MjUzWFRuV0lHZG9mSFJScnpRIiwicGhvbmVJZCI6IjFmNDExZGNhLTcwMjItNDNjNy05MDJjLTg4MzkzODk4YjM5YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRDJ1cFVIZmhsYkl5aDgyTWduNkk4dTA0SEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFlqK2htS2MzNFpYK1FLS3NJbzNzVkpwNUNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJTVFZXNjNBIiwibWUiOnsiaWQiOiIyNzgzNTAzOTcyNToxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii4uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSFgzSUVIRUwvcW1ia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJESlQzMHFsL3RjSStRMzlLVWhmV21LaWpBdGU4SGtFbE1RdG1ZeEY1S0J3PSIsImFjY291bnRTaWduYXR1cmUiOiIvWjdSa3F0YUg1ZE5KZjFjMTZyOWNyU3dhWDZMVFlVVXVPSjJOQ2VMaEFldmExSFFZSThnNUdGeDRJZHpiSjJNQXRGRXpyL1BxOGlTa09uYm9keFNBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVhMMzNJamNRdVk3MCtlN3NscFplZGdPQU9kaVh6T3pDYVRKdXV0aTNhNDRpdVRVRktZZzg4Y3JzVGVkT3RsTk9vRyt3Uzhzd1BMY0UvOCtSNUxxaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzgzNTAzOTcyNToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF5VTk5S3BmN1hDUGtOL1NsSVgxcGlvb3dMWHZCNUJKVEVMWm1NUmVTZ2MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA1NzM2NDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGo0In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "&",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`powered by Sir Cylee ❤️🧸™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "Cylee thee poet ❤️🧸",
  botname: process.env.BOT_NAME || "Sir Cylee ❤️🧸",
  ownername: process.env.OWNER_NAME || "errrbodyhatescylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

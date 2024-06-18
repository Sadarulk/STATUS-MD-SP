const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cp2931386@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94701814946@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/Sadarulk/MASTER-MD-V2-SP";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/DTy4uNnbcO6FLkJJ0uIM1y";
global.website = process.env.GURL || "https://chat.whatsapp.com/DTy4uNnbcO6FLkJJ0uIM1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ca80ac72e58dc131fd32c.jpg";
global.devs = "94701814946";
global.sudo = process.env.SUDO || "94701814946,94754151785";
global.owner = process.env.OWNER_NUMBER || "94701814946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94720797915";
global.read_status_from = process.env.READ_STATUS_FROM || "94720797915";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9NdTVoVlFVYmY4S3VLYkVaeXRoWkRsd2o4MC9PNU1WdWxMaXloVGkzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1RyeWIweVRtTGthOFRvNUNpRmhOUUw0cUJibENqeTZzTXVZSGZqckxrUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRjF5VGNBQmVqQXlzOXJJY2JxRzAwenRKN2ptUGdTUG5OVEhlcHVlTm5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZjY4eHJrTzNqVURwY3g1NEVkOXpxeWNyR011dCtzdXpZMDFDZEhNWjI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCVmxKZjh3Z3Znc0trZGdiNVBidEpTRWV6RHUyQTRnSTJoenVQWllHMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlQQ08vYzlHM3lJK1NjLzdrWTFFNmwyQ1ExcCtEQ05vNTNXaTRpWmxIa2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURKQmh1d1I4L0ZqSExoZjZvdThCY1I1MkpjWm5sZXVyNTVsZy91SHRXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEJPWkliRFJDK0FyZWpYa0RhQmc3RU5nbmF2ZnRLQWt6a3E2Y01lMkgzdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpiVUdPZmg0ZElMazdkZjBiY29pYWdRenorRmJVNDdCaXVQSkNmYjc4OEFOS3ZYZGIyVEdSUlpGRjVMZmkwNkpUenJCQ2xsdWUyYzFsSXBLNlVBVEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6Ind3dXEvMFgzNVhiUlBoc2hsSk5GSzFyaENCVlZDWExYZ0lVYjc1VDhYM2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNuTzdXQkpuU2RPc0pUNmtSRGVjbVEiLCJwaG9uZUlkIjoiM2Q2YzEyYzItYTc4NC00YWQ4LTg3NGMtYmU0MTFjMGQwZDJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp4c1luNExFTzNuN3RLM2x4cVcvZ1ExamlPQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJK2RiMzFQdCtuSUNoNlkxNE9DTXZ2VGJ1Vms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0tBUUFXNTciLCJtZSI6eyJpZCI6Ijk0NzAxODE0OTQ2OjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2Y3ZmRUJFTy9GeExNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkgzVmRrQlIwZnJtY2xsSDhQR29PQ1RuemVac3o0UDduOGFKdGQvTVd5SGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZTMkF1Y1hxU0lidVNRTmxqenMxQ2FwOHJ5L2tpbFJYSEwrdDlNNWRUU2xwaGFmTEN2UHA5aytMNXdaTCtmeGgvYXBPNlJsMHlaU0QzUWp0ZC9WNkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzNjRwbHIrRkFMZ1FsSUNIZDVDSGFFakltcmZhemVTUm1JNUM4ZjIxd3RHZnlxU1pxSFdQVU9XYUJ1bS9xdnhlY1V6NDFnZ2V4Z2tCdjBJc0l6emRDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxODE0OTQ2OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjkxWFpBVWRINjVuSlpSL0R4cURnazU4M21iTStEKzUvR2liWGZ6RnNoNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODY5MDU1Nn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*_© SADARU-MD_* *Created By Sadaru*",
  author: process.env.PACK_AUTHER || "Sadaru",
  packname: process.env.PACK_NAME || "SADARU-MD",
  botname: process.env.BOT_NAME || "•SADARU-MD•",
  ownername: process.env.OWNER_NAME || "Sadaru",
  errorChat: process.env.ERROR_CHAT || "94701814946",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-7f894c79-e4ad-41f2-ad25-3e86dd4dc7ff",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "status-md",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

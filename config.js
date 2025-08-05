const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFlNGhjZzNGS1paRFBOZXZiSmdzWFp1SUxkS2YxM3dJbW9LcHlvRUJWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmZNUm9kaThHTElZV0l0OU9aMEl5NkVLa2tybzU1aWVKZEFVamVZZkVCbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTis5RWNJMDFuZmRUb3NPUFRzdmptZDJjc1FBcWo0a2pKNXlPM29PWEU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMU2lLNldoRC9BdjlNTUR3bWxXblBzcnZKTGsxbURNaTN0MDFCZFp6dWowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBZVEyOTlNeVJ5cVZDRVF6MWFQOUJFcVFnRWdVWG1qOWJJTVRFUU5BbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik94TksyMFRZVm9CNXk2Q3JFNUhiMkNSWmVUSVkvemFzVVR3TG9VcDFDbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpXQkpNNmM4YmpiYzFwY2c5Y0JVd293N1prUzhLR0pqWUhmTmdmRU5Gbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEt2WXI1ZXdnMzhnblRpOE92TVFnTU9rNGFEREdvRWczaVR6bkx4RjkwOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1NNEhScFEyT0wxNjhmc0w3SDdMK2tNL3pVZloyc24wZmI3VTZqREs2eFR1SE4zaW83OHpCVHpkSW9IUmRVN2JKQlFPZGdkYlMweTh5Lzd1MmtwUmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiI3cGFxYS9ONzQrc0M0L1ZUd0wvQkhPYzdLOVpmemRoTW9uSGhJekpoK09nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJNRzFLQVlZVyIsIm1lIjp7ImlkIjoiOTE5MDc0OTg4NDU4OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFKVSIsImxpZCI6IjEwNDc4ODk2NDQ0NjMwMDoxN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tpdzFtVVF4T2ZJeEFZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikd5U3RSemo3SUY3QUxJenhrZFFIcGZDaU5aRWdBcllnSllzUFdXWGxtMW89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilp6blBWYUdCblFseWRTNGVsU2JvWjBLVG54SEZ2K1JteFprU0hMS282V1pGb3JTR0Jxb1hhekhBckJhTDd5LzBSOTNmVFlHNE1vbGxxcU50c0dFcUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhQUV6NUEvV3kyS3ZPZ05iMmZING04aDBnemo0dkplZkZYZWRJR3h5THdtdDlmengzaUR0R09mdm5ZRDlJaXR1b0tCR2crV28yazVXOG9STDloV2ZpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTA3NDk4ODQ1ODoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSc2tyVWM0K3lCZXdDeU04WkhVQjZYd29qV1JJQUsySUNXTEQxbGw1WnRhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MTE5NzUsImxhc3RQcm9wSGFzaCI6IkM0ZkpOIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHRHYifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY AJU-MD-V1 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iley3u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "AJU-MD-V1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "AJU💖",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "919074988458",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*AJUMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ AJMALMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qsaw2x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> AJU VARUM WAIT AKEY ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "919074988458",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

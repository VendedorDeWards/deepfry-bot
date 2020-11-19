const token = "token"







const Discord = require('discord.js');
const Jimp = require("jimp")
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

async function deepFry(imageUrl) {
  let image = await Jimp.read(imageUrl);
  image = await image.color([
    { apply: "saturate", params: [100] }
  ])
  .contrast(1)
  .contrast(1)
  .write("image.png");
    console.log("Image Processing Completed");
}

client.on('message', msg => {
  let imageUrl;
  if (msg.content.startsWith("deepfry")) {
    if (msg.attachments.array()[0]) {
      imageUrl = msg.attachments.array()[0].attachment;
    } else {
      imageUrl = msg.content.substring(8);
    }
    console.log(imageUrl);

    deepFry(imageUrl);


    msg.reply("10/10 Meme", {
      files: [
        "./image.png"
      ]
    }).catch(console.error);

  }
});

client.login(token);
  /* Jimp.read(imageUrl, (err, img) => {
    if (err) throw err;
    img.color([
      { apply: "saturate", params: [100] }
    ]).contrast(1).contrast(1).write("image.jpg");
    console.log("here")
  }).then(res => {
    msg.reply("10/10 meme", {
      files: [
        "./image.jpg"
      ]
    })
  }) */

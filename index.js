const { Composer, log } = require('micro-bot');
const crypto = require('crypto');

const chinitoImageUrl ='https://i.imgur.com/NcDR02f.jpg';

const bot = new Composer();

if (undefined === process.env.NOW) {
  bot.use(log());
}

bot.use((ctx, next) => {
  const start = new Date();
  const ms = new Date() - start;
  console.log('Response time %sms', ms);
  console.log(`updateType: ${ctx.updateType}`);
  next();
});

bot.command('/start', ({ from, replyWithHTML, botInfo }) => {
  replyWithHTML(`Hola <b>${from.first_name || from.username}</b>!
Para <i>enchinar</i> tus mensajes, escribí <b>@${botInfo.username}</b> <code>tu mensaje</code>.`);
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
  const message = inlineQuery.query || '';
  if (message.length > 0) {
    const enChinito = message
      .replace(/([aeou])|([áéóúü])/gi, (match, p1) => p1 ? 'i' : 'í')
      .replace(/[ií]{2}/g, 'i');
    const enChinitoGriton = enChinito.toUpperCase();
    const response = [
      {
        type: 'article',
        id: crypto.createHash('md5').update(enChinito).digest('hex'),
        title: 'En chinito:',
        description: enChinito,
        input_message_content: {
          message_text: enChinito,
          disable_web_page_preview: true
        },
        thumb_url: chinitoImageUrl
      },
      {
        type: 'article',
        id: crypto.createHash('md5').update(enChinitoGriton).digest('hex'),
        title: 'En chinito GRITON:',
        description: enChinitoGriton,
        input_message_content: {
          message_text: enChinitoGriton,
          disable_web_page_preview: true
        },
        thumb_url: chinitoImageUrl
      }
    ];
    return answerInlineQuery(response, { cache_time: 0 });
  }
});

module.exports = bot;

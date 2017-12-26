# enchinitoBOT

Un bot para Telegram que te lo dice en `chinito`.

### Objetivos:

- probar Zeit's [Now](https://zeit.co/now).
- probar [μ-bot](https://github.com/telegraf/micro-bot)
- ~~hacer algo útil con Node.js~~ hicir ilgi ítil cin Nidi.js


## Local Dev

```sh
npm i
TELEGRAM_BOT_TOKEN="999:AAA"
npx micro-bot -t "$TELEGRAM_BOT_TOKEN" index.js
```
## Deploy to Zeit's Now

Asumiendo que ya tenes `now` instalado:

```sh
now -e BOT_TOKEN="$TELEGRAM_BOT_TOKEN" --public
```

También podes utilizar el `botón de deployment` de `now`:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/xmarcos/enchinitoBOT&env=BOT_TOKEN)

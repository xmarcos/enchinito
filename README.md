# enchinito

> Say it _en chinito_.

```Text
                                      .-=+**********+=-:.
                                   :=*###################*+-.
                                 .+##########################*=:
                                :###%%%%%%%%%%%%%%%%%%##########*-
                               :##%%%%%%%%%%%%%%%%%%%%%%%%########*:
                               *%%%%%%%%%%####%%%%%%%%%%%%%%%%%#####+
                              :%%%%%@%%############%###%%%%%%%%%%%%##*
                              +%%%%@%%%##########***+=*#%%%%%%%%%%%%%#*
                              +%%@@%%*++++**##*+++++==*###%%%%%%%%%%%%%-
                              =%%@@%+-----==+===++++***#%%#%%%%%%%%%%%%*
                              .%%%%*-:-==**+====++=--=+#%%#%%%%%%%%%%%%#
                               +%%#=-::--==-----=+++=-=+#%#%%%%%%%%%%%%+
                                +%*-------::::---==+++==+**%%%%@%%%%%%%.
                                 -+---=====--==--------==++%%%%@%%%%%%:
                                  --===+=-=++*++=-----==++*%%%%@%%%%#:
                                  =--=+=---==========++++*%%%##@%%%=
                                  :===-=++**++======+++++#%%##%%%+.
                                  .==---===++++======+++##*#%%*-
                                  .#+---==+++=======++*#%#*=:
                                   ##*=---======+++++*%-
                                   ..::-==++++******+:.
                                        ..-=+*###****=.
  ..                                     ..  . :--=-..
   ...                                   ::-:..++-====:                 =-  ..
:.  :.:::::                      .     :---:  .:=****+::.               =-:=-
:-:---=====-                     -==.   ...  ::. .***. ..:   .          :=::
  ==-===++=--                    ---       ..::::-++*:    :=: .          =-:.::-=-
  ===++=++=--:                   ---           :-+++++.    :-. .         :====--=.
  :+=---------      .  .         ---            :+++++:    .--..          +===--.
    -===------:      . .         -=-            .+**++-    .-=:.:.        .-==--:
      :=++==--:    .   ..        -==.           -+++++=    :=+-:::.         .:---
        -+===-.    ..   . .      -==.           =++++++:   :=++:..:.          .:
        -===-.           ...     :==.           +++****=-..-==-::... ...       .
        --=-....         .-:.    .==.   ...... .+**###=:==:===.:-.....  ..   ..
         ::....  ..   .. .-.      =+.         .-***###- .=====:::....... ....
          ::::........:-..:       :+.          =*##***=. =+==:       .......
           .-::::::...::-::::.... :+.         .+*#****= :=++==:...........:
             ::--....:::-::::=++++++=-:.     .:*####*#=:+==--==-:...:.....
              .:++:::--:::::+*++++*##*+++=-:..-*#*#***+++++:-*===-::::.
                .:--------=:+*++*++++++++++****##==-=*##*****#*+=--..
                  .::--=-==-++++++++**+++++****##=-++####*******==-:..
                       ..:::++*+++++***+*+++**##*==+##*+++++****#+=--:.::..
                           -++++++*+**********########*+++=+++++*+==-::. .:::..
```

## Installation

```bash
yarn add @xmarcos/enchinito
# or
npm i @xmarcos/enchinito
```

## Usage

```js
import { enchinito } from '@xmarcos/enchinito';

console.log(
  enchinito('@xmarcos/enchinito is a useless node package')
);

// @xmircis/inchiniti is i isiliss nidi pickigi
```

A CommonJS version is also available:

```js
const { enChinito } = require('@xmarcos/enchinito');

console.log(
  enChinito('No me gustan los ES modules')
);
// Ni mi gistin lis IS midilis
```

The module exports three functions, they all do the same.

```typescript
export function enChinito(text: string): string;
export function enchinito(text: string): string;
export function inchiniti(text: string): string;
```

## CLI

There is a command line wrapper that you can **install** globally with:

```bash
yarn global add @xmarcos/enchinito
# or
npm install --global @xmarcos/enchinito
```

and use it like:

```bash
enchinito "Sudo make me a sandwich"
#Sidi miki mi i sindwich

echo "killall -9 vim" | enchinito | figlet -f doom
#  _    _ _ _ _ _ _          _____         _
# | |  (_) | (_) | |        |  _  |       (_)
# | | ___| | |_| | |  ______| |_| | __   ___ _ __ ___
# | |/ / | | | | | | |______\____ | \ \ / / | '_ ` _ \
# |   <| | | | | | |        .___/ /  \ V /| | | | | | |
# |_|\_\_|_|_|_|_|_|        \____/    \_/ |_|_| |_| |_|
```

## API

*There is an ~~App~~ [API](https://github.com/xmarcos/enchinito-api) for that™.*

## But why?

<img src="images/but-why.gif" align="right" width="250" />

1. The _chinito_[<sup id="a1">1</sup>](#f1) meme is very popular in Argentina 🇦🇷.
2. I make lots of memes.
3. I try to automate repetitive tasks whenever I can.
4. I needed an excuse to explore building —and publishing— _modern_ node modules.
5. I like lists with five items.

---
<sup id="f1">1</sup> AKA [mocking chinese boy](https://www.google.com/search?q=mocking+chinese+boy+meme&tbm=isch). [⏎](#a1)

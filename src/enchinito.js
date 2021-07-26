const charMap = {
  a: 'i', // a
  à: 'ì', // a grave
  á: 'í', // a acute
  â: 'î', // a circumflex
  ã: 'ĩ', // a tilde
  ä: 'ï', // a umlaut
  e: 'i', // e
  è: 'ì', // e grave
  é: 'í', // e acute
  ê: 'î', // e circumflex
  ë: 'ï', // e umlaut
  i: 'i', // i
  ì: 'ì', // i grave
  í: 'í', // i acute
  î: 'î', // i circumflex
  ï: 'ï', // i umlaut
  o: 'i', // o
  ò: 'ì', // o grave
  ó: 'í', // o acute
  ô: 'î', // o circumflex
  õ: 'ĩ', // o tilde
  ö: 'ï', // o umlaut
  u: 'i', // u
  ù: 'ì', // u grave
  ú: 'í', // u acute
  û: 'î', // u circumflex
  ü: 'ï', // u umlaut
};

/**
 * Returns true if all characters of a string are in their upper case form.
 * @param {string} char
 *
 * @returns {boolean}
 */
const isUpper = (char) => char.toUpperCase() === char;

/**
 * enChinito takes a string and replaces all vowels with "i".
 *
 * Uses a charMap to honor some accented vowels and respects case in the output.
 *
 * @param {string} text
 * @throws {TypeError} text must be a string
 *
 * @returns {string}
 */
const enChinito = (text) => {
  if (typeof text !== 'string') {
    throw new TypeError(`text must be a string, got ${typeof text}`);
  }

  const re = new RegExp(`([${Object.keys(charMap).join('')}])`, 'gi');

  return text.replace(re, (_, char) =>
    isUpper(char)
      ? charMap[char.toLowerCase()].toUpperCase()
      : charMap[char],
  );
};

const enchinito = enChinito;
const inchiniti = enChinito;

export { enChinito, enchinito, inchiniti };

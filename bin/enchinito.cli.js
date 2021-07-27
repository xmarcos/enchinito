#!/usr/bin/env node
import readline from 'readline';
import { stdin, argv } from 'process';
// eslint-disable-next-line import/extensions
import { enchinito } from '../src/enchinito.js';

const { log, error } = console;
const rawArgs = argv.slice(2);
const helpRegex = /^(-+|\/)(h(elp)?|\?)$/gi;
const helpMessage = (_log = log) => {
  _log(`USAGE: enchinito <string>

        Say it en chinito.

OPTIONS:
        string:
            Specify the text to be converted to chinito.
            Supports multiple arguments separated by spaces and returns them
            as a list (separated by line breaks) for easier processing.
        -h, --help:
            Display this message.
`);
};
let showHelp = false;
let unknownOption = false;

// read from stdin
if (stdin.isTTY !== true) {
  stdin.setEncoding('utf8');
  const input = readline.createInterface({ input: stdin });
  input
    .on('line', (line) => {
      log(enchinito(line));
    })
    .on('close', () => {
      process.exit(0);
    });
} else {
  const txt = rawArgs
    .filter((arg) => {
      if (helpRegex.exec(arg) !== null) {
        showHelp = true;
        return false;
      }
      if (arg.startsWith('-')) {
        unknownOption = true;
        return false;
      }
      return typeof arg === 'string';
    })
    .map((arg) => arg.trim());

  if (
    unknownOption ||
    (rawArgs.length > 1 && txt.length === 0 && showHelp === false)
  ) {
    error(`ERROR: I don't know that to do with that.`);
    helpMessage(error);
    process.exit(1);
  }

  if (showHelp && txt.length === 0) {
    helpMessage();
    process.exit(0);
  }

  txt.forEach((arg) => {
    log(`${enchinito(arg)} `);
  });
  process.exit(0);
}

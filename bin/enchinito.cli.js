#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { stdin, argv } from 'process';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
// eslint-disable-next-line import/extensions
import { enchinito } from '../lib/esm/enchinito.js';

const { log } = console;
const args = argv.slice(2);
const helpMessage = (_log = log) => {
  _log(`USAGE: enchinito [STRING]

        Say it en chinito.

OPTIONS:
        string:
            Specify the text to be converted to chinito.
            Supports multiple arguments separated by spaces and returns them
            as a list (separated by line breaks) for easier processing.
        -h, --help:
            Display this message.
        -v, --version:
            Output version information and exit.
`);
};

if (args.indexOf('--help') !== -1 || args.indexOf('-h') !== -1) {
  helpMessage();
  process.exit(0);
}

if (args.indexOf('--version') !== -1 || args.indexOf('-v') !== -1) {
  const packageJson = path.join(
    // @ts-ignore
    path.dirname(fileURLToPath(import.meta.url)),
    '../package.json',
  );
  log(`v${JSON.parse(fs.readFileSync(packageJson, 'utf8')).version}`);
  process.exit(0);
}

if (args.length === 0) {
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
  args.forEach((arg) => {
    log(`${enchinito(arg)}`);
  });
}

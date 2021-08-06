import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const filePath = `${path.resolve('bin/enchinito.cli.js')}`;

test('--version', () => {
  const enchinito = spawn('node', [filePath, '-v']);
  const expectedVersion = `v${
    JSON.parse(fs.readFileSync('package.json', 'utf8')).version
  }`;
  enchinito.stdout.on('data', (data) => {
    expect(data.toString()).toMatch(expectedVersion);
  });
});

test('it helps', () => {
  const enchinito = spawn('node', [filePath, '-h']);
  enchinito.stdout.on('data', (data) => {
    expect(data.toString()).toContain('USAGE: enchinito [STRING]');
  });
});

test('it speaks', () => {
  const input = 'Bonne fête des Mères! 🎉';
  const enchinito = spawn('node', [filePath, input]);
  enchinito.stdout.on('data', (data) => {
    expect(data.toString()).toMatch('Binni fîti dis Mìris! 🎉');
  });
});

test('it pipes', () => {
  const input = 'Bonne fête des Mères! 🎉';
  const enchinito = spawn('node', [filePath]);
  enchinito.stdout.on('data', (data) => {
    expect(data.toString()).toMatch('Binni fîti dis Mìris! 🎉');
  });
  enchinito.stdin.write(input);
  enchinito.stdin.end();
});

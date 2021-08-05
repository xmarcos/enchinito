import { spawn } from 'child_process';
import path from 'path';

const filePath = `${path.resolve('bin/enchinito.cli.js')}`;

test('it helps', () => {
  const enchinito = spawn('node', [filePath, '-h']);
  enchinito.stdout.on('data', (data) => {
    expect(data.stdout).toContain('USAGE: enchinito <string>');
  });
  enchinito.kill('SIGKILL');
});

test('it speaks', () => {
  const input = 'Bonne fête des Mères! 🎉';
  const enchinito = spawn('node', [filePath, input]);
  enchinito.stdout.on('data', (data) => {
    expect(data.stdout).toBe('Binni fîti dis Mìris! 🎉\n');
  });
  enchinito.kill('SIGKILL');
});

test('it pipes', () => {
  const input = 'Bonne fête des Mères! 🎉';
  const echo = spawn('echo', [input]);
  const enchinito = spawn('node', [filePath]);

  enchinito.stdout.pipe(echo.stdin);
  enchinito.stdout.on('data', (data) => {
    expect(data.stdout).toBe('Binni fîti dis Mìris! 🎉\n');
  });
  enchinito.kill('SIGKILL');
});

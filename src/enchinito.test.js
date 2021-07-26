import { enChinito, enchinito, inchiniti } from './enchinito';

test('madurar', () => {
  expect(
    enChinito('Oye, ¿en serio NO piensas madurar...       ?'),
  ).toBe('Iyi, ¿in sirii NI piinsis midirir...       ?');
});

test('AaEeIiOoUu', () => {
  expect(enChinito('AaEeIiOoUu')).toBe('IiIiIiIiIi');
});

test('🎉 ', () => {
  expect(enChinito('Bonne fête des Mères! 🎉')).toBe(
    'Binni fîti dis Mìris! 🎉',
  );
});

test('⚽️', () => {
  expect(enChinito('eeeh ehhhh eeeeeehhhh')).toBe(
    'iiih ihhhh iiiiiihhhh',
  );
});

test('🕳', () => {
  expect(enChinito('')).toBe('');
});

test('💥 throws on 📦', () => {
  expect(() => enChinito({ a: 'box' })).toThrow(
    new TypeError('text must be a string, got object'),
  );
});

test('💥 throws on ❓', () => {
  expect(() => enChinito()).toThrow(
    new TypeError('text must be a string, got undefined'),
  );
});

test('💥 throws on 🇦🇷', () => {
  expect(() => enChinito(null)).toThrow(
    new TypeError('text must be a string, got object'),
  );
});

test('enchinito', () => {
  expect(enchinito('enchinito')).toBe('inchiniti');
});

test('inchiniti', () => {
  expect(inchiniti('inchiniti')).toBe('inchiniti');
});

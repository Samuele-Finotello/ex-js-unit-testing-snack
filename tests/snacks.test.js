const { getInitials, createSlug } = require('../functions/snacks')

// SNACK 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
  expect(getInitials('Mario Rossi')).toBe('MR')
})

// SNACK 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug('Cane')).toBe('cane')
  expect(createSlug('GaTtO')).toBe('gatto')
})
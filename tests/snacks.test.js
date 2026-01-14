const { getInitials, createSlug, average, isPalindrome } = require('../functions/snacks')

// SNACK 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
  expect(getInitials('Mario Rossi')).toBe('MR')
})

// SNACK 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug('Cane')).toBe('cane')
  expect(createSlug('GaTtO')).toBe('gatto')
  expect(createSlug('GaTtO e CanE')).toBe('gatto-e-cane')
})

// SNACK 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3.00)
  expect(average([1, 2, 3, 4, 5, 6])).toBe(3.50)
  expect(average([0, 0, 0, 3])).toBe(0.75)
  expect(average([0, 2, 2])).toBeCloseTo(1.33)
  expect(average([0, 0, 0])).toBe(0.00)
  expect(() => average([5, 'ciao'])).toThrow()
})

// SNACK 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
  expect(createSlug('AniMalI DomeSTIci')).toBe('animali-domestici')
})

// SNACK 5
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
  expect(isPalindrome('Anna')).toBeTruthy()
  expect(isPalindrome('Anna ')).toBeTruthy()
  expect(isPalindrome('Pallone')).toBeFalsy()
})
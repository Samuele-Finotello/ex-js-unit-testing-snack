const { getInitials, createSlug, average, isPalindrome, findPostById } = require('../functions/snacks')

describe('Manipolazione di stringhe', () => {

  // SNACK 1
  test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Mario Rossi')).toBe('MR')
  })

  // SNACK 5
  test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('Anna')).toBeTruthy()
    expect(isPalindrome('Anna ')).toBeTruthy()
    expect(isPalindrome('Pallone')).toBeFalsy()
  })

})

describe('Operazioni su array', () => {

  // SNACK 3
  test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3.00)
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.50)
    expect(average([0, 0, 0, 3])).toBe(0.75)
    expect(average([0, 2, 2])).toBeCloseTo(1.33)
    expect(average([0, 0, 0])).toBe(0.00)
    expect(() => average([5, 'ciao'])).toThrow()
  })

  const posts = [
    {
      id: 1,
      title: 'Montagna',
      slug: 'montagna'
    },
    {
      id: 2,
      title: 'Mare',
      slug: 'mare'
    },
    {
      id: 3,
      title: 'Viaggio Londra',
      slug: 'viaggio-londra'
    }
  ]

  // SNACK 7
  test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id.', () => {
    expect(findPostById(posts, 3)).toEqual({
      id: 3,
      title: 'Viaggio Londra',
      slug: 'viaggio-londra'
    })
    expect(findPostById(posts, '3')).toEqual({
      id: 3,
      title: 'Viaggio Londra',
      slug: 'viaggio-londra'
    })
    expect(() => findPostById(posts, 'ciao')).toThrow()
    expect(() => findPostById([3, 5], 3)).toThrow()
    expect(findPostById(posts, 5)).toBeNull()
  })

})

describe('Generazione di slug', () => {

  // SNACK 2
  test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Cane')).toBe('cane')
    expect(createSlug('GaTtO')).toBe('gatto')
    expect(createSlug('GaTtO e CanE')).toBe('gatto-e-cane')
  })

  // SNACK 4
  test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('AniMalI DomeSTIci')).toBe('animali-domestici')
  })

  // SNACK 6
  test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('')).toThrow()
    expect(() => createSlug(' ')).toThrow()
    expect(() => createSlug(null)).toThrow()
  })

})
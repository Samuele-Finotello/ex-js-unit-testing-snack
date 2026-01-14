function getInitials(fullName) {
  const [name, surname] = fullName.split(' ');
  return `${name[0]}${surname[0]}`;
}

function createSlug(string) {
  if (!string.trim() || !string) {
    throw new Error('Stringa vuota o non valida')
  }
  return string.toLowerCase().replaceAll(' ', '-');
}

function average(numbers) {
  numbers.forEach(num => {
    if (isNaN(num)) {
      throw new Error('L\'array deve contenere solo numeri')
    }
  });
  return numbers.reduce((acc, num) => {
    return acc + num;
  }, 0) / numbers.length;
}

function isPalindrome(string) {
  const reversedString = string.split('').reverse().join('');
  return string.trim().toLowerCase() === reversedString.trim().toLowerCase();
}

function findPostById(array, id) {
  if (isNaN(id)) {
    throw new Error('id deve contenere un numero che sia contenuto nell\'array')
  }
  array.forEach(elem => {
    if (
      elem.id === undefined ||
      elem.title === undefined ||
      elem.slug === undefined
    ) {
      throw new Error('Ogni elemento deve avere le proprità id, title e slug valide')
    }
  })
  return array.find(elem => elem.id === parseInt(id)) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById
}
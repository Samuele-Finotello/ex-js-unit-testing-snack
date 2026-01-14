function getInitials(fullName) {
  const [name, surname] = fullName.split(' ');
  return `${name[0]}${surname[0]}`;
}

function createSlug(string) {
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

module.exports = {
  getInitials,
  createSlug,
  average
}
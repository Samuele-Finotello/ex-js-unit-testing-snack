function getInitials(fullName) {
  const [name, surname] = fullName.split(' ');
  return `${name[0]}${surname[0]}`;
}

function createSlug(string) {
  return string.toLowerCase();
}

module.exports = {
  getInitials,
  createSlug
}
function getInitials(fullName) {
  const [name, surname] = fullName.split(' ');
  return `${name[0]}${surname[0]}`;
}

module.exports = {
  getInitials
}
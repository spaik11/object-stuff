function getFirstName(person) {
  return person.firstName;
}

function getLastName(person) {
  return person.lastName;
}

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function setFirstName(person, name) {
  person.firstName = name;
}

function setAge(person, age) {
  person.age = age;
}

function giveBirthday(person) {
  return (person.age) ? person.age = person.age + 1 : person.age = 1;
}

function marry(person1, person2) {
  person1.married = true;
  person2.married = true;
  person1.spouseName = `${person2.firstName} ${person2.lastName}`;
  person2.spouseName = `${person1.firstName} ${person1.lastName}`;
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} 
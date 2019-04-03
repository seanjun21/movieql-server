export const people = [
  {
    id: '0',
    name: 'Sean',
    age: 33,
    gender: 'male'
  },
  {
    id: '1',
    name: 'Sora',
    age: 34,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Joe',
    age: 25,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Tad',
    age: 22,
    gender: 'male'
  },
  {
    id: '4',
    name: 'Bryan',
    age: 36,
    gender: 'male'
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

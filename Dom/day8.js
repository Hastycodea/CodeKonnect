const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
};
// console.log(person)

// let keys = Object.entries(person)
// console.log(keys)


// console.log(person.skills)

let firstTech = person.skills[2]
console.log(firstTech)
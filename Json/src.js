let people = {
  users: [
    {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      age: 250,
      email: "asab@asb.com",
    },
    {
      firstName: "Alex",
      lastName: "James",
      age: 25,
      email: "alex@alex.com",
    },
    {
      firstName: "Lidiya",
      lastName: "Tekle",
      age: 28,
      email: "lidiya@lidiya.com",
    },
  ],
};

// console.log(people)
console.log(people.users[0].firstName)
console.log(people.users.length)

for(let i=0; i<people.users.length; i++) {
    console.log(people.users[i].firstName)
}

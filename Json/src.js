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

//structure of Json
//JSON.stringify(value, replacer, space)
console.log(JSON.stringify(people, undefined, 4))
// console.log(JSON.stringify(people, ['users']))
// console.log(people)
console.log(people.users[0].firstName);
console.log(people.users.length);

for (let i = 0; i < people.users.length; i++) {
  console.log(people.users[i].firstName);
}

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

console.log(typeof(usersText))
console.log(JSON.parse(usersText).users[0].firstName)

let usersObject = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})

console.log(usersObject)

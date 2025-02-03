const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesWithIa = []

for(let i = 0; i<countries.length; i++){
  if(countries[i].includes("ia")){
    countriesWithIa.push(countries[i])
  }
}
// basic test arrays
if(countriesWithIa.length === 0){
  console.log("There are no countries with ia")
}

console.log(countriesWithIa)

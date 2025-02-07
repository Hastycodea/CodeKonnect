const square = async function (n) {
  return n * n;
};

// console.log(square(2));

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  try {
    let response = await fetch(countriesAPI);
    let countries = await response.json();
    console.log(countries[100]);
    console.log(countries.length);
    for (let i = 0; i < countries.length; i++) {
      let name = countries[i].name;
      let capital = countries[i].capital;

      //one can use a forEach
      let languages = countries[i].languages.map(lang => lang.name).join(", ");

      let population = countries[i].population;
      let area = countries[i].area;

      console.log(
        `name:${name},\ncapital:${capital},\nlanguages:${languages},\npopulation:${population},\narea:${area}, `
      );
      console.log(countries[i].languages)
    }
  } catch (error) {
    console.log(error);
  }
};

fetchData();

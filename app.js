fetch('https://restcountries.eu/rest/v2/all')
.then(res=> res.json())
.then(data=> displayData(data))

const displayData =countries =>{
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    const countryInfo = `
     <h3 class='country-name'>${country.name}</h3>
     <p>${country.capital}</p>
     <button onclick="displayCountryDetail('${country.name}')">Details</button>
    `;
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv)    
    });
}
const displayCountryDetail =(name)=>{
  console.log(name);
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
  .then(res=> res.json())
  .then(data=> randerCountryInfo(data[0]))

}
const randerCountryInfo =(country)=>{
    console.log(country);
   const countryDetailDIv = document.getElementById('countryDetails');
   countryDetailDIv.innerHTML = `
   <h3>Country: ${country.name}</h3>
   <p>Population: ${country.population}</p>
   <p>Area: ${country.area}</p>
   <img src= "${country.flag}">
   `
}

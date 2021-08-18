const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities=[];
let data

fetch(endpoint)
    .then(cld=>cld.json())
    .then(data=>cities=data)
fmatches=(wordmatch,cities)=>{
    return cities.filter(place=>{
        const regex=new RegExp(wordmatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
} 
//function to display commas between population
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function dispmatch(){
    const matcharray=fmatches(this.value,cities);
    const html=matcharray.map(place =>{
        const regex=new RegExp(this.value,'gi');
        const cityname=place.city.replace(regex,`<span class="h1">${this.value}</span>`)
        const statename=place.state.replace(regex,`<span class="h1">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityname},${statename}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    })

}
const searchinput=document.querySelector('.search1')
const suggestions=document.querySelector('.suggestions')

searchinput.addEventListener('change',dispmatch)
searchinput.addEventListener('keyup',dispmatch)
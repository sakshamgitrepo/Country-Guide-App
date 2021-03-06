const inputval = document.querySelector("input");

function fetched(count) {
  fetch(`https://restcountries.com/v3.1/name/${count}?fullText=true`)
    .then((response) => response.json())
    .then((data) => display(data));
}

function display(data) {
console.log(data);
console.log(Object.values(data[0].currencies)[0].symbol);
  document.querySelector(".icon").src = `${data[0].flags.png}`;
  document.querySelector(".name").innerText = `${data[0].name.common.toUpperCase()}`;
  document.querySelector(
    ".capital"
  ).innerText = `CAPITAL : ${data[0].capital[0].toUpperCase()}`;
  document.querySelector(
    ".continent"
  ).innerText = `CONTINENT : ${data[0].continents[0].toUpperCase()}`;
  document.querySelector(
    ".population"
  ).innerText = `POPULATION : ${data[0].population}`;
  document.querySelector(".currency").innerText = `CURRENCY : ${
    (Object.keys(data[0].currencies)[0]).toUpperCase()
  } - ${Object.values(data[0].currencies)[0].symbol}`;
  document.querySelector(".lang").innerText = `LANGUAGE : ${
    (Object.values(data[0].languages)[0]).toUpperCase()
  }`;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+data[0].name.common+"')";
  document.querySelector('.card2').classList.remove('load')


 
}
document.querySelector("button").addEventListener('click',()=>{
    fetched(inputval.value.trim())
})
document.querySelector("input").addEventListener('keypress',(e)=>{
    if (e.key==="Enter") {
        fetched(inputval.value.trim()) 
    }
})
fetched('India')
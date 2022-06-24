const inputval = document.querySelector("input");

function fetched(count) {
  fetch(`https://restcountries.com/v3.1/name/${count}?fullText=true`)
    .then((response) => response.json())
    .then((data) => display(data));
}

function display(data) {
  document.querySelector(".icon").src = `${data[0].flags.png}`;
  document.querySelector(".name").innerText = `${data[0].name.common}`;
  document.querySelector(
    ".capital"
  ).innerText = `Capital : ${data[0].capital[0]}`;
  document.querySelector(
    ".continent"
  ).innerText = `Continent : ${data[0].continents[0]}`;
  document.querySelector(
    ".population"
  ).innerText = `Population : ${data[0].population}`;
  document.querySelector(".currency").innerText = `Currency : ${
    Object.keys(data[0].currencies)[0]
  }`;
  document.querySelector(".lang").innerText = `Language : ${
    Object.values(data[0].languages)[0]
  }`;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+data[0].name.common+"')";
  document.querySelector('.card2').classList.remove('load')


 
}
document.querySelector("button").addEventListener('click',()=>{
    fetched(inputval.value)
})
document.querySelector("input").addEventListener('keypress',(e)=>{
    if (e.key==="Enter") {
        fetched(inputval.value) 
    }
})
fetched('India')
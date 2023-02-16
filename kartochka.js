let container = document.querySelector('.container')
const API = 'https://www.omdbapi.com/?apikey=b6003d8a&s=All'
fetch(API)
.then((data) => data.json())
.then((data) => data.Search.forEach((item)=>{
    container.innerHTML +=`
    <div class='main'>
    <img src = ${item.Poster}>
    <h1>${item.Title}</h1>
    <h3>Year:${item.Year}</h3>
    </div>
    `

}))
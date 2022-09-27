const inputEl = document.getElementById('searchValue')
const eventSearchable = document.querySelector('#event-searchable');


const apiKey= 'iPzGu4kCNVe9ZS1UfVUW84J6JU7nzYUk'
const query = inputEl.value

// insert serach and api so we can use laster
// const url = 'https://app.ticketmaster.com/discovery/v2/events.json?&apikey=iPzGu4kCNVe9ZS1UfVUW84J6JU7nzYUk'

// create a function that generates dynamic url 
// REQUEST PER GENRE?

function getJazz(){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&dmaId=124&dmaId=11&dmaId=53&dmaId=364&classificationName=jazz&apikey=${apiKey}`)
    .then (res => res.json())
    .then (data => {

        //go to events object
        let limit = data._embedded.events
        // console.log(limit)

        //grab the index we want from the array
const result = limit[0]
// console.log(result)


//add indexed properties to the DOM
document.getElementById('contents').innerHTML = 

    `<h4>${result.name}</h4>
    <h3>${result._embedded.venues[0].name}</h3>
    <h3>$ ${result.priceRanges[0].max}0</h3>
    <button><a href="${result.url}">Get my seats</a></button><br>
    <a href='${result._embedded.attractions[0].externalLinks.youtube[0].url}'> <ion-icon size="large" name="logo-youtube"></ion-icon> </a>
    <a href='${result._embedded.attractions[0].externalLinks.itunes[0].url}'> <ion-icon size="large" name="logo-apple"></ion-icon> </a> </a>
    <a href='${result._embedded.attractions[0].externalLinks.twitter[0].url}'> <ion-icon size="large" name="logo-twitter"></ion-icon> </a> </a>
    <a href='${result._embedded.attractions[0].externalLinks.homepage[0].url}'> <ion-icon size="large" name="home"></ion-icon> </a> </a>

    `
  document.getElementById('topic1').src=result.images[8].url
    })

}
    getJazz()

    function getComedy(){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&dmaId=124&dmaId=11&dmaId=53&dmaId=364&classificationName=comedy&apikey=${apiKey}`)
    .then (res => res.json())
    .then (data => {

        //go to events object
        let limit = data._embedded.events
        console.log(limit)

        //grab the index we want from the array
const result = limit[4]
console.log(result)


//add indexed properties to the DOM
document.getElementById('contents2').innerHTML = 

    `<h4>${result.name}</h4>
    <h3>${result._embedded.venues[0].name}</h3>
    <h3>$${result.priceRanges[0].min}0 - $${result.priceRanges[0].max}0</h3>
    <button><a href="${result.url}">Get my seats</a></button><br>

    `
  document.getElementById('topic2').src=result.images[5].url

    })

}
    getComedy()

    function getReggae(){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&dmaId=124&dmaId=11&dmaId=53&dmaId=364&classificationName=reggae&apikey=${apiKey}`)
    .then (res => res.json())
    .then (data => {

        //go to events object
        let limit = data._embedded.events
        console.log(limit)

        //grab the index we want from the array
const result = limit[1]
console.log(result)


//add indexed properties to the DOM
document.getElementById('contents3').innerHTML = 

    `<h4>${result.name}</h4>
    <h3>${result._embedded.venues[0].name}</h3>
    <h3>$${result.priceRanges[0].max}</h3>
    <button><a href="${result.url}">Get my seats</a></button><br>

    `
  document.getElementById('topic3').src=result.images[7].url

    })

}
 getReggae()

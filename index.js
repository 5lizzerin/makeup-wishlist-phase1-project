
const makeupUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
fetch(makeupUrl)
.then(makeupUrlResponse => makeupUrlResponse.json())
.then(productData =>{
    
})


//declaring items in the card
const makeupImage = document.getElementById("makeup-image")
const makeupName = document.getElementById("makeup-name")
const makeupPrice = document.getElementById("makeup-price")
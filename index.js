
const makeupUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
fetch(makeupUrl)
.then(makeupUrlResponse => makeupUrlResponse.json())
.then(productData => {
    // console.log(productData)
    for (record of productData){
        const card = document.createElement("div")

        const productName = document.createElement("h2")
        productName.innerText = record.name

        const productImage = document.createElement("img")
        productImage.src = record.image_link

        const productPrice = document.createElement("p")
        productPrice.innerText = record.price

        card.append(productImage, productName, productPrice)
        console.log(makeupContainer)
        makeupContainer.append(card)
    }
})


const makeupContainer = document.querySelector(".makeup-container")




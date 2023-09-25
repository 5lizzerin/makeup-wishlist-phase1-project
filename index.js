const makeupUrl =
	'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
fetch(makeupUrl)
	.then(makeupUrlResponse => makeupUrlResponse.json())
	.then(productData => {
		// console.log(productData)
		for (record of productData) {
			const card = document.createElement('div');

			const productName = document.createElement('h2');
			productName.innerText = record.name;

			const productImage = document.createElement('img');
			productImage.src = record.image_link;

			const productPrice = document.createElement('p');
			productPrice.innerText = record.price;

			card.append(productImage, productName, productPrice);
			console.log(makeupContainer);
			makeupContainer.append(card);
		}
	});

const makeupContainer = document.querySelector('.makeup-container');

//get container element
//make div element
//append it in container element
//add card class to div element
//append card div to container
//--
//make h2 element
//make make name inner text
//append h2 to card div
//--
//make img element
//add src attribute
//add class attribute
//append img to card div
//--
//make p element
//make price inner text
//append p to card div
//--
//make button element
//add class attribute
//add id attribute
//append button to card div

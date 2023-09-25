const makeupUrl =
	'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
fetch(makeupUrl)
	.then(makeupUrlResponse => makeupUrlResponse.json())
	.then(productData => {
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
	});

//declaring items in the card
const makeupImage = document.getElementById('makeup-image');
const makeupName = document.getElementById('makeup-name');
const makeupPrice = document.getElementById('makeup-price');

const makeupContainer = document.querySelector('.makeup-container');

const makeupUrl =
	'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
fetch(makeupUrl)
	.then(makeupUrlResponse => makeupUrlResponse.json())
	.then(makeupArray => {
		for (record of makeupArray){
			renderMakeupProduct(record);
		}
	});

function renderMakeupProduct (record){
	const card = document.createElement('div');
	const productName = document.createElement('h2');
	productName.innerText = record.name;

	const productImage = document.createElement('img');
	productImage.src = record.image_link;

	// const productPrice = document.createElement('p');
	// productPrice.innerText = `$${record.price}`;

	const likeBtn = document.createElement('button');
	likeBtn.setAttribute('class', 'like-btn');
	likeBtn.innerHTML = `
	<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2rem"
			height="2rem"
			viewBox="0 0 64 64"
			version="1.1"
		>
			<path
				d="m21.241 7.1495c-4.0125 1e-7 -7.5565 1.5303-10.631 4.5861-5.8865 5.851-6.1348 15.13-0.7502 21.273-0.139-0.056 22.098 22.046 22.154 21.991-0.056 0.055 22.182-22.047 22.126-21.991 5.385-6.143 5.136-15.422-0.75-21.273-5.882-5.8464-15.21-6.38-21.39-1.042-2.952-2.5567-7.088-3.5445-10.759-3.5445z"
					fill="white"
					stroke="#d92856"
					stroke-width="2"
				/>
			</svg>
		`;

		likeBtn.addEventListener('click', () => {
		likeBtn.classList.toggle('selected');
		});

	productImage.addEventListener("mouseover", () => {
		const productPrice = document.createElement("div")
		productPrice.innerText = `$${record.price}`
		card.append(productPrice)
	}, {once: true});
		card.append(productImage, productName, likeBtn);
		makeupContainer.prepend(card)
	}


const newMakeupForm = document.getElementById("new-makeup-form")
newMakeupForm.addEventListener("submit", (event => {
	event.preventDefault();
	const newName = document.getElementById("new-makeup-name").value
	// const newDescription = document.getElementById("new-makeup-description").value
	const newImage = document.querySelector("#new-makeup-image").value
	const newPrice = document.querySelector("#new-makeup-price").value
	const newMakeupProduct = {
		name: newName,
		description: newDescription,
		image_link: newImage,
		price: newPrice
		}
	renderMakeupProduct(newMakeupProduct)
	newMakeupForm.reset();

	console.log(newName, newImage, newDescription, newPrice)


	// const newName = event.target.name.value
	// const newDescription = event.target.description.value
	// const newImage = event.target.image.value
	// const newPrice = event.target.price.value
		// const newMakeupProduct = {
	// 	name: newName,
	// 	description: newDescription,
	// 	image: newImage,
	// 	price: newPrice
	// }
	// renderMakeupProduct(newMakeupProduct)
	// newMakeupForm.reset()


}))


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



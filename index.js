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

		productImage.addEventListener('click', () => {
			productImage.classList.toggle('enlarged');
		});
		
		const productPrice = document.createElement('div');
		productPrice.setAttribute('class', 'hidden');
		productPrice.innerText = `$${record.price}`;
	
		card.addEventListener('mouseenter', mouseEnter => {
			productPrice.classList.toggle('hidden');
		});
		card.addEventListener('mouseleave', mouseLeave => {
			console.log('leave');
			productPrice.classList.toggle('hidden');
		});

	// productImage.addEventListener("mouseover", () => {
	// 	const productPrice = document.createElement("p")
	// 	productPrice.innerText = `$${record.price}`
	// 	card.append(productPrice)
	
	// })

	// productImage.addEventListener("mouseleave", () =>{
	// 	const productPriceRemoved = document.querySelectorAll("p")
	// 	card.removeChild(productPriceRemoved[0]);
	// })


		card.append(productImage, productName, likeBtn, productPrice);
		makeupContainer.prepend(card)
	}


const newMakeupForm = document.getElementById("new-makeup-form")
newMakeupForm.addEventListener("submit", (event => {
	event.preventDefault();
	const newName = document.getElementById("new-makeup-name").value
	const newImage = document.querySelector("#new-makeup-image").value
	const newPrice = document.querySelector("#new-makeup-price").value
	const newMakeupProduct = {
		name: newName,
		image_link: newImage,
		price: newPrice
		}
	renderMakeupProduct(newMakeupProduct)
	newMakeupForm.reset();
}))

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

window.onscroll = () =>{
	navbar.classList.remove('active');
	loadMoreBtn.classList.remove('active')
	}

let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
	header.classList.toggle('shadow', window.scrollY > 0);
});



document.querySelector('#menu-icon').onclick = () => {
	nav.classList.toggle('active');
}

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
const nav = document.querySelector('nav');
const banner = document.querySelector('.banner');
const product = document.querySelector('.product');

window.addEventListener('scroll', () => {
    if (window.scrollY > banner.offsetHeight) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });


  const shopNowBtn = document.querySelector('.btn'); 
shopNowBtn.addEventListener('click', () => {
  product.scrollIntoView({ behavior: 'smooth' });
});

let products = [
    {
        id: 1,
        name: 'Ducati Panigale V4 SP 2023',
        image: 'ducati.jpg',
        pharagrap: 'The heart of the Panigale V4 SP2 is the 1,103 cc Desmosedici Stradale of MotoGP origin: a V4 with counter-rotatingcrankshaft equipped with a lot of torque from low revs and capable of expressing the racing soul of the bike on the track.',
        price: 3172499
    },
    {
        id: 2,
        name: 'Aerox y-connect v2 2023',
        image: 'aerox.jpg',
        pharagrap: 'The liquid-cooled, 4-stroke SOHC,155 cc, 4-valve, fuel-injected engine with VVA in the Aerox 155 gives out a maximum horse power of 11.0kW(15.0PS)/8000r/min and a maximum torque of 13.9N.m (1.4kgf.m) /6500r/min.',
        price: 139499
    },
    {
        id: 3,
        name: 'Nmax V2 155cc 2023',
        image: 'nmax.jpg',
        pharagrap: 'Its beating heart is a liquid-cooled 155cc 4-stroke, SOHC, 4-valve engine which produces a healthy 15.18 hp and 13.9 Nm of torque. This engine is then paired with a continuously variable transmission (CVT) or a V-Belt as Yamaha likes to brand it.',
        price: 149499
    },
    {
        id: 4,
        name: 'Yamaha Gravis Limited Edition 125cc 2022',
        image: 'gravis.jpg',
        pharagrap:' Mio Gravis Standard variant is powered by a 125 cc Gasoline Engine with Fuel Injection system, It has a Single Cylinder, 4-Stroke, Air Cooled, SOHC Engine.',
        price: 88499
    },
    {
        id: 5,
        name: 'Suzuki Burgman 125cc 2022',
        image: 'burgman.jpg',
        pharagrap:'Fully revised fuel-injected, DOHC, 400cc, liquid-cooled, single-cylinder engine powers a seamless, CVT automatic transmission. On highway with steady speed it gives milage of 56km/L while on rough driving in streets it gives 45km/L.',
        price: 76499
    },
    {
        id: 6,
        name: 'Suzuki Gixxer 150cc 2023',
        image: 'gixxer.jpg',
        pharagrap:'Gixxer 150 is powered by a 1 cylinder, 155 cc, 4-Stroke, 1-cylinder, Air cooled. It is able to produce 14.0 NM@ 6000 rpm torque and 14.1 PS @ 8000 rpm power with a fuel efficiency/mileage of 64 kmpl.',
        price: 99499
    },
    {
        id: 7,
        name: 'Suzuki GSX-S750Z 2023',
        image: 'GXS.jpg',
        pharagrap:'The GSX-S750 is Suzukis entry into the middleweight sport naked segment. A streetfighter version of the GSX-R750, the GSX-S750 is powered by a 749cc Inline-four cylinder engine that uses the same architecture as the GSX-R.',
        price: 559499
    },
    {
        id: 8,
        name: 'Rim Set',
        image: 'rim.jpg',
        pharagrap:'RIMSET FOR MIO I 125/ MIO SOUL I 125(17rims). ',
        price: 5199
    },
    {
        id: 9,
        name: 'Motorcycle Shock Absorber',
        image: 'shock.jpg',
        pharagrap:'KYB SHOCKS V3 PAIR For AeroxV1 V2 / NmaxV2 (305mm).',
        price: 4499
    },
    {
        id: 10,
        name: 'Exterior Tire',
        image: 'tire.jpg',
        pharagrap:'Exterior Tire Size: 300/17.',
        price: 699
    },

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="txt">${value.pharagrap}</div>
            <div class="price">₱${value.price.toLocaleString()}.00</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            <button onclick="buyNow(${key})">Buy Now</button>`;

        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
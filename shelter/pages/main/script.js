// PETS

let pets = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
      },
      {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      }
]

// CONST

let arr = [0,1,2,3,4,5,6,7];
let currentValueText = 0
let currentValueImg = 0
const petCards = document.querySelectorAll('.card')
const petImg = document.querySelectorAll('.pet-img')
const petName = document.querySelectorAll('.pet-name')
const nextBtn = document.querySelector('.slide-btn-r')
const prevBtn = document.querySelector('.slide-btn-l')
const nextBtnAdapt = document.querySelector('.slide-btn-r-adapt')
const prevBtnAdapt = document.querySelector('.slide-btn-l-adapt')
const closeBtn = document.querySelector('.close-btn')
const html = document.querySelector('.html')
const main = document.querySelector('.main')
const popup = document.querySelector('.popup')
const popupImg = document.querySelectorAll('.popup-img')
const popupHeading = document.querySelectorAll('.popup-heading')
const popupSub = document.querySelectorAll('.popup-subheading')
const popupDesc = document.querySelectorAll('.popup-desc')
const age = document.querySelectorAll('.age')
const inoculations = document.querySelectorAll('.inoculations')
const diseases = document.querySelectorAll('.diseases')
const parasites = document.querySelectorAll('.parasites')
const cardA = document.getElementById('cardA')
const cardB = document.getElementById('cardB')
const cardC = document.getElementById('cardC')
const popupA = document.getElementById('popupA')
const popupB = document.getElementById('popupB')
const popupC = document.getElementById('popupC')
const closeBtnA = document.getElementById('btnA')
const closeBtnB = document.getElementById('btnB')
const closeBtnC = document.getElementById('btnC')
const popupBreed = document.querySelectorAll('.breed')



// SLIDER

function changeName () {
    petName.forEach((el) => {
        el.innerHTML = pets[arr[currentValueText]].name
        currentValueText++
        if (currentValueText > 7) {
            currentValueText = 0
        }
    })
}

function changeImg () {
    petImg.forEach((el) => {
        el.src = pets[arr[currentValueImg]].img
        currentValueImg++
        if (currentValueImg > 7) {
            currentValueImg = 0
        }
    })
}
nextBtn.addEventListener('click', changeName);
prevBtn.addEventListener('click', changeName);
nextBtnAdapt.addEventListener('click', changeName);
prevBtnAdapt.addEventListener('click', changeName);
nextBtn.addEventListener('click', changeImg);
prevBtn.addEventListener('click', changeImg);
nextBtnAdapt.addEventListener('click', changeImg);
prevBtnAdapt.addEventListener('click', changeImg);


// POPUP



function showPopupA () {
  popupA.classList.add('show-popup');
  html.style.overflowY = 'hidden';
}

function showPopupB () {
  popupB.classList.add('show-popup');
  html.style.overflowY = 'hidden';
}

function showPopupC () {
  popupC.classList.add('show-popup');
  html.style.overflowY = 'hidden';
}

cardA.addEventListener('click', showPopupA)
cardB.addEventListener('click', showPopupB)
cardC.addEventListener('click', showPopupC)


function closePopupA () {
  popupA.classList.remove('show-popup');
  html.style.overflowY = 'visible';
}

function closePopupB () {
  popupB.classList.remove('show-popup');
  html.style.overflowY = 'visible';
}

function closePopupC () {
  popupC.classList.remove('show-popup');
  html.style.overflowY = 'visible';
}
closeBtnA.addEventListener('click', closePopupA)
closeBtnB.addEventListener('click', closePopupB)
closeBtnC.addEventListener('click', closePopupC)
html.addEventListener('dblclick', closePopupA)
html.addEventListener('dblclick', closePopupB)
html.addEventListener('dblclick', closePopupC)


function truePopup () {
  let popupArr = []
  petCards.forEach((el) => { 
    popupArr.push(el.querySelector('.pet-name').innerHTML)
  })
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 8; j++) {
      if (popupArr[i] === pets[j].name) {
      popupHeading[i].innerHTML = pets[j].name
      popupSub[i].innerHTML = pets[j].type
      popupBreed[i].innerHTML = pets[j].breed
      popupDesc[i].innerHTML = pets[j].description
      age[i].innerHTML = pets[j].age
      inoculations[i].innerHTML = pets[j].inoculations
      diseases[i].innerHTML = pets[j].diseases
      parasites[i].innerHTML = pets[j].parasites
      popupImg[i].src = pets[j].img
      }
    }
  }
}
nextBtn.addEventListener('click', truePopup)
prevBtn.addEventListener('click', truePopup);
nextBtnAdapt.addEventListener('click', truePopup);
prevBtnAdapt.addEventListener('click', truePopup);
nextBtn.addEventListener('click', truePopup);
prevBtn.addEventListener('click', truePopup);
nextBtnAdapt.addEventListener('click', truePopup);
prevBtnAdapt.addEventListener('click', truePopup);
window.onload = truePopup()


// BURGER MENU

(function () {
    const burger = document.querySelector('.burger');
    const show = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-list');
    const main = document.querySelector('.main')
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        show.classList.toggle('show-nav');
        html.classList.toggle('overflow');
    })
    navLinks.addEventListener('click', () => {
        show.classList.remove('show-nav');
        burger.classList.remove('burger-active');
        html.classList.remove('overflow');
    })
    main.addEventListener('click', () => {
        show.classList.remove('show-nav');
        burger.classList.remove('burger-active');
        html.classList.remove('overflow');
    })
}());